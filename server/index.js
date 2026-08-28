import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import dns from "dns";
import { fileURLToPath } from "url";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

import User from "./models/User.js";
import Order from "./models/Order.js";
import Reservation from "./models/Reservation.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET =
  process.env.JWT_SECRET || "cheesy-crust-dev-secret-change-in-production";
const MONGODB_URI =
  process.env.MONGODB_URI ||
  process.env.MongoDB_URI ||
  "";

const MONGODB_FALLBACK_URI =
  process.env.MONGODB_FALLBACK_URI ||
  "mongodb://ayeshat1905_db_user:9P7OmrdElfP1QmM2@ac-p0hnwat-shard-00-00.kywsg4d.mongodb.net:27017,ac-p0hnwat-shard-00-01.kywsg4d.mongodb.net:27017,ac-p0hnwat-shard-00-02.kywsg4d.mongodb.net:27017/cheesycrust?ssl=true&authSource=admin&replicaSet=atlas-tmdznr-shard-0&retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());

function createToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "7d",
  });
}

function authOptional(req, _res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    req.userId = null;
    return next();
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
  } catch {
    req.userId = null;
  }

  next();
}

function authRequired(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Please log in first." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: "Session expired. Please log in again." });
  }
}

function publicUser(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, db: mongoose.connection.readyState === 1 });
});

app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim() || !email?.trim() || !password) {
      return res.status(400).json({ message: "Name, email, and password are required." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });
    }

    const existing = await User.findOne({ email: email.trim().toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: hashed,
    });

    const token = createToken(user);
    res.status(201).json({ token, user: publicUser(user) });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Could not create account. Please try again." });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = createToken(user);
    res.json({ token, user: publicUser(user) });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Could not log in. Please try again." });
  }
});

app.get("/api/auth/me", authRequired, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.json({ user: publicUser(user) });
  } catch (error) {
    console.error("Auth me error:", error);
    res.status(500).json({ message: "Could not load account." });
  }
});

app.post("/api/orders", authOptional, async (req, res) => {
  try {
    const { customer, items, paymentMethod, subtotal, delivery, total } =
      req.body;

    if (!customer?.name || !customer?.email || !customer?.phone || !customer?.address || !customer?.city) {
      return res.status(400).json({ message: "Please fill in all billing details." });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Your cart is empty." });
    }

    const order = await Order.create({
      user: req.userId || null,
      customer: {
        name: customer.name.trim(),
        email: customer.email.trim().toLowerCase(),
        phone: customer.phone.trim(),
        address: customer.address.trim(),
        city: customer.city.trim(),
        notes: customer.notes?.trim() || "",
      },
      items,
      paymentMethod: paymentMethod === "card" ? "card" : "cash",
      subtotal: Number(subtotal) || 0,
      delivery: Number(delivery) || 0,
      total: Number(total) || 0,
      status: "pending",
    });

    res.status(201).json({
      message: "Order placed successfully.",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: "Could not place order. Please try again." });
  }
});

app.post("/api/reservations", authOptional, async (req, res) => {
  try {
    const { name, email, phone, people, date, time, message } = req.body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !people || !date || !time) {
      return res
        .status(400)
        .json({ message: "Please fill in name, email, phone, guests, date, and time." });
    }

    const reservation = await Reservation.create({
      user: req.userId || null,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      people: Number(people),
      date,
      time,
      message: message?.trim() || "",
      status: "pending",
    });

    res.status(201).json({
      message: "Table reserved successfully.",
      reservationId: reservation._id,
    });
  } catch (error) {
    console.error("Reservation error:", error);
    res.status(500).json({ message: "Could not save reservation. Please try again." });
  }
});

async function connectDb(uri) {
  await mongoose.connect(uri, {
    family: 4,
    serverSelectionTimeoutMS: 20000,
  });
}

async function start() {
  if (!MONGODB_URI) {
    console.error("Missing MONGODB_URI in .env");
    process.exit(1);
  }

  try {
    try {
      await connectDb(MONGODB_URI);
    } catch (srvError) {
      console.warn("SRV connection failed, trying standard host list:", srvError.message);
      await connectDb(MONGODB_FALLBACK_URI);
    }

    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

start();

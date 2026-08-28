import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import dns from "dns";
import { fileURLToPath } from "url";

import User from "./models/User.js";
import Order from "./models/Order.js";
import Reservation from "./models/Reservation.js";

// --------------------------------------------------
// DNS configuration
// --------------------------------------------------
dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

// --------------------------------------------------
// Environment variables
// --------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env locally
dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

// --------------------------------------------------
// Express app
// --------------------------------------------------
const app = express();

// --------------------------------------------------
// Environment variables
// --------------------------------------------------
const JWT_SECRET =
  process.env.JWT_SECRET || "cheesy-crust-dev-secret-change-in-production";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  process.env.MongoDB_URI ||
  "";

// --------------------------------------------------
// Middleware
// --------------------------------------------------
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

// --------------------------------------------------
// MongoDB connection
// --------------------------------------------------
let dbConnectionPromise = null;

async function connectDb() {
  // Already connected
  if (mongoose.connection.readyState === 1) {
    return;
  }

  // Connection currently being established
  if (dbConnectionPromise) {
    return dbConnectionPromise;
  }

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured.");
  }

  dbConnectionPromise = mongoose
    .connect(MONGODB_URI, {
      family: 4,
      serverSelectionTimeoutMS: 20000,
    })
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      dbConnectionPromise = null;
      console.error("MongoDB connection error:", error.message);
      throw error;
    });

  return dbConnectionPromise;
}

// --------------------------------------------------
// Database middleware
// --------------------------------------------------
app.use(async (req, res, next) => {
  try {
    await connectDb();
    next();
  } catch (error) {
    console.error("Database middleware error:", error.message);

    return res.status(500).json({
      message: "Database connection failed.",
      error:
        process.env.NODE_ENV === "production"
          ? undefined
          : error.message,
    });
  }
});

// --------------------------------------------------
// JWT token
// --------------------------------------------------
function createToken(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

// --------------------------------------------------
// Optional authentication
// --------------------------------------------------
function authOptional(req, _res, next) {
  const header = req.headers.authorization || "";

  const token = header.startsWith("Bearer ")
    ? header.slice(7)
    : null;

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

// --------------------------------------------------
// Required authentication
// --------------------------------------------------
function authRequired(req, res, next) {
  const header = req.headers.authorization || "";

  const token = header.startsWith("Bearer ")
    ? header.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({
      message: "Please log in first.",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.userId = decoded.id;

    next();
  } catch {
    return res.status(401).json({
      message: "Session expired. Please log in again.",
    });
  }
}

// --------------------------------------------------
// Public user response
// --------------------------------------------------
function publicUser(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
}

// ==================================================
// HEALTH CHECK
// ==================================================

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    db: mongoose.connection.readyState === 1,
    message: "Cheesy Crust API is running",
  });
});

// ==================================================
// AUTH - SIGNUP
// ==================================================

app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim() || !email?.trim() || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existing = await User.findOne({
      email: normalizedEmail,
    });

    if (existing) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashed,
    });

    const token = createToken(user);

    return res.status(201).json({
      token,
      user: publicUser(user),
    });
  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      message: "Could not create account. Please try again.",
    });
  }
});

// ==================================================
// AUTH - LOGIN
// ==================================================

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const token = createToken(user);

    return res.json({
      token,
      user: publicUser(user),
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Could not log in. Please try again.",
    });
  }
});

// ==================================================
// AUTH - CURRENT USER
// ==================================================

app.get("/api/auth/me", authRequired, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.json({
      user: publicUser(user),
    });
  } catch (error) {
    console.error("Auth me error:", error);

    return res.status(500).json({
      message: "Could not load account.",
    });
  }
});

// ==================================================
// ORDERS
// ==================================================

app.post("/api/orders", authOptional, async (req, res) => {
  try {
    const {
      customer,
      items,
      paymentMethod,
      subtotal,
      delivery,
      total,
    } = req.body;

    // Validate customer
    if (
      !customer?.name ||
      !customer?.email ||
      !customer?.phone ||
      !customer?.address ||
      !customer?.city
    ) {
      return res.status(400).json({
        message: "Please fill in all billing details.",
      });
    }

    // Validate cart
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: "Your cart is empty.",
      });
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

      paymentMethod:
        paymentMethod === "card"
          ? "card"
          : "cash",

      subtotal: Number(subtotal) || 0,

      delivery: Number(delivery) || 0,

      total: Number(total) || 0,

      status: "pending",
    });

    return res.status(201).json({
      message: "Order placed successfully.",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Order error:", error);

    return res.status(500).json({
      message:
        "Could not place order. Please try again.",
    });
  }
});

// ==================================================
// RESERVATIONS
// ==================================================

app.post(
  "/api/reservations",
  authOptional,
  async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        people,
        date,
        time,
        message,
      } = req.body;

      if (
        !name?.trim() ||
        !email?.trim() ||
        !phone?.trim() ||
        !people ||
        !date ||
        !time
      ) {
        return res.status(400).json({
          message:
            "Please fill in name, email, phone, guests, date, and time.",
        });
      }

      const reservation =
        await Reservation.create({
          user: req.userId || null,

          name: name.trim(),

          email: email
            .trim()
            .toLowerCase(),

          phone: phone.trim(),

          people: Number(people),

          date,

          time,

          message:
            message?.trim() || "",

          status: "pending",
        });

      return res.status(201).json({
        message:
          "Table reserved successfully.",

        reservationId:
          reservation._id,
      });
    } catch (error) {
      console.error(
        "Reservation error:",
        error
      );

      return res.status(500).json({
        message:
          "Could not save reservation. Please try again.",
      });
    }
  }
);

// ==================================================
// 404 API HANDLER
// ==================================================

app.use("/api", (req, res) => {
  return res.status(404).json({
    message: "API route not found.",
    path: req.originalUrl,
  });
});

// ==================================================
// ERROR HANDLER
// ==================================================

app.use((error, _req, res, _next) => {
  console.error("Unhandled server error:", error);

  return res.status(500).json({
    message: "Internal server error.",
  });
});

// ==================================================
// EXPORT FOR VERCEL
// ==================================================

export { app, connectDb };

export default app;
import app, { connectDb } from "../server/index.js";

let dbPromise;

async function connectDatabase() {
  if (!dbPromise) {
    const uri =
      process.env.MONGODB_URI ||
      process.env.MongoDB_URI ||
      process.env.MONGODB_FALLBACK_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not configured");
    }

    dbPromise = connectDb(uri);
  }

  return dbPromise;
}

export default async function handler(req, res) {
  try {
    await connectDatabase();
    return app(req, res);
  } catch (error) {
    console.error("Database connection error:", error);

    return res.status(500).json({
      message: "Database connection failed",
    });
  }
}
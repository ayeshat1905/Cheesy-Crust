import app, { connectDb } from "./index.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
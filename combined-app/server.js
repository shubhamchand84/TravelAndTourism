import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

// Import routes
import authRoutes from "./backend/routes/auth.route.js";
import userRoutes from "./backend/routes/user.route.js";
import travelStoryRoutes from "./backend/routes/travelStory.route.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

const app = express();

// Enable CORS for development
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/travel-story", travelStoryRoutes);

// Serve static files from the uploads and assets directory
app.use("/uploads", express.static(path.join(__dirname, "backend/uploads")));
app.use("/assets", express.static(path.join(__dirname, "backend/assets")));

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, "frontend/dist")));

// Serve the React app for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
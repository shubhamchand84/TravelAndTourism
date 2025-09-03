const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");

// Load environment variables
dotenv.config();

// Manually set environment variables if not loaded from .env
if (!process.env.PORT) {
  process.env.PORT = 5000;
}

if (!process.env.MONGO_URI) {
  process.env.MONGO_URI = "mongodb+srv://shubhamchandofficial:Shubham%4029605@cluster0.m7jdsnj.mongodb.net/travelDB?retryWrites=true&w=majority&appName=Cluster0";
}

// Log environment variables for debugging
console.log('Environment variables:');
console.log('PORT:', process.env.PORT);
console.log('MONGO_URI exists:', !!process.env.MONGO_URI);

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const imageRoutes = require("./routes/image");
const adminRoutes = require("./routes/admin");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/images", imageRoutes);
app.use("/api/admin", adminRoutes);

// Set MongoDB URI with fallback
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/travel_tourism";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("new-comment", (data) => {
    io.emit("receive-comment", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

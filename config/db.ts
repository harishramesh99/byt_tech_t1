import mongoose from "mongoose";

let isConnected = false; // Track the connection state

export default async function connectDB() {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const uri = process.env.MONGO_URI!;
    await mongoose.connect(uri, {
      dbName: "test",
    });
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
}

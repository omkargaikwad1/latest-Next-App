import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Use a global variable to store the database connection
let isConnected = false;

export async function dbConnect() {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    throw new Error("Database connection failed");
  }
}

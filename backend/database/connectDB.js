import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_EVENT_MESSAGE",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to database!");
  } catch (err) {
    console.error("❌ Database connection error:", err);
    process.exit(1); // Stop the app if DB connection fails
  }
};

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import geminiRoutes from "./routes/geminiRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/gemini", geminiRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    console.log(`🚀 Server running on port ${PORT}`);
    await connectDB();
  } catch (error) {
    console.log(`Error occured : ${error}`);
  }
});

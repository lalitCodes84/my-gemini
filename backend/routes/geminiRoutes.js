import express from "express";
import askGemini from "../controllers/geminiController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/ask", authMiddleware, askGemini); // Protected Route

export default router;

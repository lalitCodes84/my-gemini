import Gemini from "gemini-ai";
import dotenv from "dotenv";
dotenv.config();

const gemini = new Gemini(process.env.GEMINI_API_KEY);

const askGemini = async (req, res) => {
  try {
    const { query } = req.body;
    const response = await gemini.ask(query);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default askGemini;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations
import homepageContent from "../utils/homepageContent";
import { pageVariants } from "@/utils/pageVariants";


function LandingPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-6 mt-14 h-fit bg-cover bg-center bg-gray-900 text-white"
    >
      <h1 className="text-4xl font-bold text-center text-[#e5fdfa] mb-6">
        Welcome to Gemini AI
      </h1>
      <p className="text-lg text-center text-gray-400 max-w-2xl mx-auto">
        Transform your workflow with AI-powered automation, real-time analytics,
        and top-tier security.
      </p>

      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all"
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {homepageContent.map((item) => (
          <motion.div
            key={item.id}
            className="p-6 bg-gray-800 rounded-xl shadow-lg text-center"
            whileHover={{ scale: 1.05 }} // Smooth hover animation
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-gray-400 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default LandingPage;

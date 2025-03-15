import React from "react";
import homepageContent from "../utils/homepageContent";

function LandingPage() {
  return (
    <div className="p-6 mt-14 h-fit bg-cover bg-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center text-[#e5fdfa] mb-6">
        Welcome to Gemini AI
      </h1>
      <p className="text-lg text-center text-gray-400 max-w-2xl mx-auto">
        Transform your workflow with AI-powered automation, real-time analytics,
        and top-tier security.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {homepageContent.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-gray-800 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-gray-400 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;

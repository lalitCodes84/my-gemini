import React from "react";
import faqData from "../utils/faqData";

function FAQPage() {
  return (
    <div className="p-6 mt-14 bg-gray-900 text-white h-fit">
      <h1 className="text-4xl font-bold text-center text-[#e5fdfa]">
        Frequently Asked Questions (FAQs)
      </h1>
      <p className="text-lg text-center text-gray-400 mt-4 max-w-3xl mx-auto">
        Find answers to common questions about My Gemini AI.
      </p>

      <div className="mt-10 max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold text-blue-400">
              {faq.question}
            </h3>
            <p className="text-gray-300 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;

import React from "react";
import aboutData from "../utils/aboutData";
import { motion } from "framer-motion"; // Import motion for animations

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const AboutPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-6 mt-14 h-fit bg-cover bg-center bg-gray-900 text-white"
    >
      <div className="p-6 mt-14 bg-gray-900 text-white h-fit">
        <h1 className="text-4xl font-bold text-center text-[#e5fdfa]">
          {aboutData.title}
        </h1>
        <p className="text-lg text-center text-gray-400 mt-4 max-w-3xl mx-auto">
          {aboutData.description}
        </p>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-[#e5fdfa]">Our Mission</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            {aboutData.mission}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center text-[#e5fdfa]">
            Key Features
          </h2>
          <ul className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {aboutData.features.map((feature, index) => (
              <li
                key={index}
                className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

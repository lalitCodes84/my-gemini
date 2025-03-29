import React from "react";
import servicesData from "../utils/servicesData";
import { motion } from "framer-motion"; // Import motion for animations
import { pageVariants } from "@/utils/pageVariants";


const ServicesPage = () => {
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
          Our AI-Powered Services
        </h1>
        <p className="text-lg text-center text-gray-400 mt-4 max-w-3xl mx-auto">
          Discover cutting-edge AI solutions designed to enhance productivity,
          creativity, and efficiency across various domains.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 gap-6 w-[70vw] m-auto">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform "
            >
              <div className="text-5xl text-center">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-center mt-4 text-[#e5fdfa]">
                {service.title}
              </h2>
              <p className="text-gray-400 text-center mt-2">
                {service.description}
              </p>
              <p className="text-gray-500 text-center mt-2">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;

import React from "react";
import contactData from "../utils/contactData";
import { motion } from "framer-motion"; // Import motion for animations

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function ContactPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-6 mt-14 h-fit bg-cover bg-center bg-gray-900 text-white"
    >
      <div className="p-6 mt-14 bg-gray-900 text-white h-[100vh]">
        <h1 className="text-4xl font-bold text-center text-[#e5fdfa]">
          Contact Us
        </h1>
        <p className="text-lg text-center text-gray-400 mt-4 max-w-3xl mx-auto">
          Have questions or need assistance? Reach out to us anytime.
        </p>

        <div className="mt-10 max-w-2xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
          <p className="text-lg">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${contactData.email}`}
              className="text-blue-400 hover:underline"
            >
              {contactData.email}
            </a>
          </p>
          <p className="text-lg mt-2">
            <strong>Phone:</strong> {contactData.phone}
          </p>
          <p className="text-lg mt-2">
            <strong>Address:</strong> {contactData.address}
          </p>

          <div className="mt-4 flex justify-center space-x-6">
            <a
              href={contactData.socialMedia.twitter}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href={contactData.socialMedia.linkedin}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={contactData.socialMedia.github}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;

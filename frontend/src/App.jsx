import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage"; // Example additional page
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPages";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AskGemini from "./pages/AskGemini";
import { Toaster } from "sonner"; // Import your Toaster component

function App() {
  return (
    <div className="w-full ">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/askgemini" element={<AskGemini />} />
        </Routes>
        <Footer />
      </>
      <Toaster />
    </div>
  );
}

export default App;

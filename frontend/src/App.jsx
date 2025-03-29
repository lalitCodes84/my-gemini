import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage"; 
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPages";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AskGemini from "./pages/AskGemini";
import { Toaster } from "sonner";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait"> 
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faqs" element={<FAQPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/askgemini" element={<AskGemini />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <div className="w-full pb-4">
            
                <Navbar />
                <AnimatedRoutes />
                <Footer />
           
            <Toaster />
        </div>
    );
}

export default App;

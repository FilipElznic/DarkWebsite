import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import TreasuryPartner from "./components/TreasuryPartner";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import TreasuryCTA from "./components/TreasuryCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#150a27] to-[#0c0617] text-white overflow-hidden relative">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

      {/* Main purple gradient spot light */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none animate-floating"></div>

      {/* Secondary subtle lights */}
      <div className="fixed top-40 right-20 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
      <div className="fixed bottom-20 left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      {/* Page content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Dashboard />
        <TreasuryPartner />
        <WhyChooseUs />
        <Testimonial />
        <TreasuryCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;

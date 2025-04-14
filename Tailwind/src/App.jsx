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
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Dashboard />
      <TreasuryPartner />
      <WhyChooseUs />
      <Testimonial />
      <TreasuryCTA />
      <Footer />
    </div>
  );
}

export default App;

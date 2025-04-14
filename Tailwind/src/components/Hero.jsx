import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-24 px-6 md:px-12 lg:px-20 text-center">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-transparent pointer-events-none"></div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl mx-auto">
        All of your company's
        <br />
        financial accounts in one view
      </h1>

      <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
        Connect and control all of your global business accounts from one
        dashboard.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-lg text-white font-medium">
          Schedule a demo
        </button>
        <button className="border border-gray-600 px-6 py-3 rounded-lg text-white font-medium">
          Learn more →
        </button>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 px-6 md:px-12 lg:px-20 text-center bg-black z-10">
      {/* Purple beam/spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[500px] bg-purple-800/30 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Top radial gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>

      {/* Title with gradient text */}
      <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
        <span className="inline-block">All of your company's</span>
        <br />
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
          financial accounts in one view
        </span>
      </h1>

      <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
        Connect and control all of your global business accounts from one
        dashboard.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3.5 rounded-lg text-white font-medium border border-white/10 shadow-lg shadow-purple-900/30">
            Schedule a demo
          </div>
        </button>
        <button className="px-7 py-3.5 rounded-lg text-white font-medium border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200">
          Learn more →
        </button>
      </div>
    </section>
  );
};

export default Hero;

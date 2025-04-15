import React from "react";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-lg bg-[#000113] py-4 px-6 md:px-12 lg:px-20 flex justify-between items-center border-b border-white/5">
      <div className="flex items-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-60"></div>
          <div className="relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" fillOpacity="0.9" />
            </svg>
          </div>
        </div>
        <span className="ml-2 font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Vesto
        </span>
      </div>

      <div className="hidden md:flex space-x-8">
        <a
          href="#"
          className="text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center"
        >
          Products <span className="ml-1 opacity-60">▾</span>
        </a>
        <a
          href="#"
          className="text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Customers
        </a>
        <a
          href="#"
          className="text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          About
        </a>
      </div>

      <button className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
        <div className="relative bg-[#2a1258] hover:bg-[#351a6d] px-4 py-1.5 rounded-md text-sm border border-white/10">
          Sign In
        </div>
      </button>
    </nav>
  );
};

export default Navbar;

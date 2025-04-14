import React from "react";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-20 flex justify-between items-center">
      <div className="flex items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" fillOpacity="0.8" />
        </svg>
        <span className="ml-2 font-semibold text-xl">Vesto</span>
      </div>

      <div className="hidden md:flex space-x-8">
        <a
          href="#"
          className="text-sm font-medium opacity-80 hover:opacity-100"
        >
          Home
        </a>
        <a
          href="#"
          className="text-sm font-medium opacity-80 hover:opacity-100"
        >
          Products ▾
        </a>
        <a
          href="#"
          className="text-sm font-medium opacity-80 hover:opacity-100"
        >
          Customers
        </a>
        <a
          href="#"
          className="text-sm font-medium opacity-80 hover:opacity-100"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-sm font-medium opacity-80 hover:opacity-100"
        >
          About
        </a>
      </div>

      <button className="bg-indigo-900 hover:bg-indigo-800 px-4 py-1 rounded-md text-sm">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;

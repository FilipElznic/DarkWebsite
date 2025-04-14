import React from "react";

const TreasuryCTA = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 relative h-screen flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-purple-900/20 to-transparent"></div>

      <div className="relative text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Centralise your treasury,
          <br />
          the modern way.
        </h2>

        <p className="text-lg text-gray-300 mb-10">
          Skip the legal nightmare for all your different accounts. Instead, one
          everything from one login.
        </p>

        <div className="mb-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-lg text-white font-medium">
            Schedule a demo
          </button>
        </div>

        {/* Client logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="h-8">
            <svg
              width="80"
              height="32"
              viewBox="0 0 80 32"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="8" width="60" height="16" rx="2" />
            </svg>
          </div>
          <div className="h-8">
            <svg
              width="80"
              height="32"
              viewBox="0 0 80 32"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="8" width="60" height="16" rx="2" />
            </svg>
          </div>
          <div className="h-8">
            <svg
              width="80"
              height="32"
              viewBox="0 0 80 32"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="8" width="60" height="16" rx="2" />
            </svg>
          </div>
          <div className="h-8">
            <svg
              width="80"
              height="32"
              viewBox="0 0 80 32"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="8" width="60" height="16" rx="2" />
            </svg>
          </div>
          <div className="h-8">
            <svg
              width="80"
              height="32"
              viewBox="0 0 80 32"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="8" width="60" height="16" rx="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreasuryCTA;

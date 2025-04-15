import React from "react";
import Img from "../assets/bgimage.png";

const WhyChooseUs = () => {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-20 relative h-screen flex items-end justify-center "
      style={{ backgroundColor: "#000113" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 h-[80vh] bg-contain bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${Img})`,

          opacity: 1,
        }}
      ></div>

      {/* Optional overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Keep the decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>

      <div className="relative">
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center mb-16 ">
          Why choose us
          <br />
          over others?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-gray-900/70 p-6 rounded-xl border border-purple-900/30 backdrop-blur-sm">
            <div className="flex items-start mb-4">
              <div className="bg-purple-900/50 p-3 rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 9l-6 6M9 9l6 6"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">One global login</h3>
            <p className="text-gray-400 text-sm">
              Skip the legal nightmare to set all your global accounts up. One
              login, our technology does everything else for you.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-900/70 p-6 rounded-xl border border-purple-900/30 backdrop-blur-sm">
            <div className="flex items-start mb-4">
              <div className="bg-purple-900/50 p-3 rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 8v8m-4-4h8" stroke="white" strokeWidth="1.5" />
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-time link</h3>
            <p className="text-gray-400 text-sm">
              All your treasury and reconciliation data, reports, live,
              real-time and automatic.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-900/70 p-6 rounded-xl border border-purple-900/30 backdrop-blur-sm">
            <div className="flex items-start mb-4">
              <div className="bg-purple-900/50 p-3 rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17h6M9 13h6M9 9h6M5 21V3h14v18H5z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Reporting, solved</h3>
            <p className="text-gray-400 text-sm">
              Easily create beautiful, custom reports with automatic updates on
              there and projections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

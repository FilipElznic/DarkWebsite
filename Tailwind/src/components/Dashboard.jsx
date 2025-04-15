import React from "react";

const Dashboard = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 mb-20 bg-black">
      <div className="relative">
        {/* Dashboard Container with Glow Effect */}
        <div className="relative">
          {/* Purple glow behind dashboard */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-xl blur-lg opacity-50"></div>

          {/* Dashboard frame with inner glow */}
          <div className="relative bg-gradient-to-b from-purple-800/40 via-purple-900/30 to-transparent p-[1px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent rounded-lg"></div>

            {/* Dashboard Content */}
            <div className="relative bg-[#0c0617]/95 rounded-lg overflow-hidden backdrop-blur-sm shadow-2xl">
              {/* Dashboard Interface Mockup */}
              <div className="relative w-full h-full min-h-[70vh] flex flex-col">
                {/* Top Navigation */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-900/80 border-b border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-500/50"></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-4 w-32 bg-gray-700/50 rounded"></div>
                    <div className="h-4 w-4 bg-gray-700/50 rounded"></div>
                    <div className="h-4 w-4 bg-gray-700/50 rounded"></div>
                  </div>
                </div>

                {/* Dashboard Content - Using flex-1 to fill remaining space */}
                <div className="flex flex-1 h-full overflow-hidden">
                  {/* Sidebar */}
                  <div className="hidden md:block w-48 bg-gray-900/60 border-r border-gray-700/50 p-4 overflow-y-auto">
                    <div className="h-6 w-32 bg-gray-700/60 rounded mb-6"></div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <div
                          key={item}
                          className="h-4 w-full bg-gray-700/60 rounded"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Main Content - Using flex-col to stack children vertically */}
                  <div className="flex-1 flex flex-col p-6 overflow-y-auto">
                    {/* Stats Section - Using flex-none to maintain height */}
                    <div className="mb-6 flex-none">
                      <div className="h-6 w-48 bg-gray-700/60 rounded mb-4"></div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className="h-28 bg-gray-800/50 rounded-lg border border-gray-700/50 p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
                          >
                            <div className="h-4 w-24 bg-gray-700/60 rounded mb-4"></div>
                            <div className="h-10 w-32 bg-purple-900/50 rounded relative overflow-hidden">
                              {/* Subtle gradient line */}
                              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Chart Area - Using flex-1 to fill remaining space */}
                    <div className="flex-1 min-h-[200px] bg-gray-800/50 rounded-lg border border-gray-700/50 p-4 relative overflow-hidden backdrop-blur-sm">
                      <div className="h-4 w-32 bg-gray-700/60 rounded mb-4"></div>
                      <div className="absolute inset-4 top-12">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 300 100"
                          preserveAspectRatio="none"
                        >
                          {/* Glow filter for path */}
                          <defs>
                            <filter
                              id="glow"
                              x="-20%"
                              y="-20%"
                              width="140%"
                              height="140%"
                            >
                              <feGaussianBlur stdDeviation="4" result="blur" />
                              <feComposite
                                in="SourceGraphic"
                                in2="blur"
                                operator="over"
                              />
                            </filter>
                          </defs>

                          {/* Background line with low opacity */}
                          <path
                            d="M0,80 C20,70 40,50 60,60 C80,70 100,80 120,60 C140,40 160,30 180,40 C200,50 220,70 240,60 C260,50 280,40 300,50"
                            fill="none"
                            stroke="rgb(139, 92, 246)"
                            strokeWidth="0.5"
                            strokeOpacity="0.2"
                          />

                          {/* Glowing line */}
                          <path
                            d="M0,80 C20,70 40,50 60,60 C80,70 100,80 120,60 C140,40 160,30 180,40 C200,50 220,70 240,60 C260,50 280,40 300,50"
                            fill="none"
                            stroke="rgb(139, 92, 246)"
                            strokeWidth="2"
                            filter="url(#glow)"
                          />

                          {/* Gradient area under the line */}
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgb(139, 92, 246)"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgb(139, 92, 246)"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <path
                            d="M0,80 C20,70 40,50 60,60 C80,70 100,80 120,60 C140,40 160,30 180,40 C200,50 220,70 240,60 C260,50 280,40 300,50 L300,100 L0,100 Z"
                            fill="url(#gradient)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom light effect */}
        <div className="absolute -bottom-10 left-0 right-0 h-24 bg-gradient-to-t from-purple-800/10 to-transparent blur-2xl"></div>
      </div>
    </section>
  );
};

export default Dashboard;

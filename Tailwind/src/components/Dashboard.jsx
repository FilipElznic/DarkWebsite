import React from "react";

const Dashboard = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 mb-20">
      <div className="relative">
        {/* Dashboard Image with Custom Dashboard Mock */}
        <div className="bg-gradient-to-b from-purple-900/30 via-purple-900/20 to-transparent p-1 rounded-lg shadow-2xl shadow-purple-500/20 glow-purple">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            {/* Dashboard Interface Mockup */}
            <div className="relative w-full h-96 md:h-[500px] bg-gray-900">
              {/* Top Navigation */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-4 w-32 bg-gray-700 rounded"></div>
                  <div className="h-4 w-4 bg-gray-700 rounded"></div>
                  <div className="h-4 w-4 bg-gray-700 rounded"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex h-[calc(100%-2rem)]">
                {/* Sidebar */}
                <div className="hidden md:block w-48 bg-gray-800 border-r border-gray-700 p-4">
                  <div className="h-6 w-32 bg-gray-700 rounded mb-6"></div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                      <div
                        key={item}
                        className="h-4 w-full bg-gray-700 rounded"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                  <div className="mb-8">
                    <div className="h-6 w-48 bg-gray-700 rounded mb-4"></div>
                    <div className="flex flex-wrap gap-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="w-full md:w-52 h-24 bg-gray-800 rounded-lg border border-gray-700 p-4"
                        >
                          <div className="h-4 w-24 bg-gray-700 rounded mb-2"></div>
                          <div className="h-8 w-32 bg-purple-900/50 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-48 bg-gray-800 rounded-lg border border-gray-700 p-4 relative overflow-hidden">
                    <div className="h-4 w-32 bg-gray-700 rounded mb-8"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <svg className="w-full h-20" viewBox="0 0 300 100">
                        <path
                          d="M0,80 C20,70 40,50 60,60 C80,70 100,80 120,60 C140,40 160,30 180,40 C200,50 220,70 240,60 C260,50 280,40 300,50"
                          fill="none"
                          stroke="rgb(139, 92, 246)"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-purple-900/10 to-transparent blur-xl"></div>
      </div>
    </section>
  );
};

export default Dashboard;

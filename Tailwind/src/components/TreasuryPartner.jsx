import React from "react";

const TreasuryPartner = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 relative">
      {/* Background elements */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>

      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Meet your new
          <br />
          treasury partner
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="feature-card p-8 rounded-xl transition-all hover:shadow-purple-glow">
            <h3 className="text-xl font-semibold mb-4">Earn yield</h3>
            <p className="text-gray-400 mb-6">
              Automatically put your idle cash to work and reap the benefits of
              our sophisticated investment tools.
            </p>
            <div className="h-32 bg-gray-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 200 100">
                  <defs>
                    <linearGradient
                      id="chartLine"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,70 Q25,40 50,50 T100,30 T150,50 T200,25"
                    fill="none"
                    stroke="url(#chartLine)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card p-8 rounded-xl transition-all hover:shadow-purple-glow">
            <h3 className="text-xl font-semibold mb-4">
              Group-wide cash visibility
            </h3>
            <p className="text-gray-400 mb-6">
              See all your global cash positions and accounts in one view,
              anytime and anywhere.
            </p>
            <div className="h-32 bg-gray-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Pie chart visualization */}
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="#1E293B" />
                  <path d="M50,10 A40,40 0 0,1 90,50 L50,50 Z" fill="#8B5CF6" />
                  <path d="M50,50 L90,50 A40,40 0 0,1 50,90 Z" fill="#6366F1" />
                  <path
                    d="M50,90 A40,40 0 0,1 10,50 L50,50 Z"
                    fill="#8B5CF6"
                    opacity="0.5"
                  />
                  <path
                    d="M50,50 L10,50 A40,40 0 0,1 50,10 Z"
                    fill="#EC4899"
                    opacity="0.5"
                  />
                  <circle cx="50" cy="50" r="15" fill="#1E293B" />
                </svg>

                {/* Dots around */}
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-8 left-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card p-8 rounded-xl transition-all hover:shadow-purple-glow">
            <h3 className="text-xl font-semibold mb-4">
              Unparalleled visibility
            </h3>
            <p className="text-gray-400 mb-6">
              Get instant access to real-time data and secure control at your
              fingertips.
            </p>
            <div className="h-32 bg-gray-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Glowing orb with pulse effect */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-white animate-pulse"></div>
                <div className="absolute w-24 h-24 rounded-full border-2 border-purple-500/50 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreasuryPartner;

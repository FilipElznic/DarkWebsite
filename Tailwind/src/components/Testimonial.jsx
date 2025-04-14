import React from "react";

const Testimonial = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16">
      <div className="bg-gray-900/80 rounded-xl p-8 md:p-10 max-w-4xl mx-auto border border-purple-900/30 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl"></div>

        <div className="relative">
          <blockquote className="text-xl md:text-2xl font-medium mb-6 text-center">
            "Every company needs to be responsibly managing their cash. Now,
            Vesto is helping companies do this on autopilot."
          </blockquote>

          <div className="flex items-center justify-center">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 overflow-hidden">
                <img
                  src="/api/placeholder/100/100"
                  alt="Sarah Martinez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="font-medium">Sarah Martinez</p>
              <p className="text-sm text-gray-400">
                VP of Finance, TechCorp Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

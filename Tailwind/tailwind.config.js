/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#050510",
        "dark-900": "#0D0D1D",
        "dark-800": "#12121F",
        "dark-700": "#1A1A2E",
        purple: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        pink: {
          400: "#F472B6",
          500: "#EC4899",
          600: "#DB2777",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-purple":
          "linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8))",
      },
      boxShadow: {
        "purple-glow": "0 0 40px 5px rgba(139, 92, 246, 0.3)",
        "purple-sm": "0 0 20px 2px rgba(139, 92, 246, 0.2)",
      },
    },
  },
  plugins: [],
};

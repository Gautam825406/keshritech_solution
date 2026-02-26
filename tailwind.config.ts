import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#e0ebff",
          500: "#5f8bff",
          600: "#4f76eb",
          700: "#3f61c9",
        },
      },
      boxShadow: {
        glass: "0 10px 35px rgba(15, 23, 42, 0.16)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #5f8bff 0%, #7c4dff 60%, #2dd4bf 100%)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
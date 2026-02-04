import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // TymeBank brand colors
        tyme: {
          bg: "#0A0A0A",
          "bg-secondary": "#1A1A1A",
          card: "#1F1F1F",
          border: "#2A2A2A",
          cyan: "#00E5CC",
          "cyan-dark": "#00B8A3",
          "cyan-glow": "rgba(0, 229, 204, 0.15)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyan-gradient": "linear-gradient(135deg, #00E5CC 0%, #00B8A3 100%)",
        "dark-gradient": "linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)",
      },
      boxShadow: {
        "cyan-glow": "0 0 40px rgba(0, 229, 204, 0.15)",
        "cyan-glow-sm": "0 0 20px rgba(0, 229, 204, 0.1)",
      },
      animation: {
        "wave": "wave 20s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-cyan": "pulse-cyan 2s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-cyan": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

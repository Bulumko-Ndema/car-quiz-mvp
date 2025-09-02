import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#FF6B00" },
        navy: { DEFAULT: "#1E2A38" }
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
export default config;

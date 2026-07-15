/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#08090b",
        panel: "#111318",
        panel2: "#161920",
        ivory: "#EDEBE6",
        muted: "#8b8e96",
        muted2: "#5c5f68",
        accent: "#8f9bff",
        accentDim: "#5b63a8"
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        khmer: ["Moulpali", "serif"]
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite"
      }
    }
  },
  plugins: []
};

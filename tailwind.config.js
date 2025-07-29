/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      vsm: "1px",
      sm: "375px",
      nsm: "600px",
      md: "376px",
      lg: "565px",
      nxl: "800px",
      xl: "1110px",
    },

    extend: {
      colors: {
        "light-cyans": "hsl(193, 18%, 86%)", //Added s at the end of every name to avoid clashes
        "mid-pink": "hsl(332, 80%, 92%)", //Buttons and scrollbar
        whites: "hsl(0, 0%, 100%)",
        //original
        "light-brown": "rgb(80, 80, 84)", // Main text area

        "dark-brown": "rgb(36, 37, 39)", // Background
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

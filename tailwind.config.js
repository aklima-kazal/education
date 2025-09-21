/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // keep your custom font here
      },
      colors: {
        svg: "#1B2336",
        Green: "#2AAA94",
        Blue: "#083F9B",
        indigo: "#7F56D9",
        button: "#4A4A4A",
        para: "#4E596B",
        black: "#323232",
        heading: "#324361",
        Purple: "#2B51CC",
        Purple_Purse: "#3E96EE",
        bg_linear: "#D9ECFF",
        footer_start: "#331DA8",
        footer_end: "#865AEF",
        information: "#084FC7",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
  },
  plugins: [],
};

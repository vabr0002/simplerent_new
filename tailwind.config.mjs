/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        lime: "#D4ED31",
        gray: "#DBDDE1",
        lightgray: "#F7F7F7",
        darkgrey: "#ACACAC",
        white: "#FFFFFF",
        red: "#FF0000",
        green: "#008709"
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", "sans-serif"]
      },
      fontSize: {
        h1: ["44px", { fontWeight: "700" }], // Bold
        h2: ["30px", { fontWeight: "700" }],
        h3: ["22px", { fontWeight: "700" }],
        h4: ["18px", { fontWeight: "700" }],
        h5: ["16px", { fontWeight: "700" }],
        h6: ["14px", { fontWeight: "700" }],
        p: ["16px", { fontWeight: "400" }] // Regular
      },
      spacing: {
        "top-spacing": "128px",
      },
    }
  },
  plugins: []
};

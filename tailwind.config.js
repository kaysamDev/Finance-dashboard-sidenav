/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "4rem", // 64px
        h2: "3rem", // 48px
        h3: "2.25rem", // 36px
        h4: "1.875rem", // 30px
        h5: "1.5rem", // 24px
        h6: "1.25rem", // 20px
        p: "1rem", // 16px
        small: "0.875rem", // 14px
        tiny: "0.75rem", // 12px
      },
    },
  },
  plugins: [],
};

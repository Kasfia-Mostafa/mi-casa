/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DM: "'DM Serif Display', 'serif'",
        San: "'Sansita', 'sans-serif'",
      },
    },
  },
  plugins: [require("daisyui")],
}


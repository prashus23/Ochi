/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'founders-grotesk-x-condensed': ['Founders_Grotesk_X-Condensed', 'sans-serif'], // Specify fallback if needed
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSerifText: ['DM Serif Text', 'serif'],
      },
      colors: {
        customGray: '#6B7280', // Custom gray color for text
        customBlack: '#000000', // Custom black color for logo
      },
    },
  },
  plugins: [],
};

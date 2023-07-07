/** @type {import('tailwindcss').Config} */

const { colors } = require('./theme/colors');
const { screens } = require('./theme/media-queries');
const { fontSize } = require('./theme/typography');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  theme: {
    extend: {
      colors,
      fontSize,
      maxWidth: {
        container: '1260px'
      },
      screens
    }
  }
};

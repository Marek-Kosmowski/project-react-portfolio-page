/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#0d1b2a',
        'logo-bg-color': '#001843',
        'header-bg': '#003566',
        'hero-bg': '#90e0ef',
      },
      textColor: {
        'main-text': '#e0e1dd',
        'para-text': '#778da9',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      '2xs': '0.75rem',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto Mono', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        lightgray: '#C0C0C0',
        background: '#031D30',
      },
    },
  },
};

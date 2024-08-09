/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          100: '#A3F9B9',
          400: '#40B25C',
          600: '#1C6C3E',
        },
        pink: {
          100: '#FEE5EC',
        },
        red: {
          500: '#DA4B4F',
          600: '#C22539',
        },
        grayscale: {
          200: '#F2F3F6',
          600: '#B5B5B6',
          900: '#1C1C1C',
        },
      },
    },
  },
  plugins: [],
};

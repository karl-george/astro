/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060807',
        accent: '#89CE87',
        g1: '#060807',
        g2: '#078054',
        g3: '#0A8A86',
        g4: '#C0D4A1',
        t1: '#F3F3F3',
        t2: '#14190F',
        t3: '#989898',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

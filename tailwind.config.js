/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060807',
        accent: '#C7F579',
        g1: '#060807',
        g2: '#078054',
        g3: '#0A8A86',
        g4: '#C0D4A1',
        t1: '#F3F3F3',
        t2: '#14190F',
        t3: '#989898',
        buttonGreen: '#02221D',
        buttonBlack: '#070909',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      // Button Animation
      animation: {
        border: 'border 4s linear infinite',
      },
      keyframes: {
        border: {
          to: { '--border-angle': '360deg' },
        },
      },
    },
  },
  plugins: [],
};

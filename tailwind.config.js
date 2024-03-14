/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      'xl': '1280px',
      'md': '792px',
      'sm': '320px' 
    },
    extend: {
      colors: {
        'black': '#27272A',
        'grey-dark': '#696969',
        'grey-light': '#E5E7EB',
        'white': '#FCFBFA',
        'lavender': '#7E3AF2',
        'red': '#E02424',
      }
    },
  },
  plugins: [],
}


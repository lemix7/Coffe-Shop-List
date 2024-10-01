/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        darkGrey:'#1B1D1F',
        Black : '#111315',
        Grey : '#6F757C',
        Torquese: '#BEE3CC',
        White : '#FEF7EE',
        Yellow : '#F6C768',
        Orange : '#ED735D'
      }
    
    },
  },
  plugins: [],
}


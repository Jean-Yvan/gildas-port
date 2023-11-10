/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      filter:{
        'invert-1': 'invert(1)',
      },      
      colors:{
        bgDarkPrimary: '#121212',
        bgDarkSecondary: '#181818',
        bgLightPrimary: '#FFFFFF',
        bgLightSecondary:'#F1F3F4',
        textDarkActive : '#ffffff',
        textDarkInactive : '#ADB7BE',
        textLightActive : '#3C3C3C',
        textLightInactive: '#ADB7BE',
        btnActiveColor:'',
        btnInactiveColor:'',
        inputDarkColor:'#ffffff1a',
        inputLightColor:'#f1f5f9',
        primaryDark:colors.purple,
        secondaryDark:colors.pink,
        primaryLight:colors.indigo,
        secondaryLight:colors.rose
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.filter-invert-1': {
          'filter': 'invert(1)',
        },
      });
    },
  ],
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration : {
        '2000': '2000ms',
      },
      fontSize : {
        xxs : '0.5rem'
      },
      colors: {
        'brand-line' : '#464646',
        'brand-theme' : "#ececec"
      },
      fontFamily : {
        dry : ['DRYCUSTOM']
      },
      keyframes : {
        'blur-in': {
            '0%': {
                filter : 'blur(50px)',
            },
            '100%': {
            },
        }
    },
    animation: {
        'blur-in': 'blur-in 3s ease-out'
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
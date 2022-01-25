const colors = require("tailwindcss/colors");

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'prfnt' : ["Poppins", "sans-serif"],
        'srfnt' : ["Barlow", "sans-serif"],
        
      },
      
      colors: {

        brclr: colors.blue,
        sbrclr: colors.pink,
        nclr: colors.neutral,

        /*
        sbrclr: {
          100: "#D33479",
          150: "#bf2065",
          200: "#ab0c51",
          250: "#97003c",
          300: "#830028",
          350: "#6f0014"
        },

        brclr: {
          100: "#5024ED",
          150: "#3c10d9",
          200: "#2700c5",
          250: "#1300b1",
          300: "#00009d",
          350: "#000093"
        },

        fnclr: {
          100: '#ffffff',
          150: "#ebebeb",
          200: '#d7d7d7',
          250: "#c3c3c3",
          300: '#afafaf',
          350: "#9b9b9b"
        },

        snclr: {
          100: '#000',
          150: "#141414",
          200: '#282828',
          250: "#3c3c3c",
          300: '#505050',
          350: "#646464"
        },
        */
      }
    },
    screens: {
      //That shorthand version of adding a small breakpoint produces an error

      'xs': '475px',
      // => @media (min-width: 475px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      screens: {
        '2xl' : '1280px'
      }
    },
  },
  plugins: [
    //require('@tailwindcss/forms') -> Required for working of Categories but they work any way and this line produces error
    require('@tailwindcss/custom-forms'),
  ],
}

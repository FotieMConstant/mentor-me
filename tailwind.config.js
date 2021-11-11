const colors = require('tailwindcss/colors')

module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
            sky: colors.sky,
            cyan: colors.cyan,
          },
        backgroundColor: {
          
        },
        borderColor: {
          
        },
        screens: {
         
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
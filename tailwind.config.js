/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        fadeIn:{
          from:{ opacity: 0}, to:{ opacity: 1}
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in',
        slideUp: 'slideUp 0.3s ease-in ',
        fadeIn:' fadeIn 0.5s ease-in-out'
      },
    },
  },
  plugins: [],
}
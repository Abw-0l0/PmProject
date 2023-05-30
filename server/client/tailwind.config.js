/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
          // sans: [
          //   '"Helvetica Neue"',
          // ],
        },
      colors: {
        'white': '#ffffff',
        'darkgreen': '#3B432B',
        'grayy': '#CECECC',
        'lightgreen': '#A7B778',
        'darkgray': '#B3B3B3',
        
      },
      screens: {
        xxl: '1700px',
      },
      backgroundImage: theme => ({
        'watermark': "url('/src/pictures/builderImageWaterMark.jpeg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      })
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}

// sans: [
//   '"Helvetica Neue"',
// ],

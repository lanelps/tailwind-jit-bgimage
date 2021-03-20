module.exports = {
  purge: [
    `./public/**/*.html`,
    `./src/**/*.{js,jsx}`
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: `transparent`,
      current: `currentColor`,
      black: `#000`,
      white: `#FFF`
    },
    screens: {
      xxs: `320px` ,
      xs: `428px`,
      sm: `768px` ,
      md: `1024px` ,
      lg: `1440px` ,
      xl: `1920px`
    },
    fontFamily: {
      times: [`TimesSansSerif`],
      house: [`HouseScript`, `cursive`]
    },
    // fontSize: {sm: ['14px', '20px']}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

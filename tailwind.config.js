module.exports = {
  purge: [
    `./public/**/*.html`,
    `./src/**/*.{js,jsx}`
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: `transparent`,
      current: `currentColor`,
      black: `#000`,
      white: `#FFF`,
      gold: `#D5A945`,
      blue: `#E3F2F3`,
      brown: `#53251A`
    },
    screens: {
      xs: `320px` ,
      sm: `428px`,
      md: `768px` ,
      lg: `1024px` ,
      xl: `1441px`
    },
    fontFamily: {
      times: [`TimesSansSerif`],
      house: [`HouseScript`, `cursive`]
    },
    fontSize: {
      d1: [`86.6px`, `1.2`],
      h1: [`53.3px`, `1.2`],
      h2: [`37.3px`, `1.2`],
      b1: [`17.3px`, `1.2`]
    },
    extend: {
      backgroundImage: theme => ({
        'cane-pattern': "url('../assets/images/cane-pattern.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}

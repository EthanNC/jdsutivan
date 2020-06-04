module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f39200", 
        secondary: "#2d2e2d"
      }
    },
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
      'auto': 'auto',
    }
  },
  variants: {
    backgroundColor: ['responsive', 'first', 'last', 'even', 'odd', 'hover', 'focus']
  },
  plugins: [],

}

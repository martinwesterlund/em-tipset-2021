module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'em-green': {
          light: '#00eb4e',
          default: '#00822b',
          dark: '#003802'
        }
      },
      spacing: {
        '160': '40rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
    },
  },
  plugins: [],
};

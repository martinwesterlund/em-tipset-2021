module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        slide: "slide 8s linear infinite",
      },
      colors: {
        "em-green": {
          light: "#00eb4e",
          default: "#00822b",
          dark: "#003802",
        },
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-200%)" },
        },
        "spin-rew": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        // slide: {
        //   from: { transform: "translateX(0)" },
        //   to: { transform: "translateX(-50%)" },

        // },
      },
      spacing: {
        160: "40rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
    },
  },
  plugins: [],
};

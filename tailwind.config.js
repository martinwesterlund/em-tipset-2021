module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        slide: "slide 8s linear infinite",
        "ball-spin" : "ball-spin 60s linear infinite",
        shrimp: "shrimp 1s linear infinite alternate-reverse"
      },
      colors: {
        "em-green": {
          light: "#00eb4e",
          default: "#00822b",
          dark: "#003802",
        },
        gold : "#dbc604",
        silver : "#e8e8e8",
        bronze : "#d19945"
      },
      fontSize: {
        'xxs': '.6rem',
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
        "ball-spin" : {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        "shrimp" : {
          from: { transform: "rotate(-12deg)" },
          to: { transform: "rotate(12deg)" },
        }
      },
      spacing: {
        160: "40rem",
        192: "48rem",
        240: "60rem"
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

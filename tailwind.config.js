module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        slide: "slide 8s linear infinite",
        "bounce-side": "bounce-side 1s infinite",
        "ball-spin": "ball-spin 60s linear infinite",
        shrimp: "shrimp 1s linear infinite alternate-reverse",
        rule: "rule 8s linear infinite alternate-reverse",
        progress: "progress 4s ease-out"
      },
      boxShadow: {
        "top" : '0px -4px 43px 0px rgba(0,0,0,0.5)'
      },
      colors: {
        "em-green": {
          light: "#00eb4e",
          default: "#00822b",
          dark: "#003802",
        },
        gold: "#dbc604",
        silver: "#e8e8e8",
        bronze: "#d19945",
      },
      fontSize: {
        xxs: ".6rem",
      },
      keyframes: {
        "bounce-side": {
          "0%, 100%": {
            transform: "translateX(-15%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          },
        },
        "bounce": {
          "0%, 100%": {
            transform: "translateY(-15%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          },
        },
        rule: {
          from: {transform: "scale(1.05)"},
          to: {transform: "scale(0.95)"}
        },
        progress: {
          "100%": {'stroke-dashoffset': "0"}
        },
        slide: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-200%)" },
        },
        "spin-rew": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        "ball-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        shrimp: {
          from: { transform: "rotate(-12deg)" },
          to: { transform: "rotate(12deg)" },
        },
      },
      spacing: {
        160: "40rem",
        176: "44rem",
        192: "48rem",
        240: "60rem",
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

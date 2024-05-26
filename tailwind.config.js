/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1f1f1f",
      },
      fontSize: {
        xxs: "10px",
      },
      fontFamily: {
        abel: ["abel", "sans-serif"],
        arvo: ["arvo", "serif"],
        bitter: ["bitter", "serif"],
        glegoo: ["glegoo", "serif"],
        lora: ["lora", "serif"],
        oswald: ["oswald", "sans-serif"],
        "playfair-display": ["playfair-display", "serif"],
        "proza-libre": ["proza-libre", "sans-serif"],
        "pt-serif": ["pt-serif", "serif"],
        quicksand: ["quicksand", "sans-serif"],
        "roboto-condensed": ["roboto-condensed", "sans-serif"],
        "roboto-flex": ["roboto-flex", "sans-serif"],
        "roboto-slab": ["roboto-slab", "serif"],
        rokkitt: ["rokkitt", "serif"],
        "slabo-27px": ["slabo-27px", "serif"],
        "work-sans": ["work-sans", "sans-serif"],
        "poppins-light": ["poppins-light", "sans-serif"],
        "poppins-regular": ["poppins-regular", "sans-serif"],
        "poppins-medium": ["poppins-medium", "sans-serif"],
        "poppins-semibold": ["poppins-semibold", "sans-serif"],
        "poppins-bold": ["poppins-bold", "sans-serif"],
        "poppins-extrabold": ["poppins-extrabold", "sans-serif"],
      },
    },
  },
  plugins: [],
};

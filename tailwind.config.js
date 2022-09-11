module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // body: ["Montserrat"],
        Productsansbold: "Product-Sans, sans-serif",
        KarlaBold: "Karla-Bold",
        Productsansregular: "Product-Sans-Regular",
        KarlaRegular: "Karla-Regular",
        Cursive: "'Gloria Hallelujah', cursive",
        MuktaBold: "Mukta-Bold",
      },
    },
  },
  plugins: [],
  darkMode: "media",
};

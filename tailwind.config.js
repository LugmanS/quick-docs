module.exports = {
  darkMode: "dark",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        e_text: "#474747",
        e_border: "#E3E3E3",
        e_navbar: "#171B21",
        e_background: "#020408",
        e_button: "#171B21"
      },
      height: {
        workspace: "calc(100vh - 3.5rem)"
      }
    },
  },
  plugins: [],
}
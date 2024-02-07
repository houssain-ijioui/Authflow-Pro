/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#3490dc",
        lightGrey: "#EAE9E8",
        darkBlue: "#001629",
        middleBlue: "#004680",
        buttonColor: "#5BA4DC"
      }
    },
  },
  plugins: [],
}



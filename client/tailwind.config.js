/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- GARANTA QUE ESTA LINHA ESTÁ AQUI
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
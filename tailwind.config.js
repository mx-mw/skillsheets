/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
		colors: {
			beige: "#A7694E",
			light: "#CBB1B1"
		},
		fontFamily: {
			sans: ['"Nunito"', 'sans-serif'],
			inter: ['"Inter"', 'sans-serif']
		}	
	},
  },
  plugins: [],
}

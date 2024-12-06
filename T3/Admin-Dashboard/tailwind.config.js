/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				main: 'var(--main-bg-color)',
				darkMain: 'var(--dark-main-bg-color)',
				secondary: 'var(--secondary-bg-color)',
				darkSecondary: 'var(--dark-secondary-bg-color)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}

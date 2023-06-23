/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['acid', 'synthwave']
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

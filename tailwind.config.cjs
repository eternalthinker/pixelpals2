/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			display: ['MunroSmall'],
			body: ['Munro']
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;

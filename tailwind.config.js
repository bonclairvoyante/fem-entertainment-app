import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			orange: '#FC4747',
			black: '#10141E',
			gray: '35A698F',
			navy: '#161D2F',
			white: '#FFFFFF'
		},
		extend: {}
	},
	daisyui: {
		themes: ['cupcake', 'black'],
		darkTheme: 'black'
	},
	plugins: [daisyui]
};

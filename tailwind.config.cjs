/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				bricolage: ['Bricolage Grotesque Regular', 'sans-serif'],
			},
			colors: {
				'dark-mountain': '#10ac84',
				'wild-caribbean': '#1dd1a1',
				'bluebell': '#341f97'
			}
		},
	},
	plugins: [],
}

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sofia: ['Sofia', 'cursive'],
			lato: ['Lato', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: {
					100: '#99C5EC',
					200: '#66A8E2',
					300: '#338BD9',
					400: '#006ECF',
				},
				grey: {
					100: '#F9FAFB',
					200: '#F4F6F8',
					300: '#E5E5E5',
					400: '#C4CDD5',
					500: '#919EAB',
					600: '#637381',
					700: '#454F5B',
					800: '#212B36',
					900: '#161C24',
				},
			},
		},
	},
	plugins: [],
};

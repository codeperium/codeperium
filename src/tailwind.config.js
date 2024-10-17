/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'2xl': '1920px',
			xl: '1440px',
			lg: '1024px',
			md: '600px',
			sm: '320px'
		},
		extend: {
			colors: {
				white: 'rgb(218, 225, 229)',
				grey: {
					light: 'rgb(57, 60, 71)',
					dark: 'rgb(38, 41, 50)'
				},
				red: 'rgb(255, 31, 48)',
				gold: 'rgb(208, 164, 92)',
				success: {
					30: 'rgba(60, 138, 24, .3)',
					DEFAULT: 'rgb(60, 138, 24)'
				},
				warning: {
					30: 'rgba(208, 164, 92, .3)',
					100: 'rgb(208, 164, 92)'
				},
				danger: {
					30: 'rgba(255, 31, 48, .3)',
					100: 'rgb(255, 31, 48)'
				}
			},
			lineHeight: {
				'14px': '0.875rem'
			},
			keyframes: {
				'nav-squares': {
					'7.5%, 87.5%': { backgroundImage: 'var(--icon-squares-a1)' },
					'15%, 80%': { backgroundImage: 'var(--icon-squares-a2)' },
					'22.5%, 72.5%': { backgroundImage: 'var(--icon-squares-a3)' },
					'30%, 65%': { backgroundImage: 'var(--icon-squares-a4)' },
					'37.5%, 57.5%': { backgroundImage: 'var(--icon-squares-a5)' },
					'45%': { backgroundImage: 'var(--icon-squares-full)' },
					'0%, 100%': { backgroundImage: 'none' }
				}
			},
			animation: {
				'nav-squares': 'nav-squares 5s ease-in-out infinite'
			},
			backgroundImage: {
				'sq-full': 'var(--icon-squares-full)'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		({ matchUtilities, addComponents, theme }) => {
			const icon = {
				'sq-full': 'var(--icon-squares-full)',
				'ar-d-u': 'var(--icon-arrow-double-up)',
				'ar-d-d': 'var(--icon-arrow-double-down)',
				'ar-d-r': 'var(--icon-arrow-double-right)',
				'ar-d-l': 'var(--icon-arrow-double-left)',
				'ar-u': 'var(--icon-arrow-up)',
				'ar-d': 'var(--icon-arrow-down)',
				'ar-r': 'var(--icon-arrow-right)',
				'ar-l': 'var(--icon-arrow-left)',
				'sl-b': 'var(--icon-slash-back)',
				'sl-f': 'var(--icon-slash-for)',
				size: {
					'3xsm': '0.875rem',
					'2xsm': '1rem',
					xsm: '1.125rem',
					sm: '1.25rem',
					md: '1.5rem',
					base: '2rem',
					lg: '2.5rem',
					xl: '3rem',
					'2xl': '4rem'
				}
			};
			addComponents({
				'.nav-before': {
					transitionProperty: 'color',
					transitionTimingFunction: 'ease-out',
					transitionDuration: '150ms',
					'&::before': {
						content: '""',
						visibility: 'hidden',
						width: theme('spacing.6'),
						height: theme('spacing.2'),
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						position: 'absolute',
						opacity: 0,
						top: 0,
						right: 0,
						transitionProperty: 'visibility, opacity',
						transitionTimingFunction: 'ease-out',
						transitionDuration: '150ms'
					},
					'&:hover': {
						'&::before': {
							visibility: 'visible',
							opacity: 1.0
						}
					}
				}
			}),
				matchUtilities(
					{
						icon: (value) => ({
							width: value,
							height: value
						})
					},
					{
						values: icon.size
					}
				),
				matchUtilities(
					{
						icon: (value) => ({
							maskImage: value
						})
					},
					{
						values: icon
					}
				),
				matchUtilities(
					{
						icon: (value) => ({
							backgroundColor: value
						})
					},
					{
						values: flattenColorPalette(theme('colors'))
					}
				);
		},
	]
};

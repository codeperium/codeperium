/** @type {import('tailwindcss').Config} */

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
          dark: 'rgb(38, 41, 50)',
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
        },

      },
      lineHeight: {
        '14px': '0.875rem',
      }
    },
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.nav-before': {
          '&::before': {
            content: '""',
            display: 'none',
            width: theme('spacing.6'),
            height: theme('spacing.2'),
            backgroundColor: theme('colors.red'),
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
            
          },
          '&:hover': {
            '&::before': {
                display: 'inline-block'
              }
            }
        },
      })
    }
  ],
}


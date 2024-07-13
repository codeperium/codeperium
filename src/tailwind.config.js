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
      },
      keyframes: {
        'nav-squares': {
          '7.5%, 87.5%': { backgroundImage: 'var(--icon-1)' },
          '15%, 80%': { backgroundImage: 'var(--icon-2)' },
          '22.5%, 72.5%':{ backgroundImage: 'var(--icon-3)' },
          '30%, 65%':{ backgroundImage: 'var(--icon-4)' },
          '37.5%, 57.5%':{ backgroundImage: 'var(--icon-5)' },
          '45%':{ backgroundImage: 'var(--icon-full)' },
          '0%, 100%': { backgroundImage: 'none' }
          
        }
      },
      animation: {
        'nav-squares': 'nav-squares 5s ease-out infinite',
      },
      backgroundImage: {
        'nav-squares-full': 'var(--icon-full)'
      }
    },
  },
  plugins: [
    ({ addComponents, theme }) => {
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
            transitionDuration: '150ms',
          },
          '&:hover': {
            '&::before': {
              visibility: 'visible',
              opacity: 1.0
            }
          },
        },
      })
    }
  ],
}

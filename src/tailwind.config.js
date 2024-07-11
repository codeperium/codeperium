/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
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
    },
  },
  plugins: [],
}


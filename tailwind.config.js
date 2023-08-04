/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Eudoxus Sans,sans-serif'],
      },
    },
    container: { center: true },
  },
  plugins: [daisyui],
  daisyui: {
    rtl: false,
    themes: [
      {
        dark: {
          ...themes.dark,
          'base-100': '#1A232E',
          'base-content': '#fff',
          '.container': {
            paddingInline: '1.5rem',
          },
        },
      },
    ],
  },
}

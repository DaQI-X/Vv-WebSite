/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd8ff',
          300: '#8ec0ff',
          400: '#599dff',
          500: '#3378ff',
          600: '#1b55f5',
          700: '#1440e1',
          800: '#1735b6',
          900: '#19308f',
          950: '#141f57',
        },
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Helvetica Neue"', 'Arial', '"Noto Sans SC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

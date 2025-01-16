/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: 'rgb(80, 167, 186)',
        dark: '#242b34',
        secondary: 'rgb(100 116 139 / var(--tw-text-opacity, 1))'
      }
    },
    screen: {
      // '2xl': '1320px'
    }
  },
  plugins: [],
}


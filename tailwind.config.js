/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      padding: '16px',
    },
    extend: {
      colors : {
        primary: '#14b8a6',
        dark: '#0f172a',
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}


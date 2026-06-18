/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#efca08',
        secondary: '#bbdef0',
        accent: '#4a99d3',
        heading: '#18191f',
        body: '#474a57',
        muted: '#878787',
        surface: '#f4f5f7',
        dark: '#1a1a1a',
        'footer-muted': '#d9dbe1',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        card: '1.25rem',
        button: '9999px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-purple': '#070221',
        'medium-purple': '#230A5E',
        'light-purple': '#2E2644',
        'navbar': '#040111'
      },
      width: {
        '132': '36rem',
      },
      backgroundImage: {
        'banner': 'url("/images/banner.png")',
      },
      borderColor: {
        'cyan-300': '#68d391',
      },
      outline: {
        'cyan-300': '2px solid #68d391',
      },
    },
  },
  variants: {
    outline: ['responsive', 'hover', 'focus', 'active']

  },
  plugins: [],
}

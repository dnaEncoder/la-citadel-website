/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory:        '#FAF7F1',
        card:         '#FFFDF8',
        charcoal:     '#0C0D0D',
        'charcoal-mid': '#111418',
        'charcoal-soft': '#171A1C',
        ink:          '#1D222A',
        muted:        '#5C6067',
        gold:         '#aa8c59',
        'gold-mid':   '#c5a880',
        'gold-light': '#caa974',
        beige:        '#E5D7C3',
        sand:         '#F4EEE5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        editorial: '1.12',
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      })
    },
  ],
}

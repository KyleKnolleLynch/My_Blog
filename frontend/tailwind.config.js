module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Futura', 'sans-serif'],
      serif: ['Electra', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      keyframes: {
        bouncer: {
          '0%': { transform: 'translateY(0)' },

          '100%': { transform: 'translateY(-100px)' },
        },
      },
      animation: {
        bouncer:
          'bouncer 0.6s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

module.exports = {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
      fontFamily: {
        sans: `Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
      colors: {
        brand: {
          primary: '#063762',
          accent: '#43c9d0',
          dull: '#435c74',
          white: '#ffffff',
          silver: '#b3b3b3',
          gray: '#5f6367',
          black: '#191919',
        },
        primary: {
          50: '#e6ebef',
          100: '#cdd7e0',
          200: '#9bafc0',
          300: '#6a87a1',
          400: '#385f81',
          500: '#063762',
          600: '#053258',
          700: '#052c4e',
          800: '#042745',
          900: '#04213b',
        },
        accent: {
          50: '#43c9d0',
          100: '#3cb5bb',
          200: '#36a1a6',
          300: '#2f8d92',
          400: '#28797d',
          500: '#226568',
          600: '#1b5053',
          700: '#143c3e',
          800: '#0d282a',
          900: '#071415',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

module.exports = {
  content: ['./src/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-soft-red': 'hsl(7, 99%, 70%)',
        'primary-yellow': 'hsl(51, 100%, 49%)',
        'graphic-design-text': 'hsl(167, 40%, 24%)',
        'photography-text': 'hsl(198, 62%, 26%)',
        footer: 'hsl(168, 34%, 41%)',
      },
      fontFamily: {
        sans: 'Barlow, sans-serif',
        heading: 'Fraunces, serif',
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.js'],
  },
  theme: {
    extend: {
      height: {
        "80": '20rem',
        "100": '25rem',
        "120": '30rem',
        "168": '42rem'
      },
      width: {
        "80": '20rem',
        "100": '25rem',
        "120": '30rem',
      }
    },
  },
  variants: {},
  plugins: [],
}

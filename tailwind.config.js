module.exports = {
  content: [
    'pages/**/*.{js,ts,jsx,tsx}',
    'components/**/*.{js,ts,jsx,tsx}',
    'pages/*',
  ],
  theme: {
    extend: {},
    screens: {
      laptop: '1025px',
      sm: '576px',
      md: '900px',
      lg: '1440px',
    },
  },
  plugins: [],
};

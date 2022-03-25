module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/*',
    '*',
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    screens: {
      st: '100px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        theme: {
          DEFAULT: '#F5F8FA',
        },
        darkTheme: '#10161F',
        hoverTheme: '#B5C1CC',
        darkHoverTheme: '#848E98',
        blueBlackText: '#758fa6',
        footerStart: '#261A58',
        footerEnd: '#603D04',
        mainFooterStart: '#21212A',
        mainFooterEnd: '#25211E',
        mainFooterMid: '#1C1831',
        footorgba: 'rgba(0, 0, 0, 0.54)',
        codeblock: '#ff3860',
        codeblockbg: '#f5f8fa',
        paraColor: '#19222f',
      },
      backgroundImage: {
        footor: "url('/logo/footor.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

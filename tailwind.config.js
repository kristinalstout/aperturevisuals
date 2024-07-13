module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',

        accent: '#EEF7F9',
      },
      transitionDuration: {
        '400':'400ms',
      },
      transitiontTop: {
        'top':'top',
      },
    },
  },
  plugins: [],
};
// module.exports = {
//   theme: {
//     extend: {
//       transitionProperty: {
//         'top': 'top',
//       },
//       transitionDuration: {
//         '400': '400ms',
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
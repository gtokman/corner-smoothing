const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function (_a) {
    const { addUtilities } = _a;
    const { theme } = _a;
    const options = theme('cornerSmoothing') || {};
    const sizes = options.sizes || {
      sm: '25px',
      md: '60px',
      lg: '75px',
    };
    const utilities = {};
    Object.entries(sizes).forEach(function (_a) {
      const key = _a[0];
      const size = _a[1];
      utilities['.smooth-corners-'.concat(key)] = {
        '@supports (mask-border-width: 50px)': {
          'mask-border': 'url("'
            .concat(
              options.maskPath || './assets/masks/mask@1x.png',
              '") 49% fill / '
            )
            .concat(size),
          '@media (min-resolution: 2x)': {
            'mask-border': 'url("'
              .concat(
                options.maskPath2x || './assets/masks/mask@2x.png',
                '") 49% fill / '
              )
              .concat(size),
          },
          '@media (min-resolution: 3x)': {
            'mask-border': 'url("'
              .concat(
                options.maskPath3x || './assets/masks/mask@3x.png',
                '") 49% fill / '
              )
              .concat(size),
          },
        },
      };
    });
    addUtilities(utilities);
  },
  {
    theme: {
      cornerSmoothing: {
        maskPath: './assets/masks/mask@1x.png',
        maskPath2x: './assets/masks/mask@2x.png',
        maskPath3x: './assets/masks/mask@3x.png',
        sizes: {
          sm: '25px',
          md: '60px',
          lg: '75px',
        },
      },
    },
  }
);

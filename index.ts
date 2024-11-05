const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities, theme }) {
    const options = theme('cornerSmoothing') || {};

    const sizes = options.sizes || {
      sm: '25px',
      md: '60px',
      lg: '75px',
    };

    const utilities = {};

    Object.entries(sizes).forEach(([key, size]) => {
      utilities[`.smooth-corners-${key}`] = {
        '@supports (mask-border-width: 50px)': {
          'mask-border': `url("${
            options.maskPath || './mask@1x.png'
          }") 49% fill / ${size}`,
          '@media (min-resolution: 2x)': {
            'mask-border': `url("${
              options.maskPath2x || './mask@2x.png'
            }") 49% fill / ${size}`,
          },
          '@media (min-resolution: 3x)': {
            'mask-border': `url("${
              options.maskPath3x || './mask@3x.png'
            }") 49% fill / ${size}`,
          },
        },
      };
    });

    addUtilities(utilities);
  },
  {
    theme: {
      cornerSmoothing: {
        maskPath: './mask@1x.png',
        maskPath2x: './mask@2x.png',
        maskPath3x: './mask@3x.png',
        sizes: {
          sm: '25px',
          md: '50px',
          lg: '75px',
        },
      },
    },
  }
);

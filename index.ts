const plugin = require('tailwindcss/plugin');

// Inline SVGs as Base64 encoded strings
const svgMask1x = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' rx='50' fill='black'/%3E%3C/svg%3E`;
const svgMask2x = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' rx='50' fill='black'/%3E%3C/svg%3E`;
const svgMask3x = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='450' height='450' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' rx='50' fill='black'/%3E%3C/svg%3E`;

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
        '@supports (mask-border-width: 60px)': {
          'mask-border': `url("${
            options.maskPath ?? svgMask1x
          }") 49% fill / ${size}`,
          '@media (min-resolution: 2x)': {
            'mask-border': `url("${
              options.maskPath ?? svgMask2x
            }") 49% fill / ${size}`,
          },
          '@media (min-resolution: 3x)': {
            'mask-border': `url("${
              options.maskPath ?? svgMask3x
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
        maskPath: svgMask1x,
        sizes: {
          sm: '25px',
          md: '60px',
          lg: '75px',
        },
      },
    },
  }
);

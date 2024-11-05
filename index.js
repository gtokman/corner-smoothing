const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities, theme, variants }) {
    // If your plugin requires user config,
    // you can access these options here.
    // Docs: https://tailwindcss.com/docs/plugins#exposing-options
    const options = theme('cornerSmoothing');

    // Add CSS-in-JS syntax to create utility classes.
    // Docs: https://tailwindcss.com/docs/plugins#adding-utilities
    const utilities = {
      '.example-utility-class': {
        display: 'block',
      },
    };

    // Conditionally add utility class based on user configuration.
    if (options.YOUR_PLUGIN_CUSTOM_OPTION) {
      utilities['.custom-utility-class'] = {
        'background-color': 'red',
      };
    }

    addUtilities(utilities, {
      variants: variants('cornerSmoothing'),
    });
  },
  {
    theme: {
      // Default options for your custom plugin.
      // Docs: https://tailwindcss.com/docs/plugins#exposing-options
      cornerSmoothing: {
        YOUR_PLUGIN_CUSTOM_OPTION: false,
      },
    },
    variants: {
      // Default variants for your custom plugin.
      // Docs: https://tailwindcss.com/docs/plugins#variants
      cornerSmoothing: ['responsive'],
    },
  }
);

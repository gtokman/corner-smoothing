var plugin = require('tailwindcss/plugin');
module.exports = plugin(function (_a) {
    var addUtilities = _a.addUtilities, theme = _a.theme;
    var options = theme('cornerSmoothing') || {};
    var sizes = options.sizes || {
        sm: '25px',
        md: '60px',
        lg: '75px',
    };
    var utilities = {};
    Object.entries(sizes).forEach(function (_a) {
        var key = _a[0], size = _a[1];
        utilities[".smooth-corners-".concat(key)] = {
            '@supports (mask-border-width: 50px)': {
                'mask-border': "url(\"".concat(options.maskPath || './assets/masks/mask@1x.png', "\") 49% fill / ").concat(size),
                '@media (min-resolution: 2x)': {
                    'mask-border': "url(\"".concat(options.maskPath2x || './assets/masks/mask@2x.png', "\") 49% fill / ").concat(size),
                },
                '@media (min-resolution: 3x)': {
                    'mask-border': "url(\"".concat(options.maskPath3x || './assets/masks/mask@3x.png', "\") 49% fill / ").concat(size),
                },
            },
        };
    });
    addUtilities(utilities);
}, {
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
});

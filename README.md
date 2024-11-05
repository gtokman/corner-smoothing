# corner-smoothing

> Adjusts a rounded corner to create a continuous curve. Inspired by [Rob](https://github.com/robb/Continuous-Corners-CSS).

## Installation

Install the plugin from npm:

```sh
$ npm install corner-smoothing
```

# Usage

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      cornerSmoothing: {
        maskPath: './mask@1x.png',
        maskPath2x: './mask@2x.png',
        maskPath3x: './mask@3x.png',
        sizes: {
          sm: '25px',
          md: '50px',
          lg: '75px',
          xl: '100px', // Custom size example
        },
      },
    },
  },
  plugins: [require('corner-smoothing')],
};
```

# Example

```html
<div class="smooth-corners-md bg-blue-500">Smooth corners!</div>
<div class="smooth-corners-xl bg-red-500">Extra smooth corners!</div>
```

# License

MIT

# corner-smoothing

> Adjusts a rounded corner to create a continuous curve.

Install the plugin from npm:

```
$ npm install corner-smoothing
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    // Optional. Your plugin might not have any options at all.
    cornerSmoothing: {
      // ...
      YOUR_PLUGIN_CUSTOM_OPTION: true,
      // ...
    },
  },
  variants: {
    // ...
    // Optional. Your plugin might not have any variants at all.
    cornerSmoothing: ['responsive'],
    // ...
  },
  plugins: [
    // ...
    require('corner-smoothing'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
.example-utility-class {
  display: block;
}

.custom-utility-class {
  background-color: red;
}
/* ... */
```

## License

corner-smoothing is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).

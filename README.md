<div>
 <a href="https://www.npmjs.com/package/tailwind-corner-smoothing">
  <img src="https://img.shields.io/npm/dm/tailwind-corner-smoothing" alt="npm downloads" />
</a>
  <a alt="discord users online" href="https://discord.gg/qnAgjxhg6n"
  target="_blank"
  rel="noopener noreferrer">
    <img alt="discord users online" src="https://img.shields.io/discord/986610142768406548?label=Discord&logo=discord&logoColor=white&cacheSeconds=3600"/>
  </a>
</div>

# Corner Smoothing

<img width="695" alt="Frame 1" src="https://github.com/user-attachments/assets/1170cfc9-14b9-4742-abe7-14d3bd2043bf" />

> Adjusts a rounded corner to create a continuous curve. Inspired by [Rob](https://github.com/robb/Continuous-Corners-CSS).

## Installation

Install the plugin from npm:

```sh
npm install tailwind-corner-smoothing --save-dev
```

# Usage
v4

```js
// Global.css / App.css

@plugin "tailwind-corner-smoothing";

```


v3
```js
// tailwind.config.js
module.exports = {
  plugins: [require('tailwind-corner-smoothing')],
};
```

# Example

```html
<div class="smooth-corners-md bg-blue-500">Smooth corners!</div>
```

# License

MIT

const fs = require('fs');

const paths = [
  './masks/mask@1x.png',
  './masks/mask@2x.png',
  './masks/mask@3x.png',
];

const base64 = paths.map(path => {
  const file = fs.readFileSync(path);
  return `data:image/png;base64,${file.toString('base64')}`;
});

console.log(`const base64Mask1x = '${base64[0]}';`);
console.log(`const base64Mask2x = '${base64[1]}';`);
console.log(`const base64Mask3x = '${base64[2]}';`);

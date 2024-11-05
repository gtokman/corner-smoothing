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

/**
 *     const base64Mask1x = options.maskPath || 'data:image/png;base64,...'; // Replace with actual base64 string
    const base64Mask2x = options.maskPath2x || 'data:image/png;base64,...'; // Replace with actual base64 string
    const base64Mask3x = options.maskPath3x || 'data:image/png;base64,...'; // Replace with actual base64 string
 */

console.log(`const base64Mask1x = options.maskPath || '${base64[0]}';`);
console.log(`const base64Mask2x = options.maskPath2x || '${base64[1]}';`);
// console.log(`const base64Mask3x = options.maskPath3x || '${base64[2]}';`);

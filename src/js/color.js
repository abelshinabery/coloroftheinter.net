const Vibrant = require('node-vibrant');

export async function getImageColorPalette(buffer) {
  const palette = await new Vibrant(buffer, {quality: 1}).getPalette((err, palette) => palette);
  return palette;
}

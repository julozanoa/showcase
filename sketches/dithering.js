function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
  }
  
  function draw() {
    loadPixels();
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let index = (x + y * width) * 4;
        let r = noise(x * 0.01, y * 0.01) * 255;
        let g = noise(x * 0.02, y * 0.02) * 255;
        let b = noise(x * 0.03, y * 0.03) * 255;
        let dither = (r + g + b) / 3 > random(255) ? 255 : 0;
        pixels[index] = dither;
        pixels[index + 1] = dither;
        pixels[index + 2] = dither;
        pixels[index + 3] = 255;
      }
    }
    updatePixels();
  }

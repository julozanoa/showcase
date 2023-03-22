let img;

function preload() {
    img = loadImage('https://cms.modumb.com/storage/magazine/_800x422/guia-practica-para-identificar-el-rostro-de-un-cliente-8282.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  noLoop();
}

function draw() {
  image(img, 0, 0, width, height);

  // Apply Floyd-Steinberg dithering algorithm
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (x + y * width) * 4;
      let oldColor = color(pixels[idx], pixels[idx + 1], pixels[idx + 2]);

      // Find the closest color in a 2-bit color space
      let newColor = color(
        round(red(oldColor) / 85) * 85,
        round(green(oldColor) / 85) * 85,
        round(blue(oldColor) / 85) * 85
      );

      // Set the pixel to the new color
      pixels[idx] = red(newColor);
      pixels[idx + 1] = green(newColor);
      pixels[idx + 2] = blue(newColor);

      // Calculate the error between the old color and the new color
      let errR = red(oldColor) - red(newColor);
      let errG = green(oldColor) - green(newColor);
      let errB = blue(oldColor) - blue(newColor);

      // Apply Floyd-Steinberg error diffusion
      if (x + 1 < width) {
        pixels[idx + 4] += errR * 7 / 16;
        pixels[idx + 5] += errG * 7 / 16;
        pixels[idx + 6] += errB * 7 / 16;
      }

      if (x - 1 >= 0 && y + 1 < height) {
        pixels[idx - 4 + width * 4] += errR * 3 / 16;
        pixels[idx - 3 + width * 4] += errG * 3 / 16;
        pixels[idx - 2 + width * 4] += errB * 3 / 16;
      }

      if (y + 1 < height) {
        pixels[idx + width * 4] += errR * 5 / 16;
        pixels[idx + 1 + width * 4] += errG * 5 / 16;
        pixels[idx + 2 + width * 4] += errB * 5 / 16;
      }

      if (x + 1 < width && y + 1 < height) {
        pixels[idx + 4 + width * 4] += errR * 1 / 16;
        pixels[idx + 5 + width * 4] += errG * 1 / 16;
        pixels[idx + 6 + width * 4] += errB * 1 / 16;
      }
    }
  }
  updatePixels();
}

let img;

function preload() {
  img = loadImage('https://cms.modumb.com/storage/magazine/_800x422/guia-practica-para-identificar-el-rostro-de-un-cliente-8282.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  noLoop();
}

function draw() {
  image(img, 0, 0);

  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = pixels[index + 0];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      let gray = (r + g + b) / 3;
      let threshold = random(255);
      if (gray > threshold) {
        pixels[index + 0] = 255;
        pixels[index + 1] = 255;
        pixels[index + 2] = 255;
      } else {
        pixels[index + 0] = 0;
        pixels[index + 1] = 0;
        pixels[index + 2] = 0;
      }
    }
  }
  updatePixels();
}

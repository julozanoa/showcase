let img;

function preload() {
  img = loadImage('https://images.ctfassets.net/u4vv676b8z52/1pog1a6vst4lCobfROxD7m/4174e272b7d1c731533e4537952a2343/enchroma-glasses-678x446-compressor.jpg?fm=jpg&q=80');
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);

  loadPixels();

  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];

    // CorrecciÃ³n para deuteranopia
    let rPrime = 0.625 * r + 0.375 * g + 0.0 * b;
    let gPrime = 0.7 * r + 0.3 * g + 0.0 * b;
    let bPrime = 0.0 * r + 0.3 * g + 0.7 * b;

    pixels[i] = rPrime;
    pixels[i + 1] = gPrime;
    pixels[i + 2] = bPrime;
  }

  updatePixels();
}
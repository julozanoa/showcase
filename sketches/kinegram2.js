let img;
let angle = 0;
let scaleFactor = 1;
let translation = 0;

function preload() {
  img = loadImage('https://picsum.photos/200');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(angle);
  scale(scaleFactor);
  imageMode(CENTER);
  image(img, 0, 0, 200, 200);
  angle += 0.01;
  scaleFactor = map(sin(frameCount / 10), -1, 1, 0.5, 1.5);
  tint(0, map(sin(frameCount / 10), -1, 1, 0, 255));
  rect(-width / 2, -height / 2, width, height);
}

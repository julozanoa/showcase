let angle = 0;
let spacing = 10;
let weight = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(0);
  strokeWeight(weight);
  for (let y = 0; y < height; y += spacing) {
    line(0, y, width, y);
  }
  stroke(255, 0, 0);
  strokeWeight(1);
  for (let y = 0; y < height; y += spacing) {
    let xOffset = map(sin(angle + y / 20), -1, 1, -spacing / 2, spacing / 2);
    line(xOffset, y, width + xOffset, y);
  }
  angle += 0.01;
}
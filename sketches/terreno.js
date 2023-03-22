let cols, rows;
let scl = 20;
let w = 600;
let h = 400;

let flying = 0;

let terrain = [];

function setup() {
  createCanvas(w, h, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  flying -= 0.1;
  let yoff = flying;

  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(0);
  stroke(255);

  // Definir los colores
  let waterColor = color(0, 0, 255);
  let sandColor = color(255, 255, 153);
  let grassColor = color(51, 204, 51);
  let mountainColor = color(153, 76, 0);
  let snowColor = color(255, 255, 255);

  noStroke();
  translate(-w/2, 50);
  rotateX(PI / 3);

  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      let h = terrain[x][y];
      let c;
      if (h < -50) {
        c = waterColor;
      } else if (h < 0) {
        c = lerpColor(waterColor, sandColor, map(h, -50, 0, 0, 1));
      } else if (h < 50) {
        c = lerpColor(sandColor, grassColor, map(h, 0, 50, 0, 1));
      } else if (h < 80) {
        c = lerpColor(grassColor, mountainColor, map(h, 50, 80, 0, 1));
      } else {
        c = lerpColor(mountainColor, snowColor, map(h, 80, 100, 0, 1));
      }
      stroke(c);
      vertex(x * scl, y * scl, h);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}
let img;
let shader;
let lensSize = 150;
let zoomFactor = 2;

function preload() {
  img = loadImage("/showcase/imgs/paisaje.jpg"); // Reemplaza 'imagen.jpg' con la ruta de tu imagen
  shader = loadShader("/showcase/sketches/shaders/zoom.vert", "/showcase/sketches/shaders/zoom.frag"); // Carga los shaders de zoom
}

function setup() {
  createCanvas(800, 600, WEBGL);
  noCursor();

  // Carga los shaders en el lienzo
  shader(shader);

  // Pasa los valores iniciales de los uniformes al shader
  shader.setUniform('texture', img);
  shader.setUniform('lensSize', lensSize);
  shader.setUniform('zoomFactor', zoomFactor);
}

function draw() {
  background(220);

  // Dibuja la imagen con el shader de zoom
  shader(shader);
  shader.setUniform('mouse', [mouseX, mouseY]);
  shader.setUniform('resolution', [width, height]);
  shader.setUniform('texture', img);
  shader.setUniform('lensSize', lensSize);
  shader.setUniform('zoomFactor', zoomFactor);
  rect(-width/2, -height/2, width, height);
}
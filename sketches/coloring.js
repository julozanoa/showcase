let shaderProgram;
let color1, color2;
let blendAmount = 0;

function preload() {
  shaderProgram = loadShader('/showcase/sketches/shaders/coloring.vert', '/showcase/sketches/shaders/coloring.frag');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
  color1 = [1.0, 0.0, 0.0]; // Color rojo
  color2 = [0.0, 0.0, 1.0]; // Color azul
  
  shader(shaderProgram);
  shaderProgram.setUniform('resolution', [width, height]);
  shaderProgram.setUniform('blendAmount', blendAmount);
}

function draw() {
  background(220);
  
  shaderProgram.setUniform('color1', color1);
  shaderProgram.setUniform('color2', color2);
  
  rect(0, 0, width, height);
  
  blendAmount = map(mouseX, 0, width, 0.0, 1.0);
  shaderProgram.setUniform('blendAmount', blendAmount);
}
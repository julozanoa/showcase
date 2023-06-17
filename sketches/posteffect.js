let img;
let shader;

function preload() {
  // Carga la imagen
  img = loadImage('/showcase/imgs/paisaje.jpg');
  
  // Carga el fragment shader
  shader = loadShader('zoom.vert', 'zoom.frag');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  
let img;
let shader;

function preload() {
  // Carga la imagen
  img = loadImage('/showcase/imgs/paisaje.jpg');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  
  // Crea el shader utilizando los fragment shaders integrados
  shader = createShader(vertShader, fragShader);
  shader.setUniform('texture', img);
  shader.setUniform('resolution', [width, height]);
}

function draw() {
  // Dibuja la imagen en el lienzo utilizando el shader
  shader(shader);
  rect(-width / 2, -height / 2, width, height);
}

// Fragment shader
const fragShader = `
precision mediump float;

uniform sampler2D texture;
uniform vec2 resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  
  // Calcula las coordenadas de textura para el zoom
  vec2 zoomCenter = vec2(0.5, 0.5);  // Punto central del zoom (0.5, 0.5 es el centro del lienzo)
  float zoomAmount = 2.0;  // Factor de zoom (2.0 duplica el tamaño)
  vec2 zoomUV = (uv - zoomCenter) / zoomAmount + zoomCenter;
  
  // Mapea las coordenadas de textura al tamaño del lienzo
  vec2 scaledUV = vec2(zoomUV.x * resolution.x, zoomUV.y * resolution.y);
  
  // Obtiene el color de la textura
  vec4 color = texture2D(texture, scaledUV);
  
  gl_FragColor = color;
}
`;

// Vertex shader
const vertShader = `
precision mediump float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
  vTexCoord = aTexCoord;
}
`;

// Inicia la aplicación de p5.js
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  shader(shader);
  box(200);
}
}
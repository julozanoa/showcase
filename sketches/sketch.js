let shader;
let img1;
let img2;

// Código del shader vertex
const vertShader = `
    precision highp float;

    // Default vertex shader
    attribute vec3 aPosition;
    attribute vec2 aTexCoord;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    varying vec2 vTexCoord;

    void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
    vTexCoord = aTexCoord;
    }
`;

// Código del shader fragment
const fragShader = `
precision highp float;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform int blendMode; // Blending mode selector
varying vec2 vTexCoord;

void main() {
vec4 color1 = texture2D(texture1, vTexCoord);
vec4 color2 = texture2D(texture2, vTexCoord);

vec4 blendedColor;

if (blendMode == 1) {
    // Blending mode 1: Multiply
    blendedColor = color1 * color2;
} else if (blendMode == 2) {
    // Blending mode 2: Screen
    blendedColor = vec4(1.0) - ((vec4(1.0) - color1) * (vec4(1.0) - color2));
}
// Add more blending modes as needed

gl_FragColor = blendedColor;
}
`;

function preload() {
  img1 = loadImage('/showcase/sketches/img1.jpg');
  img2 = loadImage('/showcase/sketches/img2.jpg');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  
  shader = createShader(vertShader, fragShader);
  shader.setUniform('tex0', img1);
  shader.setUniform('tex1', img2);
  shader.shader(this.shader);
}

function draw() {
  shader.setUniform('time', millis() / 1000.0);
  shader.setUniform('resolution', [width, height]);
  shader.setUniform('mouse', [mouseX, mouseY]);
  
  shader(shader);
  rect(0, 0, width, height);
}


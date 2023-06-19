let img;
let shader;

function preload() {
  // Carga la imagen y los shaders
  img = loadImage("/showcase/imgs/paisaje.jpg");
 
}

function setup() {
  createCanvas(800, 600);

  // Crea las casillas de verificación
  checkboxBlur = createCheckbox('Blur', false);
  checkboxBlur.position(10, 10);
  checkboxBlur.changed(applyFilters);

  checkboxGray = createCheckbox('Gray', false);
  checkboxGray.position(10, 30);
  checkboxGray.changed(applyFilters);

  checkboxInvert = createCheckbox('Invert', false);
  checkboxInvert.position(10, 50);
  checkboxInvert.changed(applyFilters);

  applyFilters(); // Aplica los filtros iniciales
}

function applyFilters() {
  background(220);
  image(img, 0, 0, width, height); // Dibuja la imagen original en el lienzo

  // Verifica las casillas seleccionadas y aplica los filtros correspondientes
  if (checkboxBlur.checked()) {
    filter(BLUR);
  }

  if (checkboxGray.checked()) {
    filter(GRAY);
  }

  if (checkboxInvert.checked()) {
    filter(INVERT);
  }
}

function draw() {
  
}

/*
let img;
let shaderBlur, shaderGray, shaderInvert;

function preload() {
  img = loadImage('tu_imagen.jpg'); // Reemplaza 'tu_imagen.jpg' con la ruta de tu imagen
  shaderBlur = loadShader('blur.vert', 'blur.frag');
  shaderGray = loadShader('gray.vert', 'gray.frag');
  shaderInvert = loadShader('invert.vert', 'invert.frag');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  noLoop();

  shader(shaderBlur); // Aplica el shader de Blur por defecto
  shaderBlur.setUniform('uResolution', [width, height]);
  shaderBlur.setUniform('uBlurAmount', 5.0); // Ajusta la cantidad de desenfoque

  image(img, -width / 2, -height / 2, width, height);
}

function draw() {
  background(0);

  // Verifica qué shader se debe aplicar según la tecla presionada
  if (keyIsDown(49)) { // Tecla '1' para Blur
    shader(shaderBlur);
    shaderBlur.setUniform('uResolution', [width, height]);
    shaderBlur.setUniform('uBlurAmount', 5.0); // Ajusta la cantidad de desenfoque
  } else if (keyIsDown(50)) { // Tecla '2' para Gray
    shader(shaderGray);
    shaderGray.setUniform('uResolution', [width, height]);
  } else if (keyIsDown(51)) { // Tecla '3' para Invert
    shader(shaderInvert);
    shaderInvert.setUniform('uResolution', [width, height]);
  }

  rect(-width / 2, -height / 2, width, height); // Dibuja un rectángulo para aplicar el shader
}
*/
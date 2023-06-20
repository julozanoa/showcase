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



let myShader;
let img;
let video;
let capture;
let isVideoPlaying = false;
let isCameraPlaying = false;
let mediaSelect;
let slider;
let checkbox;
const canvasWidth = 800; // Ancho fijo del canvas
const canvasHeight = 600; // Alto fijo del canvas

function preload() {
  myShader = loadShader('/showcase/sketches/shaders/coherencia.vert', '/showcase/sketches/shaders/coherencia.frag');
  img = loadImage("https://picsum.photos/400");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL); // Establecer el tamaño fijo del canvas
  noStroke();

  mediaSelect = createSelect();
  mediaSelect.position(10, 10);
  mediaSelect.option('Imagen');
  mediaSelect.option('Video');
  mediaSelect.option('Cámara');
  mediaSelect.changed(toggleMedia);

  capture = createCapture(VIDEO);
  capture.hide();

  slider = createSlider(1, 100, 50);
  slider.position(10, 40);

  checkbox = createCheckbox('Usar Slider', false);
  checkbox.position(10, 70);
  checkbox.changed(toggleSlider);

  slider.attribute('disabled', 'true');
}

function toggleMedia() {
  let mediaOption = mediaSelect.value();

  if (mediaOption === 'Imagen') {
    isVideoPlaying = false;
    isCameraPlaying = false;
    if (video) {
      video.stop();
      video.remove();
    }
  } else if (mediaOption === 'Video') {
    isVideoPlaying = true;
    isCameraPlaying = false;
    if (!video) {
      video = createVideo('/showcase/vid/coherencia.mp4', videoLoaded);
      video.hide();
    }
  } else if (mediaOption === 'Cámara') {
    isVideoPlaying = false;
    isCameraPlaying = true;
    if (video) {
      video.stop();
      video.remove();
    }
  }
}

function videoLoaded() {
  video.loop();
}

function toggleSlider() {
  if (checkbox.checked()) {
    slider.removeAttribute('disabled');
  } else {
    slider.attribute('disabled', 'true');
  }
}

function draw() {
  background(220);

  if (isVideoPlaying) {
    myShader.setUniform('tex', video);
  } else if (isCameraPlaying) {
    myShader.setUniform('tex', capture);
  } else {
    myShader.setUniform('tex', img);
  }

  let effectValue;
  if (checkbox.checked()) {
    effectValue = map(slider.value(), 1, 100, 100, 1);
  } else {
    effectValue = map(mouseX, 0, width, 100, 1);
  }
  myShader.setUniform('tiles', effectValue);

  shader(myShader);
  rect(0, 0, canvasWidth, canvasHeight); // Dibujar un rectángulo en el tamaño fijo del canvas
}

function windowResized() {
  resizeCanvas(canvasWidth, canvasHeight); // Mantener el tamaño fijo del canvas al redimensionar la ventana
}
let boxSize = 100;
let boxPosition;
let spotlightPosition;

function setup() {
  createCanvas(800, 600, WEBGL);
  boxPosition = createVector(0, 0, 0);
  spotlightPosition = createVector(0, 0, 200);
}

function draw() {
  background(50); // Cambiar el color del fondo a un tono más oscuro

  // Configuración del foco (spotlight)
  let spotlightDirection = createVector(mouseX - width / 2, mouseY - height / 2, -200);
  spotLight(255, 255, 255, spotlightPosition, spotlightDirection, 60, 1);

  // Rotación de la escena
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // Dibujar la caja con un color diferente
  push();
  translate(boxPosition.x, boxPosition.y, boxPosition.z);
  specularMaterial(255, 0, 0); // Cambiar el material de la caja a rojo
  box(boxSize);
  pop();

  // Mover la caja según la entrada del teclado
  if (keyIsDown(LEFT_ARROW)) {
    boxPosition.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    boxPosition.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    boxPosition.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    boxPosition.y += 5;
  }

  // Comprobar colisión con los límites
  if (boxPosition.x < -width / 2 + boxSize / 2) {
    boxPosition.x = -width / 2 + boxSize / 2;
  }
  if (boxPosition.x > width / 2 - boxSize / 2) {
    boxPosition.x = width / 2 - boxSize / 2;
  }
  if (boxPosition.y < -height / 2 + boxSize / 2) {
    boxPosition.y = -height / 2 + boxSize / 2;
  }
  if (boxPosition.y > height / 2 - boxSize / 2) {
    boxPosition.y = height / 2 - boxSize / 2;
  }
}

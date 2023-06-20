---
weight: 1
---

## Spatial Coherence

La coherencia espacial se refiere a la relación de fase entre puntos distintos de un haz de luz. Es utilizada para describir los efectos de la extensión espacial de fuentes de luz. Cuando dos puntos desplazados lateralmente se encuentran en el mismo frente de onda, los campos en esos puntos son coherentes espacialmente. En resumen, la coherencia espacial se refiere a la capacidad de un haz de luz para mantener una relación de fase constante entre diferentes puntos, lo cual es relevante en aplicaciones como la holografía y la interferometría para mediciones precisas de fase.

## Implementación de Spatial Coherence

El código es un programa que muestra un lienzo en 3D y permite al usuario elegir entre una imagen, un video o la cámara como fuente de entrada. Se utilizan elementos de interfaz de usuario como menús desplegables, controles deslizantes y casillas de verificación para ajustar los efectos visuales aplicados mediante un shader. El programa actualiza los medios de reproducción y realiza acciones correspondientes en función de la selección del usuario. En cada iteración del bucle de dibujo, se aplica el shader y se dibuja un rectángulo en el lienzo. Además, se realiza el ajuste del tamaño del lienzo cuando cambia el tamaño de la ventana.

{{< details title="coherencia.js" open=false >}}

```javascript

```

{{< /details >}}

{{< details title="coherencia.frag" open=false >}}

```javascript

precision highp float;

varying vec2 vUV;

uniform sampler2D tex;
uniform float tiles;

void main() {
  vec2 uv = vUV;
  uv.y = 1.0 - uv.y;
  
  uv *= tiles;
  
  uv = floor(uv);
  
  uv /= tiles;
  
  vec4 texColor = texture2D(tex, uv);
  
  gl_FragColor = texColor;
}

```

{{< /details >}}

{{< details title="coherencia.vert" open=false >}}

```javascript
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vUV;

void main() {
  // copy the texcoords into the varying
  vUV = aTexCoord;
  
  vec4 position = vec4(aPosition, 1.0);
  // swizzling 
  position.xy = position.xy * 2.0 - 1.0;
  gl_Position = position;
}

```

{{< /details >}}

{{< details title="coherencia.js" open=false >}}

```javascript
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
```

{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/coherencia.js" lib1="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js" lib2="/showcase/sketches/libraries/p5.quadrille.js" lib3="/showcase/sketches/libraries/p5.js"width="825" height="625" >}}

La coherencia espacial en un código implica considerar la relación visual entre elementos en una imagen o escena. Se utilizan técnicas como filtros espaciales, segmentación, detección de bordes y filtros de textura. Estas técnicas permiten resaltar características, agrupar regiones similares, identificar cambios bruscos y preservar la coherencia de la textura. El objetivo es mantener una relación visual coherente entre elementos cercanos y lograr una representación más natural y realista. En resumen, la coherencia espacial en el código se logra mediante técnicas que tienen en cuenta la relación espacial entre elementos visuales para mejorar la calidad y apariencia de la imagen o escena.
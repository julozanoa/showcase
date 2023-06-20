---
weight: 1
---

## Coloring

Los posteffects en imágenes con shaders son técnicas que se utilizan para aplicar efectos visuales o transformaciones a una imagen utilizando shaders. Un shader es un programa informático que se ejecuta en la unidad de procesamiento gráfico (GPU) y se utiliza para manipular los píxeles de una imagen o superficie en tiempo real.

## Implementación de Posteffects

Para implementar posteffects en imágenes con shaders, se requiere un entorno de programación que admita el uso de shaders, como p5.js. A continuación, se muestra un ejemplo de cómo se puede aplicar un efecto de desenfoque, escala de grises e inversión de colores a una imagen utilizando shaders en p5.js:

{{< details title="coloring.js" open=false >}}

```javascript

```

{{< /details >}}

{{< details title="coloring.frag" open=false >}}

```javascript

precision mediump float;


uniform vec2 resolution;
uniform vec3 color1;
uniform vec3 color2;
uniform float blendAmount;
varying vec2 vTexCoord;

void main() {
  vec3 blendedColor = mix(color1, color2, blendAmount);
  gl_FragColor = vec4(blendedColor, 1.0);
}

```

{{< /details >}}

{{< details title="coloring.vert" open=false >}}

```javascript
precision mediump float;

attribute vec3 aPosition;
varying vec2 vTexCoord;

void main() {
  vTexCoord = (aPosition.xy + 1.0) / 2.0;
  gl_Position = vec4(aPosition, 1.0);
}

```

{{< /details >}}

{{< details title="coloring.js" open=false >}}

```javascript
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
```

{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/coloring.js" lib1="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js" lib2="/showcase/sketches/libraries/p5.quadrille.js" lib3="/showcase/sketches/libraries/p5.js"width="675" height="675" >}}
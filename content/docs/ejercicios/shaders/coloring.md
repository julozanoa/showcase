---
weight: 1
---

## Coloring

El Color blending es el proceso de combinar dos o más colores para obtener un nuevo color resultante. Se utiliza en diversos contextos, como en pantallas de visualización y sistemas de impresión. En la mezcla aditiva, los colores se superponen y suman sus intensidades de luz, mientras que, en la mezcla sustractiva, se restan cantidades de pigmentos de colores primarios. Estos métodos permiten crear efectos visuales, transiciones suaves y representaciones realistas de colores en el diseño gráfico, la animación y otras aplicaciones visuales, es una técnica fundamental en el campo de la representación y manipulación de colores, su aplicación es amplia, abarcando desde la mezcla de colores primarios en pantallas hasta la combinación de tintas en sistemas de impresión. Gracias a esta capacidad de mezclar colores, es posible lograr efectos visuales impactantes y realistas en diversos campos creativos y tecnológicos.

## Implementación Coloring

Este programa carga y utiliza shaders para mezclar los colores color1 y color2 en un lienzo, La cantidad de mezcla es controlada por la posición horizontal del ratón, lo que permite una transición suave entre los colores seleccionados.

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

{{< p5-iframe sketch="/showcase/sketches/coloring.js" lib1="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js" lib2="/showcase/sketches/libraries/p5.quadrille.js" lib3="/showcase/sketches/libraries/p5.js"width="425" height="425" >}}

En primer lugar, se cargan los shaders desde archivos externos en la función preload(). Estos shaders son programas que definen cómo se realizará la mezcla de colores. Luego, en la función setup(), se crea un lienzo en modo WEBGL con dimensiones de 400x400 píxeles. Se definen los colores color1 y color2, que representan el rojo y el azul respectivamente. Además, se configuran los uniformes del shader, incluyendo la resolución del lienzo y la cantidad de mezcla. En la función draw(), se establecen los valores de los colores y la cantidad de mezcla en los uniformes del shader, luego, se dibuja un rectángulo en el lienzo que ocupa todo el espacio disponible. La cantidad de mezcla se actualiza en función de la posición horizontal del ratón, utilizando la función map(). Este valor actualizado se envía al shader para controlar la mezcla de colores.
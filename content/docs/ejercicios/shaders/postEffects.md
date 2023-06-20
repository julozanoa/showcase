---
weight: 1
---

## Posteffects

Los posteffects en imágenes con shaders son técnicas que se utilizan para aplicar efectos visuales o transformaciones a una imagen utilizando shaders. Un shader es un programa informático que se ejecuta en la unidad de procesamiento gráfico (GPU) y se utiliza para manipular los píxeles de una imagen o superficie en tiempo real.

## Implementación de Posteffects

Para implementar posteffects en imágenes con shaders, se requiere un entorno de programación que admita el uso de shaders, como p5.js. A continuación, se muestra un ejemplo de cómo se puede aplicar un efecto de desenfoque, escala de grises e inversión de colores a una imagen utilizando shaders en p5.js:

{{< details title="posteffects.js" open=false >}}

```javascript

```

{{< /details >}}

{{< details title="gray.frag" open=false >}}

```javascript
precision mediump float;


uniform sampler2D uTexture;

void main() {
  vec4 color = texture2D(uTexture, gl_FragCoord.xy / uResolution.xy);
  float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  gl_FragColor = vec4(vec3(gray), color.a);
}

```

{{< /details >}}

{{< details title="gray.vert" open=false >}}

```javascript
precision mediump float;


attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  gl_Position = vec4(aPosition, 1.0);
}

}

```

{{< /details >}}

{{< details title="posteffects.js" open=false >}}

```javascript
let img;
let shaderBlur, shaderGray, shaderInvert;

function preload() {
  img = loadImage('/showcase/imgs/paisaje.jpg'); // Reemplaza 'tu_imagen.jpg' con la ruta de tu imagen
  shaderBlur = loadShader('/showcase/sketches/shaders/blur.vert', '/showcase/sketches/shaders/blur.frag');
  shaderGray = loadShader('/showcase/sketches/shaders/gray.vert', '/showcase/sketches/shaders/gray.frag');
  shaderInvert = loadShader('/showcase/sketches/shaders/invert.vert', '/showcase/sketches/shaders/invert.frag');
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

  // Crea las casillas de verificación
  checkboxBlur = createCheckbox('Blur', false);
  checkboxBlur.position(10, 10);
  checkboxBlur.changed(shader(shaderBlur));
  shaderBlur.setUniform('uResolution', [width, height]);
  shaderBlur.setUniform('uBlurAmount', 5.0); // Ajusta la cantidad de desenfoque

  checkboxGray = createCheckbox('Gray', false);
  checkboxGray.position(10, 30);
  checkboxGray.changed(shader(shaderGray));
  shaderGray.setUniform('uResolution', [width, height]);

  checkboxInvert = createCheckbox('Invert', false);
  checkboxInvert.position(10, 50);
  checkboxInvert.changed(shader(shaderInvert));\
  shaderInvert.setUniform('uResolution', [width, height]);


  rect(-width / 2, -height / 2, width, height); // Dibuja un rectángulo para aplicar el shader
}
```

{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/posteffect.js" lib1="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js" lib2="/showcase/sketches/libraries/p5.quadrille.js" lib3="/showcase/sketches/libraries/p5.js"width="675" height="675" >}}

En este ejemplo, se carga una imagen específica utilizando loadImage(). Luego se cargan los shaders necesarios utilizando loadShader(). Se establece el shader de desenfoque como el shader predeterminado utilizando shader(shaderBlur), y se ajustan los parámetros del shader con shaderBlur.setUniform(). Se muestra la imagen original en el lienzo utilizando image(). Luego, se crean casillas de verificación para habilitar o deshabilitar los diferentes efectos. Cuando se cambia el estado de una casilla de verificación, se activa el shader correspondiente y se ajustan sus parámetros si es necesario.
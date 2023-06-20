---
weight: 1
---

## Fotomosaico

El fotomosaico es una imagen, retrato o fotografía que se divide por figuras geométricas, generalmente
por cuadrados o rectángulos del mismo tamaño, esto con el fin de remplazar las mismas
por otros retratos, fotografías o imágenes que concuerden con los colores promedio que encierran las
figuras geométricas de la imagen original, logrando que al visualizar la
imagen de un punto lejano se logre ver como la original , pero que al ver de un punto cercano o al
hacer zoom se pueda percibir que se compone de otras imágenes.

# Fotomosaico

## Fotomosaico por hardware

La implementación del fotomosaico se puede realizar a través de hardware, es decir, la construcción de un algoritmo que se encargue de convertir la imagen original en un mosaico de otras.

En la funcion `preload` definimos el fragmento a usar demoninado `photomosaic.frag`, a partir de ahi al mosaico final vamos a definir ciertos parametros que van a ser obtenidos al momento de recorrer la imagen, aqui se comparan los texeles del color promedio que posee cada pixel de la imagen o video original.

Los colores promedio de la imagen original son comparados con la imagen devuelta por el quadrille, haciendo uso de una tolerancia que va aumentando hasta encontrar el color mas cercano al del original y de esta forma ese color encontrado es el que se usa para llenar en la imagen que se muestra como resultado.

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

# Referencias

{{< hint warning >}}

- [1] _“Shaders”_ **github.com** https://github.com/mattdesl/lwjgl-basics/wiki/Shaders (Mar. 8, 2020).

{{< /hint >}}
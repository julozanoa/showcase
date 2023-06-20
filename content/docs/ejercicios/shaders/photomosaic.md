---
weight: 1
---

## Fotomosaico

La imagen tipo fotomosaico es una imagen, retrato o fotografía que se divide por figuras geométricas, generalmente por cuadrados o rectángulos del mismo tamaño, lo cual posibilita la reemplazo de las mismas por otros retratos, fotografías o imágenes que concuerden con los colores promedio que encierran las figuras geométricas de la imagen original, lo cual posibilita la reemplazo por otros retratos, fotografías o imágenes que concuerden con los colores promedio que encierran las figuras geométricas de la imagen original, lo cual posibilita la ruptura de las mismas por otros retratos, fotografías o imágenes que concuerden con los colores promedio que encierran las figuras geométricas de la imagen original, pero que al observar de un punto cercano o al hacer zoom.

# Fotomosaico

## La imagen tipo fotomosaico se implemento a través de hardware

La adopción del fotomosaico se puede llevar a cabo mediante hardware, es decir, la elaboración de un algoritmo que se encargue de transformar la imagen original en un mosaico de otras imágenes..

En la función preload, establecemos el fragmento llamado photomosaic.frag como el fragmento a utilizar. A partir de ahí, en el mosaico final, definiremos ciertos parámetros que se obtendrán al recorrer la imagen. En este proceso, se comparan los valores de color promedio de cada píxel de la imagen o video original.

Los colores promedio de la imagen original se comparan con la imagen generada por el cuadrícula, utilizando una tolerancia que aumenta gradualmente. De esta manera, se busca el color más cercano al original, y ese color encontrado se utiliza para rellenar la imagen resultante que se muestra.
{{< details title="photomosaic.js" open=false >}}

```javascript

```

{{< /details >}}

{{< details title="photomosaic.frag" open=false >}}

```javascript
precision mediump float;

const int num_images = 40;

// source (image or video) is sent by the sketch
uniform sampler2D source;

// palette is sent by the sketch
uniform sampler2D palette;
// number of cols are sent by sketch
uniform float cols;

uniform float lumas[num_images];
uniform float red_palette[num_images];
uniform float green_palette[num_images];
uniform float blue_palette[num_images];

// toggles debug
uniform bool debug;

// toggles coloring
uniform bool color_on;
uniform vec4 background;
uniform vec4 foreground;

// target horizontal & vertical resolution
uniform float resolution;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

float luma(vec3 color) {
  return (0.299 * color.r + 0.587 * color.g + 0.114 * color.b);
}

void main() {
  vec2 fontCoord = vTexCoord * resolution;
  vec2 srcCoord = floor(fontCoord);
  fontCoord = fontCoord - srcCoord;
  srcCoord = srcCoord / vec2(resolution);
  float mid = 1.0/(2.0*resolution);
  srcCoord = srcCoord + vec2(mid);

  vec4 key = texture2D(source, srcCoord);
  if (debug) {
    gl_FragColor = key;
  } else {
    float lumakey = luma(key.rgb);
    float selected = 0.0;

    bool complete = false;
    for(float j = 0.02; j <= 0.5; j += 0.02){
      for(int i = 0 ; i < num_images; i ++)
      {
        if((red_palette[i]/255.0> (key.r - j) && red_palette[i]/255.0 < (key.r + j)) && (green_palette[i]/255.0> (key.g - j) && green_palette[i]/255.0 < (key.g + j)) && (blue_palette[i]/255.0> (key.b - j) && blue_palette[i]/255.0 < (key.b + j))){
          selected = float(i);
          complete = true;
          break;
        }
      }
      if(complete){
        break;
      }
    }

    vec2 tile = vec2((floor(selected) + fontCoord.x) / cols, fontCoord.y);

    vec4 paletteTexel = texture2D(palette, tile);
    gl_FragColor = paletteTexel;
  }
}

```

{{< /details >}}

{{< details title="photomosaic.js" open=false >}}

```javascript
function preload() {
  image_src = loadImage("/showcase/imgs/paisaje.jpg");
  video_src = createVideo(["/showcase/vid/paisaje.mp4"]);
  video_src.hide(); // by default video shows up in separate dom
  mosaic = readShader("/showcase/sketches/shaders/photomosaic.frag");
  p = [];
  for (let i = 1; i <= 40; i++) {
    if (i.toString().length == 1) {
      p.push(loadImage(`/showcase/imgs/paisajes/00000${i}.jpg`));
    } else {
      p.push(loadImage(`/showcase/imgs/paisajes/0000${i}.jpg`));
    }
  }
}

function sample() {
  if (pg.width !== SAMPLE_RES * imageCells.width) {
    pg = createGraphics(SAMPLE_RES * imageCells.width, SAMPLE_RES);
    mosaic.setUniform("cols", imageCells.width);
  }
  imageCells.sort({
    ascending: true,
    cellLength: SAMPLE_RES,
    mode: "LUMA",
  });

  luma = imageCells.saveLuma({
    cellLength: SAMPLE_RES,
  });
  rgb = imageCells.saveRGB({
    cellLength: SAMPLE_RES,
  });
  drawQuadrille(imageCells, {
    graphics: pg,
    cellLength: SAMPLE_RES,
    outlineWeight: 0,
  });
  mosaic.setUniform("palette", pg);
  mosaic.setUniform("lumas", luma);
  mosaic.setUniform("red_palette", rgb.r);
  mosaic.setUniform("green_palette", rgb.g);
  mosaic.setUniform("blue_palette", rgb.b);
}
```

{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/photomosaic.js" lib1="/showcase/sketches/libraries/p5.shaderbox.js" lib2="/showcase/sketches/libraries/p5.quadrille.js"width="675" height="675" >}}

# Referencias

{{< hint warning >}}

- [1] _“Shaders”_ **github.com** https://github.com/mattdesl/lwjgl-basics/wiki/Shaders (Mar. 8, 2020).

{{< /hint >}}
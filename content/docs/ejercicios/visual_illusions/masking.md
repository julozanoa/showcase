---
weight: 3
---

## Masking

# Kinegrama

Un Kinegrama es un patrón visual utilizado en la impresión de seguridad para proteger documentos importantes como billetes, pasaportes y tarjetas de identificación. Es una técnica de animación óptica que utiliza imágenes en movimiento para crear un efecto de holograma, lo que dificulta la falsificación de documentos. Los Kinegrams son creados mediante una combinación de técnicas de grabado y holografía, y se han convertido en una herramienta crucial para garantizar la seguridad de documentos importantes en todo el mundo.



{{< details title="Kinegrama 1" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/kinegram.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/kinegram.js" width="400" height="400" >}}

{{< details title="Kinegrama 2" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/kinegram2.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/kinegram2.js" width="400" height="400" >}}

# Patrón de Moiré

El patrón de moiré es un fenómeno visual que ocurre cuando dos patrones con una cierta periodicidad se superponen y crean un patrón de interferencia. Este patrón puede ser visto como una serie de bandas, ondas o puntos en la imagen y puede ser utilizado en el diseño gráfico y la impresión para crear efectos visuales interesantes.

{{< details title="Patron de Moiré 1" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/moirePattern.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/moirePattern.js" width="400" height="400" >}}

{{< details title="Patron de Moiré 1" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/moirePattern2.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/moirePattern2.js" width="400" height="400" >}}

## Dithering

Dithering es una técnica utilizada en computación visual para simular colores o tonos de color que no están disponibles en una paleta limitada. Esto se logra mezclando píxeles de colores diferentes en patrones cuidadosamente diseñados para crear la ilusión de un color o tono de color más suave. El dithering se utiliza comúnmente en imágenes con una paleta limitada, como gráficos de computadora antiguos o imágenes GIF animadas, para mejorar la calidad visual de la imagen y reducir la apariencia de bandas de color.

{{< p5-iframe sketch="/showcase/sketches/dithering.js" width="400" height="400" >}}

El ruido de Perlin es un patrón de ruido pseudoaleatorio que se utiliza a menudo en gráficos por computadora y animación para crear texturas y efectos visuales realistas.
El programa utiliza el ruido Perlin para generar un patrón entremezclado en blanco y negro en el lienzo en función de las coordenadas x e y del píxel. El resultado es una animación fluida y abstracta que cambia continuamente a medida que se actualiza el valor de ruido para cada píxel en el lienzo.

![Imagen de prueba para distintos tipos de "Dithering"](https://cms.modumb.com/storage/magazine/_800x422/guia-practica-para-identificar-el-rostro-de-un-cliente-8282.jpg)
Figura: Imagen de prueba para distintos tipos de "Dithering"

{{< details title="Ruido de Perlin" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/dithering.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/dithering2.js" width="800" height="422" >}}

El programa  genera una imagen de ruido de Perlin en escala de grises en el lienzo de dibujo, para eso se utilizan diferentes frecuencias y amplitudes para los valores de x e y para producir un patrón de ruido complejo. Luego, utiliza los valores de ruido para generar valores de color gris para cada píxel en el lienzo de dibujo y, finalmente, actualiza los píxeles del lienzo con los nuevos valores de color para mostrar la imagen de ruido de Perlin. En resumen, el programa tiene como objetivo demostrar cómo se puede utilizar la biblioteca p5.js para generar y visualizar patrones de ruido en el navegador.

{{< details title="Algoritmo de dithering de Floyd-Steinberg" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/dithering2.js" width="800" height="422 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/dithering3.js" width="800" height="422" >}}

{{< details title="dithering" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/dithering3.js" width="800" height="422 */>}}
{{< /highlight >}}
{{< /details >}}

El algoritmo de dithering de Floyd-Steinberg se utiliza para reducir la cantidad de colores en una imagen, mientras se mantiene la apariencia visual de la imagen original. En este caso, el algoritmo reduce los colores de la imagen a un espacio de color de 2 bits y aplica la difusión de error de Floyd-Steinberg para lograr una apariencia visualmente similar a la imagen original con menos colores. El resultado final se muestra en el canvas.

---
weight: 1
---

# Coloring

Existen otros modelos de color que se utilizan en las industrias de diseño gráfico, impresión y fotografía. A continuación, se presentan breves descripciones de algunos de estos modelos de color:

## HSL (Hue, Saturation, Lightness)

Este modelo de color describe los colores en términos de matiz, saturación y luminosidad. El matiz se refiere al color puro, como el rojo o el azul, mientras que la saturación se refiere a la intensidad del color y la luminosidad se refiere a la claridad del color.

![HSL color model bicon](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkerXjR7QIRwifmls2Wtt2HIj1i0j1IbyWTr9CwAzNOSmzpsyf8Tdra8TDPl205kk8lk&usqp=CAU)

## HSB (Hue, Saturation, Brightness):

Es un modelo de color similar a HSL, pero en lugar de usar luminosidad, utiliza brillo. El brillo se refiere a la cantidad de luz en el color, pero no tiene en cuenta la saturación. Este modelo se utiliza comúnmente en programas de diseño gráfico y algunos sistemas de iluminación.

![HSB cone](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fbc50cb9b-fdb2-4239-acea-8f24b9516b47_375x375.png)

## XYZ

Es un modelo de color basado en la percepción del color humano. Se utiliza para describir todos los colores visibles para los seres humanos utilizando tres coordenadas: X, Y y Z. Este modelo se utiliza comúnmente en las industrias de impresión y fotografía para asegurar que los colores impresos o fotografiados sean precisos y consistentes.

![The CIE 1931 color space chromaticity diagram](https://www.researchgate.net/publication/269328324/figure/fig1/AS:357737004322816@1462302556661/y-chromaticity-diagram-of-CIE-XYZ-color-space.png)

Cada uno de estos modelos de color tiene sus propias ventajas y desventajas, y se utilizan en diferentes industrias y aplicaciones. Es importante comprender los diferentes modelos de color para trabajar con precisión y lograr los resultados deseados en proyectos de diseño gráfico, impresión y fotografía.

## Color blindness

El objetivo de este programa es cargar una imagen y aplicar una corrección de color para simular cómo se vería la imagen para una persona con deuteranopia, esta corrección se realiza mediante una transformación lineal de los valores de color originales de la imagen. La deuteranopia es una forma de daltonismo en la que los receptores de color verde en el ojo son defectuosos, lo que hace que los verdes se perciban como marrones y los rojos y naranjas sean difíciles de distinguir.

![The CIE 1931 color space chromaticity diagram](https://images.ctfassets.net/u4vv676b8z52/1pog1a6vst4lCobfROxD7m/4174e272b7d1c731533e4537952a2343/enchroma-glasses-678x446-compressor.jpg?fm=jpg&q=80)

Primero se carga la imagen en el canvas para acceder a los valores de los píxeles de la imagen. Luego, se recorre cada conjunto de cuatro valores (uno para cada componente de color: rojo, verde, azul y alfa) y se aplica una corrección de color específica para la deuteranopia utilizando una combinación de los valores de color originales. Por último, los nuevos valores de los píxeles se asignan de vuelta a la imagen  y se muestra la imagen modificada en el canvas.

{{< p5-iframe sketch="/showcase/sketches/colorblind.js" width="728" height="379" >}}

{{< details title="terreno" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/colorblind.js" width="728" height="379 */>}}
{{< /highlight >}}
{{< /details >}}

En resumen, el programa muestra cómo se puede ajustar el color de una imagen para hacerla más accesible para personas con deuteranopía y, en general, para mejorar la percepción del color para aquellos que tienen dificultades para distinguir ciertos tonos.

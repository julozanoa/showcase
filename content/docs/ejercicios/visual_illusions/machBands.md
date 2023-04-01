---
weight: 2
---

# **Mach Bands**

## **Terrain with Perlin noise**

{{< hint info >}}
### Introducción
{{< /hint >}}

El ruido Perlin es una técnica utilizada en la generación de gráficos en 3D para crear terrenos y objetos con aspecto natural. En este proyecto se utiliza la técnica del ruido Perlin para generar un terreno tridimensional que puede ser visualizado en tiempo real. La visualización utiliza diferentes colores para representar diferentes alturas en el terreno, lo que permite una visualización clara y detallada del terreno generado.

![Generación procedural: perlin noise](https://juancroldan.com/static/19.png)

{{< hint info >}}
### Antecedentes y Trabajos Previos
{{< /hint >}}

La ilusión visual de Mach Bands, descubierta por Ernst Mach, se refiere a un fenómeno en el que los bordes de sombras de diferentes tonos parecen ser más pronunciados de lo que realmente son. Esta ilusión es relevante en el contexto de la visualización de terrenos generados por ruido Perlin, ya que puede provocar el efecto de banding, en el que se producen transiciones abruptas entre diferentes tonalidades de color. Para evitar este efecto, se utilizan técnicas de sombreado y de interpolación para suavizar las transiciones entre diferentes tonalidades de color en el terreno generado.

{{< hint info >}}
### Solución
{{< /hint >}}

El objetivo de este programa es generar una visualización en tiempo real de un terreno tridimensional generado aleatoriamente utilizando el ruido Perlin, aquí se puede observar una cuadrícula de triángulos que se ajustan a la forma del terreno, y utiliza diferentes colores para representar diferentes alturas en el terreno. La visualización se actualiza continuamente, creando la ilusión de un efecto de movimiento y transformación en el terreno. Este programa puede utilizarse para crear escenas 3D para juegos, simulaciones, visualizaciones de datos y muchas otras aplicaciones. También es una herramienta útil para explorar la naturaleza del ruido Perlin y su capacidad para crear patrones complejos y orgánicos. El programa utiliza la técnica de dibujo de triángulo strip para crear la malla de triángulos que conforman el terreno. Esta técnica reduce el número de vértices necesarios para representar la malla, lo que permite una representación más eficiente y rápida del terreno.

{{< details title="terreno con stroke()" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/terreno.js" width="600" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/terreno.js" width="600" height="400" >}}

{{< details title="terreno con fill()" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/terreno2.js" width="600" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/terreno2.js" width="600" height="400" >}}

{{< hint info >}}
### Conclusión
{{< /hint >}}

El programa es un buen ejemplo de cómo se pueden utilizar las herramientas de procesamiento creativo para generar gráficos y animaciones interesantes e interactivos. Además, el programa también es una buena demostración de cómo se pueden utilizar técnicas de optimización de gráficos, como el dibujo de triángulos, para mejorar el rendimiento y la eficiencia en la visualización de gráficos complejos en tiempo real. En resumen, este programa es una buena demostración de cómo las herramientas de procesamiento creativo y las técnicas de optimización de gráficos pueden ser utilizadas juntas para crear visualizaciones interesantes y eficientes de datos en tiempo real.

Además, la demostración de diferentes técnicas de sombreado (stroke y fill) muestra cómo la elección de la técnica de sombreado puede afectar significativamente el resultado final de la visualización. En general, este programa es una buena demostración de las posibilidades creativas y técnicas que se pueden lograr mediante el uso del ruido Perlin en la generación de gráficos y visualizaciones.

{{< hint info >}}
### Trabajos Futuros
{{< /hint >}}

Existen muchas posibilidades para expandir y mejorar este proyecto en el futuro. Una posible área de mejora sería la implementación de texturas para mejorar la apariencia del terreno, ya que la falta de texturas puede hacer que la visualización parezca demasiado artificial. Además, se podrían explorar otras técnicas de sombreado y rendering para mejorar aún más la calidad visual de la visualización en tiempo real. Otra posibilidad sería agregar una mayor interactividad al programa, permitiendo al usuario controlar y ajustar diferentes parámetros, como la altura y la forma del terreno, para crear terrenos personalizados en tiempo real. En general, hay muchas posibilidades para mejorar y ampliar este proyecto en el futuro, y esperamos ver cómo se desarrolla y se expande en los próximos años.
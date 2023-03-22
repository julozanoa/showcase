# Aplicacion de Visualizacion de Terreno

El objetivo de este programa es generar una visualización en tiempo real de un terreno tridimensional generado aleatoriamente utilizando el ruido Perlin, aquí se puede observar una cuadrícula de triángulos que se ajustan a la forma del terreno, y utiliza diferentes colores para representar diferentes alturas en el terreno. La visualización se actualiza continuamente, creando la ilusión de un efecto de movimiento y transformación en el terreno. Este programa puede utilizarse para crear escenas 3D para juegos, simulaciones, visualizaciones de datos y muchas otras aplicaciones. También es una herramienta útil para explorar la naturaleza del ruido Perlin y su capacidad para crear patrones complejos y orgánicos. El programa utiliza la técnica de dibujo de triángulo strip para crear la malla de triángulos que conforman el terreno. Esta técnica reduce el número de vértices necesarios para representar la malla, lo que permite una representación más eficiente y rápida del terreno.

{{< p5-iframe sketch="/showcase/sketches/terreno.js" width="600" height="400" >}}

{{< details title="terreno con stroke()" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/terreno.js" width="600" height="400 */>}}
{{< /highlight >}}
{{< /details >}}


{{< p5-iframe sketch="/showcase/sketches/terreno2.js" width="600" height="400" >}}

{{< details title="terreno con fill()" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/terreno2.js" width="600" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

El programa es un buen ejemplo de cómo se pueden utilizar las herramientas de procesamiento creativo para generar gráficos y animaciones interesantes e interactivos. Además, el programa también es una buena demostración de cómo se pueden utilizar técnicas de optimización de gráficos, como el dibujo de triángulos, para mejorar el rendimiento y la eficiencia en la visualización de gráficos complejos en tiempo real. En resumen, este programa es una buena demostración de cómo las herramientas de procesamiento creativo y las técnicas de optimización de gráficos pueden ser utilizadas juntas para crear visualizaciones interesantes y eficientes de datos en tiempo real.

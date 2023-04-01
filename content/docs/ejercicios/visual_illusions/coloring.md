---
weight: 1
---

# **Coloring**

## **Color Blindness**

{{< hint info >}}
### Introducción
{{< /hint >}}

El daltonismo es un trastorno visual que afecta a la capacidad de distinguir ciertos colores. Las personas con daltonismo pueden tener dificultades para diferenciar colores como el rojo y el verde, o el azul y el amarillo. Esta condición puede ser hereditaria o adquirida debido a ciertas enfermedades o lesiones oculares.

El daltonismo puede afectar la vida cotidiana de una persona, especialmente en actividades que requieren una percepción precisa del color, como la lectura de mapas, el trabajo en diseño gráfico o la identificación de señales de tráfico. A pesar de que el daltonismo no tiene cura, existen herramientas y tecnologías que pueden ayudar a las personas con daltonismo a reconocer y diferenciar los colores con mayor facilidad.

{{< hint info >}}
### Antecedentes y Trabajos Previos
{{< /hint >}}

Se han propuesto diversas soluciones para mejorar la experiencia visual de las personas con esta condición. Una de ellas es el uso de algoritmos de simulación de daltonismo, que permiten obtener una vista previa de cómo una persona con daltonismo vería una imagen o escena. Además, se han desarrollado bibliotecas de colores accesibles, como la paleta de colores de WCAG, que se adaptan a las necesidades de las personas con daltonismo.

Otra línea de trabajo ha sido el desarrollo de interfaces de usuario personalizables para permitir que las personas con daltonismo ajusten los colores a su gusto, utilizando herramientas de selección de color o ajustes de tonalidad y saturación. También se han propuesto herramientas de asistencia por voz para ayudar a las personas con daltonismo a identificar los colores en una escena.

Por último, se ha explorado el uso de técnicas de aprendizaje automático para identificar los colores en una imagen y proporcionar descripciones verbales de los mismos a las personas con daltonismo. En resumen, existe una amplia gama de trabajos previos y soluciones potenciales que buscan mejorar la experiencia visual de las personas con daltonismo. 

{{< hint info >}}
### Solución
{{< /hint >}}

El objetivo de este programa es cargar una imagen y aplicar una corrección de color para simular cómo se vería la imagen para una persona con deuteranopia, esta corrección se realiza mediante una transformación lineal de los valores de color originales de la imagen. La deuteranopia es una forma de daltonismo en la que los receptores de color verde en el ojo son defectuosos, lo que hace que los verdes se perciban como marrones y los rojos y naranjas sean difíciles de distinguir.

![The CIE 1931 color space chromaticity diagram](https://images.ctfassets.net/u4vv676b8z52/1pog1a6vst4lCobfROxD7m/4174e272b7d1c731533e4537952a2343/enchroma-glasses-678x446-compressor.jpg?fm=jpg&q=80)

Primero se carga la imagen en el canvas para acceder a los valores de los píxeles de la imagen. Luego, se recorre cada conjunto de cuatro valores (uno para cada componente de color: rojo, verde, azul y alfa) y se aplica una corrección de color específica para la deuteranopia utilizando una combinación de los valores de color originales. Por último, los nuevos valores de los píxeles se asignan de vuelta a la imagen  y se muestra la imagen modificada en el canvas.

{{< details title="colorblind" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/colorblind.js" width="728" height="379 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/colorblind.js" width="728" height="379" >}}

En resumen, el programa muestra cómo se puede ajustar el color de una imagen para hacerla más accesible para personas con deuteranopía y, en general, para mejorar la percepción del color para aquellos que tienen dificultades para distinguir ciertos tonos.

{{< hint info >}}
### Conclusión
{{< /hint >}}

Los avances en el campo de la computación visual han permitido el desarrollo de diversas soluciones para mejorar la experiencia visual de las personas con daltonismo. Desde algoritmos de simulación de daltonismo hasta el uso de técnicas de aprendizaje automático, se han propuesto múltiples soluciones para abordar esta condición. Además, se han desarrollado bibliotecas de colores accesibles y herramientas de personalización para permitir a las personas con daltonismo ajustar los colores a su gusto y disfrutar de una experiencia visual más satisfactoria. En resumen, estos trabajos previos ofrecen un gran potencial para mejorar la vida de las personas con daltonismo y seguir avanzando en la investigación en este campo.

{{< hint info >}}
### Trabajos Futuros
{{< /hint >}}

Existen diversas áreas de investigación que pueden ser exploradas. Una de ellas es la implementación de algoritmos más precisos para la simulación de daltonismo, que permitan obtener vistas previas más fieles de cómo las personas con esta condición perciben el mundo. Asimismo, se pueden seguir desarrollando bibliotecas de colores accesibles y herramientas de personalización, con el objetivo de mejorar la experiencia visual de las personas con daltonismo.

Otra línea de trabajo interesante es la exploración de la realidad virtual y aumentada para mejorar la percepción visual de las personas con daltonismo. También se pueden explorar técnicas de aprendizaje profundo para identificar colores y mejorar las descripciones verbales para las personas con daltonismo.

En resumen, los trabajos futuros relacionados con el daltonismo tienen un amplio campo de exploración, y es posible seguir avanzando en la investigación para mejorar la calidad de vida de las personas con esta condición.

## **Color Models**
{{< hint info >}}
### Introducción
{{< /hint >}}

En el mundo de la imagen y el diseño, la elección del modelo de color es esencial para lograr resultados precisos y satisfactorios. Además del conocido modelo RGB, existen otros modelos que se utilizan en la industria gráfica, de impresión y de fotografía. Uno de ellos es el modelo HSL, que describe los colores en términos de matiz, saturación y luminosidad, mientras que el modelo HSB es similar, pero utiliza brillo en lugar de luminosidad. Por otro lado, el modelo XYZ se basa en la percepción del color humano y se utiliza en la industria de impresión y fotografía para asegurar la precisión y consistencia de los colores. En este artículo se describen brevemente estos modelos y su aplicación en diferentes contextos.

{{< hint info >}}
### Antecedentes y Trabajos Previos
{{< /hint >}}

A lo largo del tiempo, se han desarrollado diferentes modelos de color para su uso en la industria gráfica, de impresión y de fotografía. El modelo RGB es uno de los más conocidos, pero también se han utilizado otros modelos, como el modelo HSL y HSB, que describen los colores en términos de matiz, saturación, luminosidad y brillo. Además, el modelo XYZ se basa en la percepción del color humano y se utiliza en la industria de impresión y fotografía para asegurar la precisión y consistencia de los colores. Es importante conocer estos modelos y sus aplicaciones para trabajar con precisión y lograr los resultados deseados.

{{< hint info >}}
### Solución
{{< /hint >}}

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

{{< hint info >}}
### Conclusión
{{< /hint >}}

Existen varios modelos de color que se utilizan en las industrias de diseño gráfico, impresión y fotografía, cada uno con sus propias ventajas y desventajas. Hemos explorado algunos de ellos, como el modelo HSL que describe los colores en términos de matiz, saturación y luminosidad, y el modelo XYZ que se basa en la percepción del color humano. También hemos visto el modelo HSB, similar a HSL, pero que utiliza el brillo en lugar de luminosidad. Es fundamental comprender los diferentes modelos de color para trabajar con precisión y lograr los resultados deseados en proyectos de diseño gráfico, impresión y fotografía.

{{< hint info >}}
### Trabajos Futuros
{{< /hint >}}

A medida que la tecnología y la ciencia del color evolucionan, existen trabajos futuros que pueden mejorar y expandir los modelos de color existentes. Por ejemplo, algunos investigadores están trabajando en el desarrollo de modelos de color más precisos y estandarizados que sean compatibles con diferentes dispositivos y pantallas. También se están investigando modelos de color que se basen en la percepción del color por parte del observador, lo que podría mejorar la precisión de los colores percibidos en diferentes contextos. En general, se espera que los avances en los modelos de color mejoren la calidad y la consistencia de los resultados en las diferentes industrias que los utilizan.

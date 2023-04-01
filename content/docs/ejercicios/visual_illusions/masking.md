---
weight: 3
---

# **Visual Masking**

## **Kinegramas y Patrones de Moiré**

{{< hint info >}}
### Introducción
{{< /hint >}}

## Kinegrama

Un Kinegrama es un patrón visual utilizado en la impresión de seguridad para proteger documentos importantes como billetes, pasaportes y tarjetas de identificación. Es una técnica de animación óptica que utiliza imágenes en movimiento para crear un efecto de holograma, lo que dificulta la falsificación de documentos. Los Kinegrams son creados mediante una combinación de técnicas de grabado y holografía, y se han convertido en una herramienta crucial para garantizar la seguridad de documentos importantes en todo el mundo.

![Gianni Sarcone's Kinetic Art (Sarcone's Studio)](https://www.giannisarcone.com/kinegram/Kinegram_windmill4.gif)

## Patrón de Moiré

El patrón de moiré es un fenómeno visual que ocurre cuando dos patrones con una cierta periodicidad se superponen y crean un patrón de interferencia. Este patrón puede ser visto como una serie de bandas, ondas o puntos en la imagen y puede ser utilizado en el diseño gráfico y la impresión para crear efectos visuales interesantes.

![Patrón de muaré: Explorando a una clásica interferencia óptica – NeoTeo](https://www.neoteo.com/wp-content/uploads/2019/08/01.gif)

{{< hint info >}}
### Antecedentes y Trabajos Previos
{{< /hint >}}

En 2016, el artista John Edmark creó una serie de kinegramas utilizando la técnica de modelado 3D y la impresión 3D. Estas obras fueron presentadas en la exposición "Blooms: Strobe Animated Sculptures" en el Exploratorium de San Francisco. Además, en 2018, el artista suizo Zimoun creó una instalación de kinegramas en la que una serie de objetos en movimiento generaban patrones visuales cambiantes en la pared detrás de ellos. Esta obra se exhibió en la exposición "Zimoun: 36 ventilators, 4.7m³ packing chips" en el Museum Tinguely de Basilea.

![Blooms 2: Extraordinary New Strobe-Animated Sculptures by John Edmark — Colossal](https://www.thisiscolossal.com/wp-content/uploads/2017/01/blooms-1.gif)

Asimismo, el patrón Moiré ha sido explorado en diversas obras de arte y diseño. Por ejemplo, el diseñador gráfico Joshua Davis ha creado una serie de patrones Moiré para utilizar en sus obras digitales. En 2017, el artista argentino Leandro Erlich creó una instalación interactiva de patrones Moiré en la que los visitantes podían caminar a través de un espacio en el que se generaban patrones visuales en constante cambio. Esta obra se presentó en la exposición "Leandro Erlich: Seeing and Believing" en el Mori Art Museum de Tokio.

![Joshua Davis | kev5006](https://kev5006.files.wordpress.com/2013/09/01.jpg)

{{< hint info >}}
### Solución
{{< /hint >}}


{{< hint warning >}}
#### **Kinegramas**
{{< /hint >}}

Se crea un kinegrama utilizando las funciones push() y pop() para guardar y restaurar la configuración de transformación (traslación, rotación y escala). Se utiliza la función translate() para mover el origen de coordenadas al centro del lienzo y las funciones sin() y cos() para calcular las coordenadas (x, y) del kinegram en función del tiempo. Además, se utiliza una variable rot para rotar el kinegram a medida que avanza el tiempo. La variable scale se utiliza para cambiar la escala del kinegram en función del tiempo y la variable size se utiliza para establecer el tamaño del kinegram.

Por último, se utiliza la función map() para mapear el valor de sin(frameCount*0.05) del rango [-1, 1] al rango [0, 255] y así obtener un valor de opacidad para el kinegram. Se utiliza la función fill() para establecer el color de relleno del kinegram en negro con una opacidad variable y la función noStroke() para no dibujar un borde alrededor del kinegram. Se dibujan dos elipses utilizando la función ellipse(), una en la posición (x, y) y otra en la posición (-x, -y) reflejada en el eje de coordenadas.

{{< details title="Kinegrama 1" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/kinegram.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/kinegram.js" width="400" height="400" >}}

El siguiente código muestra una imagen cargada previamente y le aplica una serie de transformaciones. Primero, la imagen se mueve al centro del canvas utilizando la función translate(). Luego, se rota gradualmente en sentido horario con la variable angle. Además, se escala la imagen con la variable scaleFactor utilizando la función scale(). Se aplica un efecto de oscurecimiento a la imagen con la función tint(), utilizando una variable que va cambiando de valor según la posición de frameCount en la función sin(). Finalmente, se dibuja un rectángulo sobre el canvas para crear un efecto de "fade" en la imagen.

{{< details title="Kinegrama 2" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/kinegram2.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/kinegram2.js" width="400" height="400" >}}

{{< hint warning >}}
#### **Patrones Moiré**
{{< /hint >}}

Este código de p5.js crea un lienzo de 400x400 píxeles en el método setup(). En el método draw(), se genera un patrón Moiré, el cual es un patrón visual que se produce por la interferencia entre dos patrones superpuestos.

El patrón Moiré se genera mediante la creación de una serie de líneas paralelas, con un cierto espaciado entre ellas (spacing) y un grosor determinado (weight). A continuación, se desplaza cada una de estas líneas verticalmente de acuerdo con una función sinusoidal. La amplitud y la fase de esta función se definen mediante las variables amplitude y phase, respectivamente. Por último, se dibuja cada línea desplazada mediante la función line(). El resultado es un patrón visual que parece estar en constante movimiento y cambio.

{{< details title="Patron de Moiré 1" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/moirePattern.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/moirePattern.js" width="400" height="400" >}}

Este código genera una animación que crea un efecto de movimiento ondulatorio en una serie de líneas paralelas. La variable angle se utiliza para crear un desplazamiento horizontal en las líneas, mientras que spacing controla la distancia entre ellas. El primer bucle for dibuja las líneas paralelas de color negro, y el segundo bucle for dibuja las líneas ondulantes de color rojo. La función map() se utiliza para mapear los valores de sin() a valores de desplazamiento horizontal para crear el efecto ondulatorio. La velocidad del movimiento se controla aumentando el valor de angle en cada fotograma.

{{< details title="Patron de Moiré 1" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/moirePattern2.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/moirePattern2.js" width="400" height="400" >}}

{{< hint info >}}
### **Conclusión**
{{< /hint >}}

El desarrollo de la tecnología ha tenido un gran impacto en nuestras vidas y seguirá haciéndolo en el futuro. Desde la comunicación instantánea hasta la automatización de tareas, la tecnología ha mejorado muchos aspectos de nuestra vida diaria y ha transformado industrias enteras. Sin embargo, también ha creado nuevos desafíos y preocupaciones, como la privacidad en línea y la seguridad cibernética.

{{< hint info >}}
### **Trabajos Futuros**
{{< /hint >}}

Se espera que la tecnología siga avanzando y transformando el mundo en los próximos años. Algunas áreas que podrían ver un gran progreso incluyen la inteligencia artificial, la realidad virtual y aumentada, la biotecnología y la energía renovable. También se necesitará un enfoque cada vez mayor en la ética y la responsabilidad en la tecnología, así como en el desarrollo de soluciones para los problemas que la tecnología ha creado, como la desigualdad digital y el impacto ambiental.

## **Dithering**

{{< hint info >}}
### **Introducción**
{{< /hint >}}

Dithering es una técnica utilizada en computación visual para simular colores o tonos de color que no están disponibles en una paleta limitada. Esto se logra mezclando píxeles de colores diferentes en patrones cuidadosamente diseñados para crear la ilusión de un color o tono de color más suave. El dithering se utiliza comúnmente en imágenes con una paleta limitada, como gráficos de computadora antiguos o imágenes GIF animadas, para mejorar la calidad visual de la imagen y reducir la apariencia de bandas de color.

{{< hint info >}}
### **Antecedentes y Trabajos Previos**
{{< /hint >}}

Existen varios antecedentes y herramientas disponibles en línea que utilizan técnicas de dithering para crear efectos visuales interesantes. Una de estas herramientas es "Dithering Playground" de Benjamin Delacomb, la cual permite a los usuarios cargar imágenes y aplicar diferentes configuraciones de dithering para crear un efecto de pixelado y descargar la imagen resultante. Además, el "Pixel Art Dithering Tutorial" de MortMort es un tutorial de YouTube que brinda una guía paso a paso sobre cómo crear arte de píxeles utilizando técnicas de dithering en Photoshop. También se encuentra disponible la aplicación "Ascii Art Generator" de Artii, que convierte imágenes en arte ASCII mediante el uso de técnicas de dithering y permite a los usuarios personalizar el resultado ajustando la configuración de dithering y la paleta de colores.

Otras herramientas como "ApeMatrix" de apeSoft y "Patternum" de David Li utilizan técnicas de dithering para crear efectos visuales sincronizados con la música y patrones y texturas personalizables, respectivamente. En resumen, estas herramientas y antecedentes son una muestra de la versatilidad y creatividad que se puede lograr con el uso de técnicas de dithering en diferentes aplicaciones y contextos.

{{< hint info >}}
### **Solución**
{{< /hint >}}

El ruido de Perlin es un patrón de ruido pseudoaleatorio que se utiliza a menudo en gráficos por computadora y animación para crear texturas y efectos visuales realistas.
El programa utiliza el ruido Perlin para generar un patrón entremezclado en blanco y negro en el lienzo en función de las coordenadas x e y del píxel. El resultado es una animación fluida y abstracta que cambia continuamente a medida que se actualiza el valor de ruido para cada píxel en el lienzo.

{{< details title="Dithering" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/dithering.js" width="400" height="400 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/dithering.js" width="400" height="400" >}}

-----

{{< hint warning>}}
Figura: Imagen de prueba para distintos tipos de "Dithering"
{{< /hint >}}

![Imagen de prueba para distintos tipos de "Dithering"](https://cms.modumb.com/storage/magazine/_800x422/guia-practica-para-identificar-el-rostro-de-un-cliente-8282.jpg)


El programa  genera una imagen de ruido de Perlin en escala de grises en el lienzo de dibujo, para eso se utilizan diferentes frecuencias y amplitudes para los valores de x e y para producir un patrón de ruido complejo. Luego, utiliza los valores de ruido para generar valores de color gris para cada píxel en el lienzo de dibujo y, finalmente, actualiza los píxeles del lienzo con los nuevos valores de color para mostrar la imagen de ruido de Perlin. En resumen, el programa tiene como objetivo demostrar cómo se puede utilizar la biblioteca p5.js para generar y visualizar patrones de ruido en el navegador.

{{< details title="Ruido de Perling" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/dithering2.js" width="800" height="422 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/dithering2.js" width="800" height="422" >}}

El algoritmo de dithering de Floyd-Steinberg se utiliza para reducir la cantidad de colores en una imagen, mientras se mantiene la apariencia visual de la imagen original. En este caso, el algoritmo reduce los colores de la imagen a un espacio de color de 2 bits y aplica la difusión de error de Floyd-Steinberg para lograr una apariencia visualmente similar a la imagen original con menos colores. El resultado final se muestra en el canvas.

{{< details title="Algoritmo de dithering de Floyd-Steinberg" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/dithering3.js" width="800" height="422 */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/dithering3.js" width="800" height="422" >}}

{{< hint info >}}
### **Conclusión**
{{< /hint >}}

El uso de técnicas de dithering y ruido de Perlin en gráficos por computadora y animación ha demostrado ser una herramienta versátil y creativa para mejorar la calidad visual de las imágenes y crear efectos visuales realistas. La biblioteca p5.js y el algoritmo de dithering de Floyd-Steinberg son dos ejemplos de cómo estas técnicas pueden ser utilizadas en el navegador web para generar patrones de ruido y reducir la cantidad de colores en una imagen. Además, existen diversas herramientas y antecedentes en línea que utilizan técnicas de dithering para crear efectos visuales interesantes.

{{< hint info >}}
### **Trabajos Futuros**
{{< /hint >}}

En el futuro, se pueden explorar más a fondo las posibilidades del ruido de Perlin y otras técnicas de generación de patrones de ruido en la creación de gráficos por computadora y animación. Además, se puede investigar cómo las técnicas de dithering pueden ser aplicadas a otras áreas, como el procesamiento de señales y la compresión de imágenes. También se pueden desarrollar herramientas y aplicaciones más avanzadas que permitan a los usuarios personalizar y ajustar los parámetros de dithering y ruido para crear efectos visuales únicos y personalizados.
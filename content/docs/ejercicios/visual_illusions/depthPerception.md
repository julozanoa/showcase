---
weight: 6
---

# **Depth Perception**

## **2D a 3D**

{{< hint info >}}
### Introducción
{{< /hint >}}

La percepción de la profundidad es una habilidad importante del sistema visual humano que nos permite percibir la distancia entre objetos en el mundo en tres dimensiones. Existen varias pistas o claves que nuestro cerebro utiliza para reconstruir la percepción de la profundidad, incluyendo las claves monoculares y binoculares.

{{< hint info >}}
### Antecedentes y Trabajos Previos:
{{< /hint >}}

Históricamente, la perspectiva lineal fue desarrollada en el Renacimiento y utilizada en pinturas de la época. Además, se han identificado otras perspectivas como la perspectiva oblicua y la perspectiva inversa. En cuanto a las claves monoculares, la profundidad de campo se refiere a la distancia entre los objetos más cercanos y más lejanos que se pueden capturar con claridad en una imagen tomada con una cámara.

{{< hint info >}}
### Solución
{{< /hint >}}

El código adjunto es un ejemplo de cómo se puede utilizar la biblioteca p5.js para crear objetos 3D en un canvas. La función setup() define el tamaño del canvas y la función draw() dibuja diferentes formas geométricas y las anima rotándolas. Este ejemplo es una demostración de cómo se pueden utilizar diferentes claves para crear una ilusión de profundidad en una escena 3D.

{{< details title="3d" open=false >}} 
{{< highlight md >}}
{{</* p5-instance-div id="3d" />}}
    function setup() {
        createCanvas(710, 400, WEBGL);
    }

    function draw() {
        background(250);

        translate(-240, -100, 0);
        normalMaterial();
        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        plane(70);
        pop();

        translate(240, 0, 0);
        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        box(70, 70, 70);
        pop();

        translate(240, 0, 0);
        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        cylinder(70, 70);
        pop();

        translate(-240 * 2, 200, 0);
        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        cone(70, 70);
        pop();

        translate(240, 0, 0);
        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        torus(70, 20);
        pop();

        translate(240, 0, 0);
        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        sphere(70);
        pop();
    }
{{< /p5-instance-div */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/3d.js" width="710" height="400" >}}

{{< hint info >}}
### Conclusión
{{< /hint >}}

La percepción de la profundidad es una habilidad importante que nos permite percibir el mundo en tres dimensiones. Existen varias claves que nuestro cerebro utiliza para reconstruir la percepción de la profundidad, y se han desarrollado varias técnicas para crear ilusiones de profundidad en el arte y en la programación.

{{< hint info >}}
### Trabajos Futuros
{{< /hint >}}

En el futuro, se podrían explorar más formas de crear ilusiones de profundidad en la programación utilizando diferentes claves y técnicas. Además, se podrían desarrollar aplicaciones más avanzadas que utilicen la percepción de la profundidad para crear experiencias más inmersivas en la realidad virtual y aumentada.

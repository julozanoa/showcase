---
weight: 4
---

# **Spacial Coherence**

## **Pixelator**

{{< hint info>}}
### Introducción
{{< /hint >}}

La pixelación es una técnica utilizada en la industria de los videojuegos y el cine para simular la baja resolución y crear un efecto retro. En este caso, se utiliza en una aplicación web en vivo que toma una imagen en tiempo real de la cámara del usuario y la pixela usando dos estrategias diferentes: la media de color y la coherencia espacial. El objetivo de esta aplicación es explorar el efecto visual de la pixelación en una imagen en vivo.

{{< hint info>}}
### Antecedentes y Trabajos Futuros
{{< /hint >}}

La pixelación ha sido utilizada durante décadas en la industria de los videojuegos y el cine. También se utiliza en el arte digital como una técnica creativa para producir efectos visuales interesantes. En el pasado, la pixelación se hacía en hardware, pero con la llegada de la tecnología de software, se puede hacer de manera más accesible para todos. Además, la pixelación también puede utilizarse como una técnica de privacidad para ocultar información en una imagen.

{{< hint info>}}
### Solucion
{{< /hint >}}

La aplicación utiliza dos estrategias para pixelar la imagen en vivo. La primera estrategia es la media de color, donde cada pixel se calcula como el promedio de los colores que cubren cada mosaico de la imagen original. La segunda estrategia es la coherencia espacial, donde cada pixel se toma de un solo color arbitrario encontrado en cada mosaico de la imagen original. El código utiliza la biblioteca p5.js para cargar la imagen de la cámara del usuario, pixelarla y mostrarla en la pantalla.

{{< details title="Pixelator" open=false >}} 
{{< highlight md >}}
{{</* p5-instance-div id="Pixelator" />}}
    let video;
    let pixelSize = 20;

    function setup() {
        createCanvas(640, 480);
        video = createCapture(VIDEO);
        video.size(width/pixelSize, height/pixelSize);
        video.hide();
    }

    function draw() {
        background(0);
        video.loadPixels();
        for (let y = 0; y < video.height; y++) {
            for (let x = 0; x < video.width; x++) {
                let index = (x + y * video.width) * 4;
                let r = video.pixels[index + 0];
                let g = video.pixels[index + 1];
                let b = video.pixels[index + 2];
                fill(r, g, b);
                noStroke();
                rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
            }
        }
    }

    function keyPressed() {
        if (key == '+') {
            pixelSize += 5;
            video.size(width/pixelSize, height/pixelSize);
        } else if (key == '-') {
            pixelSize -= 5;
            if (pixelSize < 5) {
                pixelSize = 5;
            }
            video.size(width/pixelSize, height/pixelSize);
        }
    }
{{< /p5-instance-div */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/pixelator.js" width="800" height="422" >}}

{{< hint info>}}
### Conclusión
{{< /hint >}}

La pixelación es una técnica interesante que puede tener muchos usos diferentes en la industria creativa. La aplicación de pixelación en vivo presentada aquí utiliza dos estrategias diferentes para crear un efecto visual único. Es fácil de usar y se puede personalizar ajustando el tamaño de los píxeles. Además, la pixelación en vivo es un buen ejemplo de cómo la tecnología de software puede ser utilizada para crear efectos visuales interesantes en tiempo real.

{{< hint info>}}
### Trabajos Futuros
{{< /hint >}}

La aplicación de pixelación en vivo podría mejorarse aún más agregando más opciones de pixelación, como diferentes algoritmos de suavizado o la capacidad de elegir el tamaño de los mosaicos de la imagen original. También se podrían agregar características adicionales, como la capacidad de guardar imágenes pixeladas y la integración con las redes sociales. Además, la aplicación podría ser utilizada como base para un proyecto educativo para enseñar a los estudiantes sobre la técnica de pixelación y cómo funciona.





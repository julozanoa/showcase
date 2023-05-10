---
weight: 1
---

# **Coloring**

{{< hint info >}}
### Introducción
{{< /hint >}}

El uso de shaders en el desarrollo de gráficos y aplicaciones visuales ha permitido alcanzar niveles de realismo y efectos visuales impresionantes. Los shaders son programas que se ejecutan en la unidad de procesamiento gráfico (GPU) y son responsables de generar la salida visual en pantalla mediante cálculos complejos de sombreado, iluminación y efectos post-procesamiento en tiempo real. En este ejercicio, se busca implementar nuevos modos de blending utilizando shaders en el contexto de la biblioteca p5.js. Estos modos de blending permitirán combinar y mezclar colores de forma creativa, abriendo un mundo de posibilidades para la creación de efectos visuales y el procesamiento de imágenes.

{{< hint info >}}
### Antecedentes y Trabajos Previos
{{< /hint >}}

El uso de shaders para implementar modos de blending no es nuevo en el campo de los gráficos por computadora. Los modos de blending tradicionales como "Multiply" y "Screen" han sido ampliamente utilizados en aplicaciones de edición de imágenes, animación y renderizado 3D. También existen numerosos trabajos y bibliotecas que han explorado la implementación de nuevos modos de blending y efectos visuales utilizando shaders. Estos trabajos previos han sentado las bases para el desarrollo de técnicas más avanzadas de blending y han demostrado el potencial creativo y expresivo de los shaders en el ámbito visual.

{{< hint info >}}
### Solución
{{< /hint >}}

{{< details title="sketch" open=false >}}
{{< highlight md >}}
{{</* p5-instance-div id="sketch" />}}
    let shader;
    let img1;
    let img2;

    // Código del shader vertex
    const vertShader = `
        precision highp float;

        // Default vertex shader
        attribute vec3 aPosition;
        attribute vec2 aTexCoord;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
        varying vec2 vTexCoord;

        void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
        vTexCoord = aTexCoord;
        }
    `;

    // Código del shader fragment
    const fragShader = `
    precision highp float;

    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform int blendMode; // Blending mode selector
    varying vec2 vTexCoord;

    void main() {
    vec4 color1 = texture2D(texture1, vTexCoord);
    vec4 color2 = texture2D(texture2, vTexCoord);

    vec4 blendedColor;

    if (blendMode == 1) {
        // Blending mode 1: Multiply
        blendedColor = color1 * color2;
    } else if (blendMode == 2) {
        // Blending mode 2: Screen
        blendedColor = vec4(1.0) - ((vec4(1.0) - color1) * (vec4(1.0) - color2));
    }
    // Add more blending modes as needed

    gl_FragColor = blendedColor;
    }
    `;

    function preload() {
    img1 = loadImage('img1.jpg');
    img2 = loadImage('img2.jpg');
    }

    function setup() {
    createCanvas(800, 600, WEBGL);
    
    shader = createShader(vertShader, fragShader);
    shader.setUniform('tex0', img1);
    shader.setUniform('tex1', img2);
    shader.shader(this.shader);
    }

    function draw() {
    shader.setUniform('time', millis() / 1000.0);
    shader.setUniform('resolution', [width, height]);
    shader.setUniform('mouse', [mouseX, mouseY]);
    
    shader(shader);
    rect(0, 0, width, height);
    }

{{< /p5-instance-div */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/sketch.js" width="800" height="600" >}}

En resumen, el código utiliza p5.js y shaders para aplicar diferentes modos de blending a dos imágenes cargadas.

{{< hint info >}}
### Conclusión
{{< /hint >}}

En este ejercicio, se ha logrado implementar nuevos modos de blending utilizando shaders en p5.js. Los modos de blending "Multiply" y "Screen" ofrecen formas interesantes de combinar y mezclar colores, permitiendo la creación de efectos visuales impactantes. La utilización de shaders en p5.js ha demostrado ser una herramienta poderosa para la manipulación de gráficos y el procesamiento de imágenes en tiempo real. Este ejercicio ha sentado las bases para futuras exploraciones y experimentaciones con nuevos modos de blending y efectos visuales en el contexto de p5.js y otras bibliotecas similares.

{{< hint info >}}
### Trabajos Futuros
{{< /hint >}}

A partir de este ejercicio, existen diversas direcciones para futuros trabajos y exploraciones en el ámbito de los shaders y los modos de blending en p5.js. Algunas posibles áreas de desarrollo incluyen:

Implementación de modos de blending adicionales: Se puede investigar y desarrollar nuevos modos de blending que ofrezcan resultados visuales únicos y sorprendentes. Estos modos de blending podrían inspirarse en técnicas utilizadas en aplicaciones de edición de imágenes o en el campo del renderizado de gráficos por computadora.

Optimización y rendimiento: Es posible realizar mejoras en el rendimiento de los shaders implementados, optimizando el código y aprovechando al máximo las capacidades de la GPU. Esto permitirá aplicar los modos de blending a imágenes y animaciones de mayor tamaño y complejidad sin comprometer la fluidez y la interactividad.

Integración con otras bibliotecas y tecnologías: Se puede explorar la integración de los shaders de p5.js con otras bibliotecas y tecnologías relacionadas, como bibliotecas de detección de movimiento o realidad virtual. Esto abrirá nuevas posibilidades para la creación de experiencias interactivas y envolventes.
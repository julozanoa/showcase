---
weight: 1
---

## ejercicio 3D

# Problema:

Queremos crear una aplicación interactiva en p5.js que muestre un objeto tridimensional (en este caso, una caja) en un lienzo 3D. Además, queremos permitir al usuario mover la caja utilizando las teclas de flecha, pero asegurándonos de que la caja no salga de los límites del lienzo. También deseamos agregar un foco (spotlight) para iluminar la escena y resaltar el objeto tridimensional.

# Solución:

# Configuración inicial:

Importamos las bibliotecas p5.js y p5.collide2D.js para obtener las funcionalidades necesarias.

Creamos un archivo HTML básico que carga las bibliotecas y nuestro archivo JavaScript personalizado.

En el archivo JavaScript, establecemos el tamaño del lienzo y las variables necesarias.

# Función setup():

Configuramos la escena y los objetos iniciales

Creamos el lienzo 3D utilizando createCanvas() con un tamaño adecuado para la aplicación.

Creamos un vector llamado boxPosition para almacenar la posición actual de la caja en el espacio tridimensional.

Establecemos el tamaño de la caja en boxSize.

Configuramos el foco (spotlight) utilizando createLight() para crear un foco direccional que ilumine la caja.

# Función draw():

Actualizamos y mostramos la escena en cada fotograma.

Establecemos el fondo del lienzo en un color claro para una mejor visualización.

Aplicamos rotación al escenario 3D utilizando rotateX() y rotateY() para generar una animación visualmente atractiva.

Dibujamos la caja en el lienzo utilizando box() y posicionándola en boxPosition mediante translate().

Verificamos las teclas presionadas por el usuario para mover la caja en respuesta a las flechas direccionales.

Comprobamos las colisiones con los límites del lienzo para evitar que la caja salga de la ventana utilizando declaraciones condicionales y las dimensiones del lienzo (width y height).

Actualizamos la posición y dirección del foco (spotlight) según la posición del mouse utilizando setLightPosition() y setLightDirection().

# Conceptos aplicados:

Gráficos 3D: Utilizamos el modo WEBGL en createCanvas() para configurar un lienzo 3D y permitir la representación de objetos tridimensionales.

Transformaciones 3D: Aplicamos rotación al escenario utilizando rotateX() y rotateY(), y utilizamos translate() para mover la caja en el espacio tridimensional.

Eventos de teclado: Verificamos las teclas presionadas por el usuario utilizando keyIsDown() y permitimos el movimiento de la caja en función de las flechas direccionales.

Detección de colisiones: Utilizamos la biblioteca p5.collide2D.js para detectar colisiones con los límites del lienzo y evitar que la caja se salga de la ventana.

Lógica condicional: Utilizamos declaraciones if para verificar las teclas presionadas por el usuario y las colisiones con los límites del lienzo, tomando decisiones basadas en esas condiciones.

Variables y vectores: Utilizamos variables para almacenar el tamaño y la posición de la caja, y vectores para representar la posición tridimensional en boxPosition.

# Como utilizar el programa

Necesitas darle click al recuadro en el que se encuentra el cubo en movimiento, ahora con las teclas arriba, abajo, izquierda y derecha se le da movimiento dependiendo de la teclas que se este oprimiendo

{{< details title="photomosaic.js" open=false >}}

```javascript

```

{{< /details >}}

{{< details title="librerias utilizadas" open=false >}}

```javascript
p5.js 

p5.collide2D.js

```

{{< /details >}}

{{< details title="ejercicio3D.js" open=false >}}

```javascript
let boxSize = 100;
let boxPosition;
let spotlightPosition;

function setup() {
  createCanvas(800, 600, WEBGL);
  boxPosition = createVector(0, 0, 0);
  spotlightPosition = createVector(0, 0, 200);
}

function draw() {
  background(50); // Cambiar el color del fondo a un tono más oscuro

  // Configuración del foco (spotlight)
  let spotlightDirection = createVector(mouseX - width / 2, mouseY - height / 2, -200);
  spotLight(255, 255, 255, spotlightPosition, spotlightDirection, 60, 1);

  // Rotación de la escena
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // Dibujar la caja con un color diferente
  push();
  translate(boxPosition.x, boxPosition.y, boxPosition.z);
  specularMaterial(255, 0, 0); // Cambiar el material de la caja a rojo
  box(boxSize);
  pop();

  // Mover la caja según la entrada del teclado
  if (keyIsDown(LEFT_ARROW)) {
    boxPosition.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    boxPosition.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    boxPosition.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    boxPosition.y += 5;
  }

  // Comprobar colisión con los límites
  if (boxPosition.x < -width / 2 + boxSize / 2) {
    boxPosition.x = -width / 2 + boxSize / 2;
  }
  if (boxPosition.x > width / 2 - boxSize / 2) {
    boxPosition.x = width / 2 - boxSize / 2;
  }
  if (boxPosition.y < -height / 2 + boxSize / 2) {
    boxPosition.y = -height / 2 + boxSize / 2;
  }
  if (boxPosition.y > height / 2 - boxSize / 2) {
    boxPosition.y = height / 2 - boxSize / 2;
  }
}

```

{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/ejercicio3D.js" lib1="/showcase/sketches/libraries/libreria1.js" lib2="/showcase/sketches/libraries/libreria2.js"width="675" height="675" >}}

# Referencias

{{< hint warning >}}

- [1] _“referencias basicas”_ **p5** https://p5js.org/es/.
- [2] _“pagina colaborativa en ejercicios de p5”_ **Processing Foundation** https://discourse.processing.org/c/p5js/10.
- [3] _“Ayuda de chat GPT”_ **Ayuda de estructuracion y formulacion del problema** Para la elaboracion de este ejercicio se utilizo la herramienta chatGPT, la cual fue de gran ayuda para formular un problema que involucrara figuras 3D, colisiones y spotlight, esta herramienta nos ayudo a generar una buena base del codigo implementado en el cual a travez de la experimentacion de los integrantes del grupo y la aplicacion de conceptos encontrados en las anterioires referencias expuestas se logro la adquisicion de los conocimiento sobre los temas anteriormente expuestos y una mejora considerable del codigo base proporcionado por la herramienta
{{< /hint >}}
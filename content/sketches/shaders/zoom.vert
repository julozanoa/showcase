precision highp float;
attribute vec3 aPosition;
attribute vec2 aTexCoord;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
varying vec2 vTexCoord;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
  vTexCoord = aTexCoord;
}
zoom.frag:

glsl
Copy code
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D texture;
uniform vec2 mouse;
uniform float zoom;
uniform float radius;

void main() {
  vec2 texCoord = (vTexCoord + 1.0) / 2.0;
  vec2 zoomCoord = vec2(mouse.x, -mouse.y);
  vec2 offset = (texCoord - zoomCoord) * zoom;
  vec4 color = texture2D(texture, texCoord + offset / radius);
  gl_FragColor = color;
}
Asegúrate de reemplazar 'tu_imagen.jpg' con la ruta de tu propia imagen. El código carga la imagen y los shaders en la función preload(). En la función setup(), se crea un lienzo 3D y se configura el shader con las variables necesarias. Luego, en la función draw(), se dibuja un cuadrado en todo el lienzo utilizando el shader de zoom. La función mouseMoved() actualiza la posición del mouse en los uniformes del shader.

Este código utiliza p5.js y la biblioteca p5.post.js para implementar el efecto de lupa utilizando post effects. Asegúrate de incluir las dependencias y los archivos de shaders necesarios en tu proyecto.

Espero que esto te sea ú





User
como puedo agregar las dependencias ?
ChatGPT
Para agregar las dependencias en tu proyecto, puedes seguir estos pasos:

Descarga las bibliotecas p5.js y p5.post.js. Puedes obtenerlos desde los siguientes enlaces:

p5.js: https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js
p5.post.js: https://cdn.jsdelivr.net/npm/p5.post/dist/p5.post.js
Crea una carpeta en tu proyecto y coloca los archivos descargados en esa carpeta. Por ejemplo, puedes crear una carpeta llamada lib y colocar los archivos allí.

En tu archivo HTML, agrega las siguientes etiquetas <script> en la sección <head> para cargar las bibliotecas:

html
Copy code
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mi proyecto</title>
  <script src="lib/p5.js"></script>
  <script src="lib/p5.post.js"></script>
</head>
<body>
  <script src="sketch.js"></script>
</body>
</html>
Asegúrate de que la ruta de los archivos <script> coincida con la ubicación de la carpeta que creaste en el paso anterior.

Ahora puedes utilizar las bibliotecas p5.js y p5.post.js en tu archivo JavaScript sketch.js.
Con estos pasos, has agregado las dependencias p5.js y p5.post.js a tu proyecto y puedes utilizarlas para implementar el código de la lupa con efectos posteriores.





User
el link de p5.post esta caducado
ChatGPT
Lamento la confusión anterior. Parece que no existe una biblioteca oficial llamada p5.post.js. Mis disculpas por la información incorrecta.

Si deseas implementar efectos posteriores en p5.js, hay diferentes enfoques que puedes seguir. Una opción es utilizar los filtros y efectos incorporados en p5.js, como filter(), blendMode(), tint(), entre otros.

Aquí hay un ejemplo básico que utiliza el filtro DILATE para lograr un efecto de lupa:

javascript
Copy code
let img;
let zoom = 2; // Factor de zoom de la lupa
let radius = 100; // Radio de la lupa

function preload() {
  img = loadImage('tu_imagen.jpg'); // Reemplaza 'tu_imagen.jpg' con la ruta de tu imagen
}

precision highp float;
attribute vec3 aPosition;
attribute vec2 aTexCoord;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
varying vec2 vTexCoord;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
  vTexCoord = aTexCoord;
}






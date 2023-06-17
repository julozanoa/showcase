#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D texture;
uniform vec2 resolution;
uniform vec2 mouse;
uniform float lensSize;
uniform float zoomFactor;

varying vec2 vTexCoord;

void main() {
  vec2 uv = vTexCoord;

  // Calcula el desplazamiento en relación con la posición del mouse
  vec2 mousePos = mouse / resolution;
  vec2 offset = (uv - mousePos) * zoomFactor;

  // Aplica el zoom y ajusta la coordenada para la lupa
  vec2 zoomedUV = (uv - 0.5) * zoomFactor + 0.5;
  vec2 lensPos = mousePos + offset;

  // Comprueba si el píxel actual está dentro del área de la lupa
  float distance = length(lensPos - uv);
  vec4 color = (distance < lensSize / resolution.x) ? texture2D(texture, zoomedUV) : texture2D(texture, uv);

  gl_FragColor = color;
}
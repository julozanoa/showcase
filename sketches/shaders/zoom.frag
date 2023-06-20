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

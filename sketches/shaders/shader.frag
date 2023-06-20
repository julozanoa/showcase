#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D tex0;
uniform vec2 uResolution;
uniform float uTime;

varying vec2 vTexCoord;

void main() {
  float displace = sin(vTexCoord.y * uResolution.y / 10.0 + uTime) * 0.1; // Ajusta el valor del desplazamiento según tus necesidades

  vec2 offsetTexCoord = vec2(vTexCoord.x + displace, vTexCoord.y);
  vec4 color = texture2D(tex0, offsetTexCoord);
  gl_FragColor = color;
}

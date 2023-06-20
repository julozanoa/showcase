#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec3 color1;
uniform vec3 color2;
uniform float blendAmount;
varying vec2 vTexCoord;

void main() {
  vec3 blendedColor = mix(color1, color2, blendAmount);
  gl_FragColor = vec4(blendedColor, 1.0);
}
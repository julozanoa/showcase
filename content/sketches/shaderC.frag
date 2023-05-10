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

#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D tex0;
uniform float magnifyFactor;
uniform float magnifyDiameter;

varying vec2 vTexCoord;

void main() {
  // Calcula las coordenadas de textura en función del factor de aumento y la posición del cursor
  vec2 magnifyTexCoord = (vTexCoord - 0.5) * magnifyFactor + 0.5;
  
  // Obtiene el color de textura ampliado
  vec4 magnifiedColor = texture2D(tex0, magnifyTexCoord);
  
  // Verifica si el fragmento se encuentra dentro del diámetro de la lupa
  float distanceFromCenter = distance(vTexCoord, vec2(0.5));
  if (distanceFromCenter > magnifyDiameter / 2.0) {
    // Fragmento fuera del diámetro de la lupa, muestra el color original
    gl_FragColor = texture2D(tex0, vTexCoord);
  } else {
    // Fragmento dentro del diámetro de la lupa, muestra el color ampliado
    gl_FragColor = magnifiedColor;
  }
}

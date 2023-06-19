#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform float uBlurAmount;

void main() {
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  vec4 color = vec4(0.0);
  
  // Sample neighboring pixels and accumulate color values
  for (float dx = -uBlurAmount; dx <= uBlurAmount; dx++) {
    for (float dy = -uBlurAmount; dy <= uBlurAmount; dy++) {
      vec2 offset = vec2(dx, dy) / uResolution.xy;
      color += texture2D(uTexture, st + offset);
    }
  }
  
  // Average color values and set as output
  color /= pow(2.0 * uBlurAmount + 1.0, 2.0);
  gl_FragColor = color;
}

#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uTexture;

void main() {
  vec4 color = texture2D(uTexture, gl_FragCoord.xy / uResolution.xy);
  gl_FragColor = vec4(1.0 - color.rgb, color.a);
}

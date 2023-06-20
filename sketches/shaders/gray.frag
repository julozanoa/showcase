#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uTexture;

void main() {
  vec4 color = texture2D(uTexture, gl_FragCoord.xy / uResolution.xy);
  float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  gl_FragColor = vec4(vec3(gray), color.a);
}

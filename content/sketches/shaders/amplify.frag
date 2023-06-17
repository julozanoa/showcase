precision mediump float;

  uniform sampler2D texture;
  uniform vec2 mouseData;
  uniform float radio;
  uniform float scale;

  void main() {
    vec2 UV = gl_FragCoord.xy / resolution.xy;
    gl_FragColor = texture2D(texture, UV);

    vec2 center = mouseData.xy;
    float dist = distance(gl_FragCoord.xy, center);

    vec2 distV = gl_FragCoord.xy - center;

    if (dist > radio && dist < radio + rim) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }

    if (abs(distV.x) < (handview.x / 2.0) && abs(distV.y + radio) < (handview.y) && dist >= radio + rim) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }

    if (dist < radio) {
      vec2 trueUV = (gl_FragCoord.xy - (curveGen(distV, dist) * scale)) / resolution.xy;
      gl_FragColor = texture2D(texture, trueUV);
    }
  }
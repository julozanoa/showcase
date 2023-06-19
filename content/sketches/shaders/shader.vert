uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat3 uNormalMatrix;
uniform vec2 uResolution;

attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0);
  vec4 transformedPosition = uModelViewMatrix * positionVec4;
  gl_Position = uProjectionMatrix * transformedPosition;
  vTexCoord = aTexCoord;
}
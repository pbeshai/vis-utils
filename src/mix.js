export default function mix(vector1, vector2, t) {
  return vector1.map((d, i) => d * (1 - t) + (vector2[i] * t));
}

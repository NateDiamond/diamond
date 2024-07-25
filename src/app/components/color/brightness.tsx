export enum INTENSITY {
  LOW,
  MEDIUM,
  HIGH
}

export enum BRIGHTNESS {
  LIGHT,
  COLOR,
  DARK
}

export function getIntensity(brightness: BRIGHTNESS, intensity: INTENSITY, inverted: boolean = false) {
  const baseIntensity = brightness === BRIGHTNESS.LIGHT ? 200 : brightness === BRIGHTNESS.COLOR ? 500 : 800;
  switch (intensity) {
    case INTENSITY.LOW:
      return String(baseIntensity - 100);
    case INTENSITY.MEDIUM:
      return String(baseIntensity);
    default:
      return String(baseIntensity + 100);
  }
}
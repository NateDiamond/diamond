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

export function getIntensityString(brightness: BRIGHTNESS, intensity: INTENSITY, inverted: boolean = false) {
  const trueBrightness = inverted ? (brightness === BRIGHTNESS.LIGHT ? BRIGHTNESS.DARK : brightness === BRIGHTNESS.DARK ? BRIGHTNESS.LIGHT : BRIGHTNESS.COLOR) : brightness;
  const baseIntensity = trueBrightness === BRIGHTNESS.LIGHT ? 200 : trueBrightness === BRIGHTNESS.COLOR ? 500 : 800;
  const brightnessFactor = trueBrightness === BRIGHTNESS.LIGHT ? -1 : trueBrightness === BRIGHTNESS.COLOR ? 0 : 1;
  const intensityFactor = intensity === INTENSITY.LOW ? -1 : intensity === INTENSITY.MEDIUM ? 0 : 1;
  const adjustmentValue = brightness === BRIGHTNESS.COLOR ? 100 : 100;
  console.log(baseIntensity + (brightnessFactor * intensityFactor * adjustmentValue));
  return String(baseIntensity + (brightnessFactor * intensityFactor * adjustmentValue));
}
export enum BRIGHTNESS {
  LIGHT,
  COLOR,
  DARK
}

export function getIntensityString(brightness: BRIGHTNESS, inverted: boolean = false) {
  const baseIntensity = 500;
  const brightnessFactor = brightness === BRIGHTNESS.LIGHT ? -1 : brightness === BRIGHTNESS.COLOR ? 0 : 1;
  const invertedFactor = inverted ? -1 : 1;
  const adjustmentValue = brightness === BRIGHTNESS.COLOR ? 0 : 400;
  return String(baseIntensity + (brightnessFactor * invertedFactor * adjustmentValue));
}
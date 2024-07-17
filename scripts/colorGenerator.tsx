import { TYPES, COLORS, INTENSITIES, ColorDict } from "../src/app/components/colors";

function createColorDict() {
  const colorDict: ColorDict = {}
  for (const type of TYPES) {
    const nestedDict: {[color: string]: {[intensity: string]: string}} = {}
    colorDict[type] = nestedDict
    for (const color of COLORS) {
      const doubleNestedDict: {[intensity: string]: string} = {}
      colorDict[type][color] = doubleNestedDict;
      for (const intensity of INTENSITIES) {
        doubleNestedDict[intensity] = `${type}-${color}-${intensity}`;
      } 
    }
  }
  return colorDict;
}

// function createKeyOptions(index: number) {

// }

console.log(createColorDict());
// console.log(createKeyOptions(0));
// console.log(createKeyOptions(1));
// console.log(createKeyOptions(2));
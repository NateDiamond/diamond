import { TYPES, BlackAndWhiteDict } from "../src/app/components/color/colors";

function generateBandw() {
  const bandwDict: BlackAndWhiteDict = {}
  for (const type of TYPES) {
    bandwDict[type] = {}
    for (const color of ["black", "white"]) {
      bandwDict[type][color] = `${type}-${color}`;
    }
  }
  return bandwDict;
}

console.log(generateBandw());
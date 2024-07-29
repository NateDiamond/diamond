import { useState } from "react";

import { SetState, Optional } from "@/app/components/types";
import { getColor, COLORS } from "@/app/components/color/colors";
import { BRIGHTNESS } from "./brightness";

type ColorPickerParams = {
  color: string,
  setColor: SetState<Optional<string>>,
  brightness: BRIGHTNESS,
  className?: string 
}

type ColorTableParams = {
  className?: string,
  color: string,
  setColor: SetState<Optional<string>>,
  setSelected: SetState<boolean>,
  setPreviewColor: SetState<Optional<string>>,
  brightness: BRIGHTNESS
}

const COLOR_PICKER_SIZE = 40;
const COLOR_BOX_SIZE = 20;

function ColorTable({className, color, setColor, setSelected, setPreviewColor, brightness}: ColorTableParams) {
  const n = Math.ceil(Math.sqrt(COLORS.length));
  return (
      <svg width={n*COLOR_BOX_SIZE} height={n*COLOR_BOX_SIZE} className={`${className} rounded-lg shadow-2xl bg-white bg-opacity-90 ${getColor("border", color, brightness, true, false)} border ${getColor("stroke", color, brightness, true, false)} fill-current`}>
        { COLORS.map((color, index) => {
          return (
            <rect
              onMouseOver={() => setPreviewColor(color)} 
              onMouseLeave={() => setPreviewColor(undefined)} 
              onClick={() => {setSelected(false); setColor(color)}}
              width={COLOR_BOX_SIZE} 
              height={COLOR_BOX_SIZE} 
              x={(index%n)*COLOR_BOX_SIZE} 
              y={(Math.floor(index/n))*COLOR_BOX_SIZE} 
              className={`cursor-pointer fill-current ${getColor("text", color, brightness)}`} 
            />
          );
        })}
    </svg>
    
  )
}

export function ColorPicker({color, setColor, brightness, className}: ColorPickerParams) {
  const [previewColor, setPreviewColor] = useState<Optional<string>>(undefined);
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div title="Pick a color" className="relative w-24 h-24 flex flex-col justify-center items-end">
      <a className={`${!previewColor && 'hidden'} absolute bottom-0 p-2 w-full ${previewColor && getColor("bg", previewColor!, brightness)} border ${previewColor && getColor("border", previewColor, brightness, true, false)} rounded-lg shadow-2xl ${previewColor && getColor("text", previewColor, brightness, true)}`}>
        {previewColor}
      </a>
      <svg width={COLOR_PICKER_SIZE} height={COLOR_PICKER_SIZE} className={`cursor-pointer ${getColor("border", color, brightness, true, false)} border fill-current shadow-2xl rounded-lg ${color ? getColor("text", color, brightness): 'text-white'}`}>
        <rect width={COLOR_PICKER_SIZE} height={COLOR_PICKER_SIZE} onClick={() => setSelected(!selected)} />
      </svg>  
      <ColorTable className={`absolute -inset-y-16 inset-x-6 z-10 ${selected ? '': 'hidden'}`} color={color} setColor={setColor} setSelected={setSelected} setPreviewColor={setPreviewColor} brightness={brightness}/>     
    </div>  
  )
}
import { useState } from "react";

import { SetState, Optional } from "@/app/components/types";
import { getColor, COLORS } from "@/app/components/color/colors";
import { BRIGHTNESS, INTENSITY } from "./brightness";

type ColorPickerParams = {
  color: string,
  setColor: SetState<Optional<string>>,
  brightness: BRIGHTNESS,
  className?: string 
}

type ColorTableParams = {
  className?: string,
  setColor: SetState<Optional<string>>,
  setSelected: SetState<boolean>,
  setPreviewColor: SetState<Optional<string>>,
  brightness: BRIGHTNESS
}

const COLOR_PICKER_SIZE = 40;
const COLOR_BOX_SIZE = 20;

function ColorTable({className, setColor, setSelected, setPreviewColor, brightness}: ColorTableParams) {
  const n = Math.ceil(Math.sqrt(COLORS.length));
  return (
      <svg width={n*COLOR_BOX_SIZE} height={n*COLOR_BOX_SIZE} className={`${className} rounded-lg shadow-2xl bg-white border-black border stroke-black text-black fill-current`}>
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
              className={`cursor-pointer fill-current ${getColor("text", color, brightness, INTENSITY.HIGH)}`} 
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
    <div className="relative w-24 h-24 flex flex-col justify-center items-end">
      <a className={`${!previewColor && 'hidden'} absolute bottom-0 p-2 w-full bg-white border border-black rounded-lg shadow-2xl ${previewColor && getColor("text", previewColor, brightness, INTENSITY.HIGH)}`}>
        {previewColor}
      </a>
      <svg width={COLOR_PICKER_SIZE} height={COLOR_PICKER_SIZE} className={`cursor-pointer border-black border fill-current shadow-2xl rounded-lg ${color ? getColor("text", color, brightness, INTENSITY.HIGH): 'text-white'}`}>
        <rect width={COLOR_PICKER_SIZE} height={COLOR_PICKER_SIZE} onClick={() => setSelected(!selected)} />
      </svg>  
      <ColorTable className={`absolute -inset-y-16 inset-x-6 z-10 ${selected ? '': 'hidden'}`} setColor={setColor} setSelected={setSelected} setPreviewColor={setPreviewColor} brightness={brightness}/>     
    </div>  
  )
}
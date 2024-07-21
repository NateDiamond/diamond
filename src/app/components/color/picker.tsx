import { useState } from "react";

import { SetState, Optional } from "@/app/components/types";
import { Label } from "@/app/components/text";
import { getColor, COLORS } from "@/app/components/color/colors";

type ColorPickerParams = {
  color: string,
  setColor: SetState<string>,
  name: string,
  className?: string 
}

type ColorTableParams = {
  className?: string,
  setColor: SetState<string>,
  setSelected: SetState<boolean>,
  setPreviewColor: SetState<Optional<string>>
}

const COLOR_PICKER_SIZE = 40;
const COLOR_BOX_SIZE = 20;

function ColorTable({className, setColor, setSelected, setPreviewColor}: ColorTableParams) {
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
              className={`fill-current ${getColor("text", color, "500")}`} 
            />
          );
        })}
    </svg>
    
  )
}

export function ColorPicker({color, setColor, name, className}: ColorPickerParams) {
  const [previewColor, setPreviewColor] = useState<Optional<string>>(undefined);
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div className={`${className} flex flex-row justify-end items-start pt-6 gap-2 p-2 rounded-lg shadow-2xl border border-black`}>
      <div className="flex flex-col gap-2">
        <Label name={name}/>
        <a className={`${!previewColor && 'hidden'} p-2 bg-white border border-black rounded-lg shadow-2xl ${previewColor && getColor("text", previewColor, "500")}`}>
          {previewColor}
        </a>
      </div>
      
      <div className="w-24 h-32">
        <div className="grow flex flex-col items-center">
          <svg width={COLOR_PICKER_SIZE} height={COLOR_PICKER_SIZE} className={`border-black border fill-current shadow-2xl rounded-lg ${color ? getColor("text", color, "500"): 'text-white'}`}>
            <rect width={COLOR_PICKER_SIZE} height={COLOR_PICKER_SIZE} onClick={() => setSelected(!selected)} />
          </svg>  
          <ColorTable className={`relative -inset-y-6 ${selected ? '': 'hidden'}`} setColor={setColor} setSelected={setSelected} setPreviewColor={setPreviewColor}/>     
        </div>
      </div>
      
        
    </div>
  )
}
import { ReactElement } from "react";
import { MouseEventHandler } from "react";

import { getColor } from "@/app/components/color/colors";
import { BRIGHTNESS } from "./color/brightness";

type ButtonParams = {className?: string, color: string, secondaryColor: string, brightness: BRIGHTNESS, children: ReactElement, onPress?: MouseEventHandler<HTMLButtonElement>, pressable?: boolean};

export function Button({className, children, color, secondaryColor, brightness, onPress, pressable = true}: ButtonParams) {
  const hoverColor = `${getColor("hover:border", color, brightness, true)} ${getColor("hover:bg", secondaryColor, brightness)}`
  return (
    <button onClick={onPress}
      type="button" 
      className={`${className} grow inline-flex items-center justify-center gap-x-2 rounded-md ${getColor("bg", color, brightness)} px-3.5 py-2.5 text-sm font-semibold text-black border ${getColor("border", secondaryColor, brightness, true, false)} shadow-sm ${pressable ? hoverColor : 'cursor-default'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {children}
    </button>
  )
  
}
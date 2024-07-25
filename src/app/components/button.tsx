import { ReactElement } from "react";
import { MouseEventHandler } from "react";

import { getColor } from "@/app/components/color/colors";

type ButtonParams = {className?: string, color: string, children: ReactElement, onPress?: MouseEventHandler<HTMLButtonElement>};

export function Button({className, children, color, onPress}: ButtonParams) {
  return (
    <button onClick={onPress}
      type="button"
      className={`${className} grow inline-flex items-center justify-center gap-x-2 rounded-md ${getColor("bg", color, "500")} px-3.5 py-2.5 text-sm font-semibold text-black border border-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {children}
    </button>
  )
  
}
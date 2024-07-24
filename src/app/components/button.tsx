import { ReactElement } from "react";

import { getColor } from "@/app/components/color/colors";

type ButtonParams = {color: string, children: ReactElement};

export function Button({children, color}: ButtonParams) {
  return (
    <button
      type="button"
      className={`grow inline-flex items-center justify-center gap-x-2 rounded-md ${getColor("bg", color, "500")} px-3.5 py-2.5 text-sm font-semibold text-black border border-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {children}
    </button>
  )
  
}
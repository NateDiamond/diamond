import { ReactElement } from "react"
import { getColor } from "./color/colors";
import { SetState } from "./types";
import { BRIGHTNESS, INTENSITY } from "./color/brightness";

export type Option = {name: any, icon: ReactElement};

type ToggleParams = {options: Option[], selectedOption: any, setSelectedOption: SetState<any>, color: string, secondaryColor: string, brightness: BRIGHTNESS};

export function Toggle({options, selectedOption, setSelectedOption, color, secondaryColor, brightness}: ToggleParams) {
  return (
    <div className={`flex flex-row h-16 border border-black rounded-full ${getColor("bg", color, brightness, INTENSITY.MEDIUM)} ${getColor("text", secondaryColor, brightness, INTENSITY.MEDIUM)}`}>
      { options.map( (option) => {
        return (
          <div key={String(option.name)} className={`flex p-2 rounded-full ${getColor("text", option.name === selectedOption ? color : secondaryColor, brightness, INTENSITY.MEDIUM, true, option.name === selectedOption)} ${getColor("bg", option.name === selectedOption ? secondaryColor : color, brightness, INTENSITY.MEDIUM)} ${option.name === selectedOption ? `rounded-full border border-black` : ''}`} onClick={() => setSelectedOption(option.name)}>
            {option.icon}
          </div>
        );
      })}
    </div>  
  );
}
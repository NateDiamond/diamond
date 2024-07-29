import { ReactElement } from "react"
import { getColor } from "./color/colors";
import { SetState } from "./types";
import { BRIGHTNESS, INTENSITY } from "./color/brightness";

export type Option = {name: any, icon: ReactElement};

type ToggleParams = {options: Option[], selectedOption: any, setSelectedOption: SetState<any>, color: string, secondaryColor: string, brightness: BRIGHTNESS};

export function Toggle({options, selectedOption, setSelectedOption, color, secondaryColor, brightness}: ToggleParams) {
  return (
    <div className={`flex flex-row h-12 border ${getColor("border", secondaryColor, brightness, INTENSITY.HIGH, true, false)} rounded-full ${getColor("bg", color, brightness, INTENSITY.HIGH)} ${getColor("text", secondaryColor, brightness, INTENSITY.HIGH)}`}>
      { options.map( (option) => {
        return (
          <div key={String(option.name)} className={`flex p-2 rounded-full ${getColor("text", option.name === selectedOption ? color : secondaryColor, brightness, INTENSITY.HIGH, true, option.name === selectedOption)} ${getColor("bg", option.name === selectedOption ? secondaryColor : color, brightness, INTENSITY.HIGH)} ${option.name === selectedOption ? `rounded-full border ${getColor("border", secondaryColor, brightness, INTENSITY.HIGH, true, false)}` : ''}`} onClick={() => setSelectedOption(option.name)}>
            {option.icon}
          </div>
        );
      })}
    </div>  
  );
}
import { BRIGHTNESS } from "./color/brightness";
import { getColor } from "./color/colors";

type LabelParams = {name: string};
type TextParams = {children: string, className?: string, color: string, brightness: BRIGHTNESS, center?: boolean, large?: boolean};

export function Label({name}: LabelParams) {
  return (
    <label htmlFor={name} className={`block text-sm text-nowrap font-bold font-space leading-6`}>
      <span className="text-slate-900 dark:text-slate-200">{name}</span>
    </label>
  );
}

export function Text({children, className, color, brightness, center = false, large = false}: TextParams) {
  return (
    <div className={`${className} ${getColor("text", color, brightness, true, false)} text-center ${center ? '': 'sm:text-start'} font-light font-josefin ${large ? 'text-2xl': 'text-lg'}`}>
      {children}
    </div>
  )
}
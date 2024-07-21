type LabelParams = {name: string};

export function Label({name}: LabelParams) {
  return (
    <label htmlFor={name} className={`block text-sm font-bold font-space leading-6`}>
      <span className="text-slate-900 dark:text-slate-200">{name}</span>
    </label>
  );
}
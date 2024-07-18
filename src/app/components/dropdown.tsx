import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { Label } from "@/app/components/text";
import { Optional } from "@/app/components/types";

type DropdownParams = {
  name: string,
  required?: boolean,
  options: string[],
  onSelect: (option: Optional<string>) => void,
  className?: string
}

export function Dropdown({name, options, onSelect, className}: DropdownParams) {
  const [currentSelection, setCurrentSelection] = useState<Optional<string>>(undefined);

  return (
    <div className={className}>
      <Label name={name}/>
      <Menu as="div" className={`py-2 relative inline-block text-left`}>
        <div className="w-full">
          <MenuButton disabled={options.length === 0} className={`${currentSelection ? 'text-slate-900' : 'text-slate-400'} font-semibold inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-smshadow-sm ring-1 ring-inset ring-gray-300 ${options.length > 0 && 'hover:bg-gray-50'}`}>
            {currentSelection ? currentSelection : name}
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
          <MenuItems
            transition
            className={`${options.length === 0 && 'hidden'} absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-0 data-[enter]:ease-out`}>
            <div className="py-1">
              {options.map((option) => {
                return (
                  <MenuItem key={option} >
                    <a onClick={() => {setCurrentSelection(option); onSelect(option)}} className="block px-4 py-2 text-sm text-slate-900 data-[focus]:bg-gray-100 data-[focus]:font-semibold">
                      {option}
                    </a>
                  </MenuItem>
                )
              })}
            </div>
            {
              currentSelection && 
              <MenuItem>
                <a onClick={() => {setCurrentSelection(undefined); onSelect(undefined)}} className="block px-4 py-2 text-sm text-red-700 dark:text-red-500 data-[focus]:bg-gray-100 data-[focus]:font-semibold">
                  Clear Selection
                </a>
              </MenuItem>
            } 
          </MenuItems>
        </div>
      </Menu>
    </div>
  );
}
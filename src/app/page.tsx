"use client";

import { BriefcaseIcon, DocumentTextIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import { getColor, COLORS } from "@/app/components/color/colors";
import { ColorPicker } from "@/app/components/color/picker";
import { Button } from "./components/button";
import { Github, LinkedIn, X } from "./components/socials";


export default function Home() {
  const [primaryColor, setPrimaryColor] = useState<string>(COLORS[12]);
  const [secondaryColor, setSecondaryColor] = useState<string>(COLORS[6]);

  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-4 ${getColor("bg", secondaryColor, "500")}`}>
      <div className={`grow z-10 w-full max-w-7xl font-mono text-sm flex flex-col p-8 gap-4 rounded-lg shadow-2xl border border-black ${getColor("bg", primaryColor, "500")}`}>
        <div className={`flex flex-row gap-2 justify-center items-center py-10 rounded-lg shadow-2xl border border-black ${getColor("bg", secondaryColor, "500")}`}>
          <img className="w-10 h-auto" src="icon.png"/>
          <div className="text-center font-bold text-xl">
            Nathaniel Diamond
          </div>
          <img className="w-10 h-auto" src="icon.png"/>
        </div>
        <div className={`grow-[10] flex flex-row gap-2 items-start`}>
          <Button color={secondaryColor}>
            <DocumentTextIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
          </Button>
          <Button color={secondaryColor}>
            <Github/>
          </Button> 
          <Button color={secondaryColor}>
            <LinkedIn/>
          </Button>
          <Button color={secondaryColor}>
            <X/>
          </Button>
        </div>
        <div className="grow flex flex-row justify-end items-end gap-2">
          <ColorPicker
            color={primaryColor}
            setColor={setPrimaryColor}
            className={`shrink`}
            />
          <ColorPicker
            color={secondaryColor}
            setColor={setSecondaryColor}
            className="shrink"
            />
        </div>
      </div>
    </div>
    
  );
}

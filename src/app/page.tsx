"use client";

import { useState } from "react";

import { getColor, COLORS } from "@/app/components/color/colors";
import { ColorPicker } from "@/app/components/color/picker";

export default function Home() {
  const [primaryColor, setPrimaryColor] = useState<string>(COLORS[12]);
  const [secondaryColor, setSecondaryColor] = useState<string>(COLORS[6]);

  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-4 ${getColor("bg", secondaryColor, "500")}`}>
      <div className={`grow z-10 w-full max-w-7xl font-mono text-sm flex flex-col p-4 rounded-lg shadow-2xl border border-black ${getColor("bg", primaryColor, "500")}`}>
        <div className="text-center mb-4 font-bold text-lg">
          Nathaniel Diamond
        </div>
        <div className="flex flex-row gap-2 items-stretch">
          <div className={`grow-[10] p-8 rounded-2xl shadow-lg border border-black ${getColor("bg", secondaryColor, "500")}`}>
            Loading....
          </div>
          <div className="grow flex flex-col gap-2 items-stretch">
            <ColorPicker
              color={primaryColor}
              setColor={setPrimaryColor}
              name="Primary Color"
              className={`shrink ${getColor("bg", secondaryColor, "500")}`}
              />
            <ColorPicker
              color={secondaryColor}
              setColor={setSecondaryColor}
              name="Secondary Color"
              className="shrink"
              />
          </div>
        </div>
      </div>
    </div>
    
  );
}

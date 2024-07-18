"use client";

import { useState } from "react";

import { getColor, COLORS, INTENSITIES } from "@/app/components/colors";
import { Dropdown } from "./components/dropdown";

export default function Home() {
  const [primaryColor, setPrimaryColor] = useState<string>(COLORS[0]);
  const [primaryIntensity, setPrimaryIntensity] = useState<string>(INTENSITIES[0]);
  const [secondaryColor, setSecondaryColor] = useState<string>(COLORS[0]);
  const [secondaryIntensity, setSecondaryIntensity] = useState<string>(INTENSITIES[0]);

  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-4 ${getColor("bg", secondaryColor, secondaryIntensity)}`}>
      <div className="z-10 w-full max-w-7xl flex-1 items-stretch font-mono text-sm lg:flex">
        <div className={`w-full flex flex-col p-4 rounded-lg ${getColor("bg", primaryColor, primaryIntensity)}`}>
          <div className="text-center mb-4 font-bold text-lg">
            Pick Your Colors
          </div>
          <div className="flex flex-row gap-2">
            <Dropdown
              name="Primary Color"
              options={COLORS}
              onSelect={(option) => setPrimaryColor(option ? option : COLORS[0])}
              className="flex-1"
              />
            <Dropdown
              name="Primary Intensity"
              options={INTENSITIES}
              onSelect={(option) => setPrimaryIntensity(option ? option : INTENSITIES[0])}
              className="flex-1"
              />
          </div>
          <div className="flex flex-row gap-2">
            <Dropdown
              name="Secondary Color"
              options={COLORS}
              onSelect={(option) => setSecondaryColor(option ? option : COLORS[0])}
              className="flex-1"
              />
            <Dropdown
              name="Secondary Intensity"
              options={INTENSITIES}
              onSelect={(option) => setSecondaryIntensity(option ? option : INTENSITIES[0])}
              className="flex-1"
              />
          </div>
        </div>
      </div>
    </div>
    
  );
}

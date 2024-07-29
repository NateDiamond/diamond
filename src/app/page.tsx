"use client";

import { MoonIcon, StarIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

import { getColor, COLORS } from "@/app/components/color/colors";
import { ColorPicker } from "@/app/components/color/picker";
import { Button } from "./components/button";
import { Github, LinkedIn, Resume, X, Diamond } from "./components/icons";
import { Toggle } from "./components/toggle";
import { BRIGHTNESS, INTENSITY } from "./components/color/brightness";
import { Optional } from "./components/types";

function getRandom(n: number) {
  return Math.floor(Math.random() * n);
}

export default function Home() {
  const [primaryColor, setPrimaryColor] = useState<Optional<string>>(undefined);
  const [secondaryColor, setSecondaryColor] = useState<Optional<string>>(undefined);
  const [resumeModalVisible, setResumeModalVisible] = useState<boolean>(false);
  const [brightness, setBrightness] = useState<BRIGHTNESS>(BRIGHTNESS.LIGHT);

  useEffect(() => {
    setPrimaryColor(COLORS[getRandom(COLORS.length)]);
    setSecondaryColor(COLORS[getRandom(COLORS.length)]);
  }, [])

  if (!(primaryColor && secondaryColor)) {
    return <div className="text-center pt-10">Loading...</div>
  }

  return (
    <>
      <Dialog open={resumeModalVisible} onClose={setResumeModalVisible} className={`relative z-10`}>
        <div className="fixed inset-0 z-10 w-screen p-2">
          <div className="flex flex-row min-h-full items-stretch justify-center p-4 text-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6 ">
              <iframe className="w-full h-full border border-black" src="/resume.pdf" /> 
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <div className={`flex min-h-screen flex-col items-center justify-between p-4 bg-gradient-to-br ${getColor("from", primaryColor, brightness, INTENSITY.HIGH)} ${getColor("to", secondaryColor, brightness, INTENSITY.HIGH)} ${resumeModalVisible ? 'opacity-50' : ''}`}>
        <div className={`grow w-full max-w-7xl font-mono text-sm flex flex-col p-8 gap-4 rounded-lg shadow-2xl border ${getColor("border", secondaryColor, brightness, INTENSITY.HIGH, true, false)} bg-gradient-to-br ${getColor("from", secondaryColor, brightness, INTENSITY.HIGH)} ${getColor("to", primaryColor, brightness, INTENSITY.HIGH)}`}>
          <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} pressable={false}>
            <>
              <Diamond className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} />
              <div className={`${getColor("text", secondaryColor, brightness, INTENSITY.HIGH, true, false)} text-center font-light font-josefin text-2xl`}>
                Nathaniel Diamond
              </div>
              <Diamond className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} />
            </>
          </Button>
          <div className={`flex flex-row gap-2 items-start`}>
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => {setResumeModalVisible(true)}}>
              <Resume className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}/>
            </Button>
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.github.com/NateDiamond")}>
              <Github className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}/>
            </Button> 
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.linkedin.com/in/nathaniel-diamond-225241127")}>
              <LinkedIn className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}/>
            </Button>
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}  onPress={() => window.open("https://x.com/N8Diamond")}>
              <X className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}/>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://en.wikipedia.org/wiki/Cornell_University_College_of_Engineering")}>
              <div className="py-4">
                <img className="group-hover:animate-bounce" width={100} src="cornell.png"/>
              </div>
            </Button>
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.machonyaakov.org")}>
              <img className="group-hover:animate-bounce" width={150} src="machon.gif" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.doginalsbot.io")}>
              <div className="py-4">
                <img className="group-hover:animate-bounce" width={100} src="doginalsBotLogo.webp"/>
              </div>
            </Button>
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.wildtangz.com")}>
              <img className="group-hover:animate-bounce" width={100} src="wildtangz.png" />
            </Button>
          </div>
          <div className={`flex flex-col sm:flex-row gap-2 items-stretch`}>
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://reactnative.dev")}>
              <div className="pt-2 sm:py-0">
                <img className="group-hover:animate-bounce" width={100} src="react.webp" />
              </div>
            </Button>
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.javascript.com")}>
              <div className="pt-2 sm:py-0">
                <img className="group-hover:animate-bounce" width={100} src="js.webp" />
              </div>
            </Button>
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://tailwindcss.com")}>
              <div className="py-2 sm:py-0">
                <img className="group-hover:animate-bounce" width={100} src="tailwind.png" />
              </div>
            </Button>
            <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://aws.amazon.com")}>
              <div className="pt-2 sm:py-0">
                <img className="group-hover:animate-bounce" width={100} src="aws.png" />
              </div>
            </Button>
              <Button className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.python.org")}>
                <div className="pt-2">
                  <img className="group-hover:animate-bounce" width={100} src="python.png" />
                </div>     
              </Button>
          </div>
          <div className="flex flex-row justify-between items-center">
            <Toggle
              options={[
                {name: BRIGHTNESS.DARK, icon: <MoonIcon/>},
                {name: BRIGHTNESS.COLOR, icon: <StarIcon/>},
                {name: BRIGHTNESS.LIGHT, icon: <SunIcon/>}
              ]}
              selectedOption={brightness}
              setSelectedOption={setBrightness}
              color={primaryColor}
              secondaryColor={secondaryColor}
              brightness={brightness}
            />
            <div className="grow flex flex-row justify-end items-end gap-2">
              <ColorPicker
                color={primaryColor}
                setColor={setPrimaryColor}
                brightness={brightness}
                className={`shrink`}
                />
              <ColorPicker
                color={secondaryColor}
                setColor={setSecondaryColor}
                brightness={brightness}
                className="shrink"
                />
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <a className={`${getColor("text", primaryColor, brightness, INTENSITY.HIGH, true)} ${getColor("hover:text", secondaryColor, brightness, INTENSITY.HIGH, true, false)} font-josefin hover:font-bold`} href="mailto:ndiamond39@gmail.com">Contact me</a>
          </div>
        </div>
      </div>
    </>  
  );
}

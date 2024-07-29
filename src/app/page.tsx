"use client";

import { MoonIcon, StarIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

import { getColor, COLORS } from "@/app/components/color/colors";
import { ColorPicker } from "@/app/components/color/picker";
import { Button } from "./components/button";
import { Github, LinkedIn, Resume, X, Diamond } from "./components/icons";
import { Toggle } from "./components/toggle";
import { BRIGHTNESS } from "./components/color/brightness";
import { Optional } from "./components/types";
import { Text } from "./components/text";

function getRandom(n: number) {
  return Math.floor(Math.random() * n);
}

export default function Home() {
  const [primaryColor, setPrimaryColor] = useState<Optional<string>>(undefined);
  const [secondaryColor, setSecondaryColor] = useState<Optional<string>>(undefined);
  const [resumeModalVisible, setResumeModalVisible] = useState<boolean>(false);
  const [brightness, setBrightness] = useState<Optional<BRIGHTNESS>>(undefined);

  useEffect(() => {
    setPrimaryColor(COLORS[getRandom(COLORS.length)]);
    setSecondaryColor(COLORS[getRandom(COLORS.length)]);
    console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setBrightness(BRIGHTNESS.DARK);
    } else {
      setBrightness(BRIGHTNESS.LIGHT);
    }
  }, [])

  if (!(primaryColor && secondaryColor && brightness !== undefined)) {
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
      <div className={`flex min-h-screen flex-col items-center justify-between p-4 bg-gradient-to-br ${getColor("from", primaryColor, brightness)} ${getColor("to", secondaryColor, brightness)} ${resumeModalVisible ? 'opacity-50' : ''}`}>
        <div className={`w-full max-w-7xl font-mono text-sm flex flex-col p-8 gap-4 rounded-lg shadow-2xl border ${getColor("border", secondaryColor, brightness, true, false)} bg-gradient-to-br ${getColor("from", secondaryColor, brightness)} ${getColor("to", primaryColor, brightness)}`}>
          <div className="flex flex-row">
            <Button description="Hello, world!" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} pressable={false}>
              <>
                <Diamond className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} />
                <Text color={secondaryColor} brightness={brightness} center={true} large={true}>
                  Nathaniel Diamond
                </Text>
                <Diamond className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} />
              </>
            </Button>
          </div>
          <div>
            <Text className="pb-2" color={secondaryColor} brightness={brightness}>
              Socials
            </Text>
            <div className={`flex flex-row flex-wrap gap-2 items-start`}>
              <Button description="Nate's Resume" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => {setResumeModalVisible(true)}}>
                <Resume className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}/>
              </Button>
              <Button description="See my work on Github" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.github.com/NateDiamond")}>
                <Github className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}/>
              </Button> 
              <Button description="Connect with me on LinkedIn" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.linkedin.com/in/nathaniel-diamond-225241127")}>
                <LinkedIn className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}/>
              </Button>
              <Button description="Follow me on X" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}  onPress={() => window.open("https://x.com/N8Diamond")}>
                <X className="group-hover:animate-bounce" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness}/>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
            <div>
              <Text className="pb-2" color={secondaryColor} brightness={brightness}>
                Education
              </Text>
              <div className="grid grid-cols-2 gap-4">
                <Button description="Where I went to school" className="group h-32" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://en.wikipedia.org/wiki/Cornell_University_College_of_Engineering")}>
                  <div className="py-4">
                    <img className="group-hover:animate-bounce" width={80} src="cornell.png"/>
                  </div>
                </Button>
                <Button description="Also where I went to school" className="group h-32" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.machonyaakov.org")}>
                  <img className="group-hover:animate-bounce" width={120} src="machon.gif" />
                </Button>
              </div>
            </div>  
            <div>
              <Text className="pb-2" color={secondaryColor} brightness={brightness}>
                Projects
              </Text>
              <div className="grid grid-cols-2 gap-4">
                <Button description="Mint Doginals with my API" className="group h-32" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.doginalsbot.io")}>
                  <div className="py-4">
                    <img className="group-hover:animate-bounce" width={70} src="doginalsBotLogo.webp"/>
                  </div>
                </Button>
                <Button description="Mint, trade, and admire crypto and NFTs with our new app" className="group h-32" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.wildtangz.com")}>
                  <img className="group-hover:animate-bounce" width={70} src="wildtangz.png" />
                </Button>
              </div>
            </div>                
          </div> 
          <div>
          <Text className="pb-2" color={secondaryColor} brightness={brightness}>
            Skills
          </Text>
          <div className={`flex flex-row flex-wrap gap-2 items-stretch`}>
            <Button description="I'm skilled in React and React Native" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://reactnative.dev")}>
              <img className="group-hover:animate-bounce" width={50} src="react.webp" />
            </Button>
            <Button description="I'm skilled in Javascript" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.javascript.com")}>
              <img className="group-hover:animate-bounce" width={50} src="js.webp" />
            </Button>
            <Button description="I'm skilled in Tailwind CSS and Native Wind" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://tailwindcss.com")}>
              <img className="group-hover:animate-bounce" width={50} src="tailwind.png" />
            </Button>
            <Button description="I'm skilled in Amazon Web Services" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://aws.amazon.com")}>
              <img className="group-hover:animate-bounce" width={50} src="aws.png" />
            </Button>
            <Button description="I'm skilled in Python" className="group" color={primaryColor} secondaryColor={secondaryColor} brightness={brightness} onPress={() => window.open("https://www.python.org")}>
              <img className="group-hover:animate-bounce" width={50} src="python.png" />
            </Button>
          </div>
          </div>         
          <Text className="pt-4" color={secondaryColor} brightness={brightness}>
            Settings
          </Text>
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center">
            <div className="flex flex-row justify-center">
              <Toggle
                options={[
                  {name: BRIGHTNESS.DARK, title: "Dark Mode", icon: <MoonIcon className="w-8"/>},
                  {name: BRIGHTNESS.COLOR, title: "Color Mode", icon: <StarIcon className="w-8"/>},
                  {name: BRIGHTNESS.LIGHT, title: "Light Mode", icon: <SunIcon className="w-8"/>}
                ]}
                selectedOption={brightness}
                setSelectedOption={setBrightness}
                color={primaryColor}
                secondaryColor={secondaryColor}
                brightness={brightness}
              />
            </div>
            <div className="grow flex flex-row justify-around sm:justify-end items-end gap-2">
              <ColorPicker
                color={primaryColor}
                setColor={setPrimaryColor}
                brightness={brightness}
                />
              <ColorPicker
                color={secondaryColor}
                setColor={setSecondaryColor}
                brightness={brightness}
                />
            </div>
          </div>
          <div className="flex flex-row justify-center sm:justify-end">
            <a className={`${getColor("text", primaryColor, brightness, true)} ${getColor("hover:text", secondaryColor, brightness, true, false)} font-josefin hover:font-bold`} href="mailto:ndiamond39@gmail.com">Contact me</a>
          </div>
        </div>
      </div>
    </>  
  );
}

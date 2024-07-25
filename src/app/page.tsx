"use client";

import { DocumentTextIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

import { getColor, COLORS } from "@/app/components/color/colors";
import { ColorPicker } from "@/app/components/color/picker";
import { Button } from "./components/button";
import { Github, LinkedIn, X } from "./components/socials";


export default function Home() {
  const [primaryColor, setPrimaryColor] = useState<string>(COLORS[12]);
  const [secondaryColor, setSecondaryColor] = useState<string>(COLORS[6]);
  const [resumeModalVisible, setResumeModalVisible] = useState<boolean>(false);

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
      <div className={`flex min-h-screen flex-col items-center justify-between p-4 ${getColor("bg", secondaryColor, "500")} ${resumeModalVisible ? 'opacity-50' : ''}`}>
        <div className={`grow w-full max-w-7xl font-mono text-sm flex flex-col p-8 gap-4 rounded-lg shadow-2xl border border-black ${getColor("bg", primaryColor, "500")}`}>
          <div className={`group flex flex-row gap-2 justify-center items-center py-10 rounded-lg shadow-2xl border border-black ${getColor("bg", secondaryColor, "500")}`}>
            <img className="w-10 h-auto group-hover:animate-bounce" src="icon.png"/>
            <div className="text-center font-bold text-xl">
              Nathaniel Diamond
            </div>
            <img className="w-10 h-auto group-hover:animate-bounce" src="icon.png"/>
          </div>
          <div className={`flex flex-row gap-2 items-start`}>
            <Button className="group" color={secondaryColor} onPress={() => {setResumeModalVisible(true)}}>
              <DocumentTextIcon aria-hidden="true" className="group-hover:animate-bounce -ml-0.5 h-5 w-5" />
            </Button>
            <Button className="group" color={secondaryColor} onPress={() => window.open("https://www.github.com/NateDiamond")}>
              <Github className="group-hover:animate-bounce"/>
            </Button> 
            <Button className="group" color={secondaryColor} onPress={() => window.open("https://www.linkedin.com/in/nathaniel-diamond-225241127")}>
              <LinkedIn className="group-hover:animate-bounce"/>
            </Button>
            <Button className="group" color={secondaryColor} onPress={() => window.open("https://x.com/N8Diamond")}>
              <X className="group-hover:animate-bounce"/>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button className="group" color={secondaryColor} onPress={() => window.open("https://en.wikipedia.org/wiki/Cornell_University_College_of_Engineering")}>
              <div className="py-4">
                <img className="group-hover:animate-bounce" width={100} src="cornell.png"/>
              </div>
            </Button>
            <Button className="group" color={secondaryColor} onPress={() => window.open("https://www.machonyaakov.org")}>
              <img className="group-hover:animate-bounce" width={150} src="machon.gif" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button className="group" color={secondaryColor} onPress={() => window.open("https://www.doginalsbot.io")}>
              <div className="py-4">
                <img className="group-hover:animate-bounce" width={100} src="doginalsBotLogo.webp"/>
              </div>
            </Button>
            <Button className="group" color={secondaryColor} onPress={() => window.open("https://www.wildtangz.com")}>
              <img className="group-hover:animate-bounce" width={100} src="wildtangz.png" />
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
    </>  
  );
}

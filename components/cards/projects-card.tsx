// TODO: Have project details slide to the left side! Moving the whole deck a bit to the right.

import { HammerIcon } from "../icons/hammer.icon";
import { PaperClipIcon } from "../icons/paper-clip.icon";

// For mobile this could be a modal.
export function ProjectsCard() {
  return (
    <div className="overflow-y-scroll h-full py-10 max-w-screen">
      <div className="flex gap-2 h-10 items-center px-10">
        <HammerIcon className="h-full" />
        <h1 className="text-3xl font-bold">WHAT I HAVE BEEN UP TO.</h1>
      </div>

      <p className="mt-5 px-10">
        I'm a coffee lover. They do say that developers are machines that turn coffee into code.
        That's me: I have a thousand of new ideas in my mind that I would like to implement. Some of
        them actually come to life, and I invite you to have a look at them!
      </p>

      <Timeline />
      {/* <div className="overflow-x-scroll">
        <div className="h-5/6 w-[200vw] p-[100px] bg-transparent"></div>
      </div> */}
      {/* <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong>Terras Lusas (2024)</strong> – For map lovers and explorers. A place where you get
          to know where Portuguese municipalities are located.
        </li>
        <li>
          <strong>IPMA+ (2025)</strong> – Automating the process of getting weather data that
          otherwise would be lost overtime.
        </li>
        <li>
          <strong>Lunch Tram (2025)</strong> – Helping collect hungry colleagues for lunch meals.
        </li>
      </ul> */}
    </div>
  );
}

function Timeline() {
  return (
    <div
      className="overflow-x-auto cursor-grab active:cursor-grabbing w-full"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="relative w-[max(150%,150%)] h-[50vh] border-blue-500 text-center">
        <div id="top-section" className="relative w-full h-1/2 flex">
          <div id="2025" className="relative w-1/3 h-full border-red-600 ">
            <div className="absolute bottom-0 flex flex-col justify-center border-pink-400 w-full">
              <PaperClipIcon className="h-10 p-1" />
              <h2 className="text-4xl font-bold">2025</h2>
            </div>
          </div>
          <div id="2024" className="relative w-1/3 h-full border-red-600 ">
            <div className="absolute bottom-0 flex flex-col justify-center border-pink-400 w-full">
              <PaperClipIcon className="h-10 p-1" />
              <h2 className="text-4xl font-bold">2024</h2>
            </div>
          </div>
          <div id="2023" className="relative w-1/3 h-full border-red-600 ">
            <div className="absolute bottom-0 flex flex-col justify-center border-pink-400 w-full">
              <PaperClipIcon className="h-10 p-1" />
              <h2 className="text-4xl font-bold">2023</h2>
            </div>
          </div>
        </div>

        <div
          id="timeline"
          className="w-full h-0 bg-transparent border-t-1 border-dashed mx-[10%]"
        />

        <div id="bottom-section" className="relative flex w-full h-1/2">
          <div id="2025-d" className=" w-1/3 h-full">
            <div className="w-2/3 mx-auto border-green-700 flex flex-col justify-center gap-1 overflow-hidden">
              <div className="h-2/5">
                <h3 className="text-1xl font-bold">Terras Lusas</h3>
                <p className="">A web app to explore the beautiful landscapes of Portugal.</p>
              </div>
            </div>
          </div>
          <div id="2024-d" className="w-1/3 h-full">
            <div className="w-2/3 mx-auto border-green-700 flex flex-col justify-center gap-1">
              <div className="h-2/5">
                <h3 className="text-1xl font-bold">Blog</h3>
                <p className="">A platform to share my thoughts and experiences.</p>
              </div>
            </div>
          </div>
          <div id="2023-d" className="w-1/3 h-full">
            <div className="w-2/3 mx-auto border-green-700 flex flex-col justify-center gap-1">
              <div className="h-2/5">
                <h3 className="text-1xl font-bold">IPMA+</h3>
                <p className="">A project to automate weather data collection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

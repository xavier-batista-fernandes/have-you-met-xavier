// TODO: Have project details slide to the left side! Moving the whole deck a bit to the right.
"use client";

import { useDragScroll } from "@/hooks/use-drag-scroll";
import { ArrowLoadingIcon } from "../icons/arrow-loading.icon";
import { BoxArrowInIcon } from "../icons/box-arrow-in.icon";
import { HammerIcon } from "../icons/hammer.icon";
import { PaperClipIcon } from "../icons/paper-clip.icon";

// For mobile this could be a modal.
export function ProjectsCard() {
  return (
    <div className="overflow-y-scroll h-full p-10 max-w-screen">
      <div className="flex gap-2 h-10 items-center">
        <HammerIcon className="h-full" />
        <h1 className="text-3xl font-bold">WHAT I HAVE BEEN UP TO.</h1>
      </div>
      <p className="mt-5">
        I'm a coffee lover. They do say that developers are machines that turn coffee into code.
        That's me: I have a thousand of new ideas in my mind that I would like to implement. Some of
        them actually come to life, and I invite you to have a look at them!
      </p>
      <Timeline />
    </div>
  );
}

function Timeline() {
  const timelineRef = useDragScroll<HTMLDivElement>(1.5);

  return (
    <div
      ref={timelineRef}
      className="overflow-x-scroll overflow-y-hidden active:cursor-grabbing w-full select-none"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="relative w-[max(150%,200%)] h-[50vh] px-[5%] border-blue-500 text-center">
        <div id="top-section" className="relative w-full h-1/2 flex flex-row-reverse">
          <div id="2025" className="relative w-1/3 h-full border-red-600 ">
            <div className="absolute bottom-0 flex flex-col justify-center items-center border-pink-400 w-full">
              <a
                aria-label="Link to Terras Lusas's GitHub page."
                href="https://github.com/xavier-batista-fernandes/terras-lusas"
              >
                <PaperClipIcon className="h-10 p-1" />
              </a>
              <h2 className="text-4xl font-bold">2025</h2>
            </div>
          </div>
          <div id="2024" className="relative w-1/3 h-full border-red-600 ">
            <div className="absolute bottom-0 flex flex-col justify-center items-center border-pink-400 w-full">
              <a
                aria-label="Link to Blog's GitHub page."
                href="https://github.com/xavier-batista-fernandes/blog-x"
              >
                <PaperClipIcon className="p-1 h-10" />
              </a>
              <h2 className="text-4xl font-bold">2024</h2>
            </div>
          </div>
          <div id="2023" className="relative w-1/3 h-full border-red-600 ">
            <div className="absolute bottom-0 flex flex-col justify-center items-center border-pink-400 w-full">
              <a
                aria-label="Link to IPMA+'s GitHub page."
                href="https://github.com/xavier-batista-fernandes/ipma-mais"
              >
                <PaperClipIcon className="h-10 p-1" />
              </a>
              <h2 className="text-4xl font-bold">2023</h2>
            </div>
          </div>
        </div>

        <div id="timeline" className="relative w-full h-0 bg-transparent border-t-1 border-dashed">
          <BoxArrowInIcon className="absolute -left-7 -translate-y-1/2 h-6 animateSway md:block hidden"></BoxArrowInIcon>
          <p className="absolute text-sm left-4 bottom-1 md:block hidden">One day I had an idea.</p>
          <div className="absolute -translate-y-1/2 left-0 h-2 bg-black rounded-full aspect-square"></div>
          <p className="absolute text-sm left-4 top-1 md:block hidden">... So I started coding.</p>

          <ArrowLoadingIcon className="absolute -right-8 -translate-y-1/2 h-6 animateRotate md:block hidden"></ArrowLoadingIcon>
          <p className="absolute text-sm right-4 bottom-1 md:block hidden">Now I'm here!</p>
          <div className="absolute -translate-y-1/2 right-0 h-2 bg-black rounded-full aspect-square"></div>
          <p className="absolute text-sm right-4 top-1 md:block hidden">
            ... Still coding to this day.
          </p>
        </div>

        <div id="bottom-section" className="relative flex flex-row-reverse w-full h-1/2">
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

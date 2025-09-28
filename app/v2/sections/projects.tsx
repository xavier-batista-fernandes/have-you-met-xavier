'use client'

import { ArrowLoadingIcon } from '@/components/icons/arrow-loading.icon'
import { BoxArrowInIcon } from '@/components/icons/box-arrow-in.icon'
import { HammerIcon } from '@/components/icons/hammer.icon'
import { PaperClipIcon } from '@/components/icons/paper-clip.icon'
import { useDragScroll } from '@/hooks/use-drag-scroll'

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen scroll-mt-20">
      <div className="h-full max-w-screen overflow-y-scroll">
        <div className="flex h-10 items-center gap-2">
          <HammerIcon className="h-full fill-white" />
          <h1 className="text-2xl font-bold lg:text-3xl">
            WHAT I HAVE BEEN UP TO.
          </h1>
        </div>
        <p className="mt-5">
          I'm a coffee lover. They do say that developers are machines that turn
          coffee into code. That's me: I have a thousand of new ideas in my mind
          that I would like to implement. Some of them actually come to life,
          and I invite you to have a look at them!
        </p>
        <Timeline />
      </div>
    </section>
  )
}

function Timeline() {
  const timelineRef = useDragScroll<HTMLDivElement>(1.5)

  return (
    <div
      ref={timelineRef}
      className="w-full overflow-x-scroll overflow-y-hidden select-none active:cursor-grabbing"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="relative h-[50vh] w-[300%] border-blue-500">
        <div
          id="top-section"
          className="relative flex h-1/2 w-full flex-row-reverse"
        >
          <div id="2025" className="relative basis-1/3 border-red-600">
            <div className="absolute bottom-0 flex w-full flex-col items-center justify-center border-pink-400">
              <a
                aria-label="Link to Terras Lusas's GitHub page."
                href="https://github.com/xavier-batista-fernandes/terras-lusas"
              >
                <PaperClipIcon className="h-10 stroke-white p-1" />
              </a>
              <h2 className="text-4xl font-bold">2025</h2>
            </div>
          </div>
          <div id="2024" className="relative basis-1/3 border-red-600">
            <div className="absolute bottom-0 flex w-full flex-col items-center justify-center border-pink-400">
              <a
                aria-label="Link to Blog's GitHub page."
                href="https://github.com/xavier-batista-fernandes/blog-x"
              >
                <PaperClipIcon className="h-10 stroke-white p-1" />
              </a>
              <h2 className="text-4xl font-bold">2024</h2>
            </div>
          </div>
          <div id="2023" className="relative basis-1/3 border-red-600">
            <div className="absolute bottom-0 flex w-full flex-col items-center justify-center border-pink-400">
              <a
                aria-label="Link to IPMA+'s GitHub page."
                href="https://github.com/xavier-batista-fernandes/ipma-mais"
              >
                <PaperClipIcon className="h-10 stroke-white p-1" />
              </a>
              <h2 className="text-4xl font-bold">2023</h2>
            </div>
          </div>
        </div>

        <div
          id="timeline"
          className="relative h-0 w-full border-t-1 border-dashed bg-transparent"
        >
          <BoxArrowInIcon className="animateSway absolute -left-7 hidden h-6 -translate-y-1/2 stroke-white md:block"></BoxArrowInIcon>
          <p className="absolute bottom-1 left-4 hidden text-sm md:block">
            One day I had an idea.
          </p>
          <div className="absolute left-0 aspect-square h-2 -translate-y-1/2 rounded-full bg-white"></div>
          <p className="absolute top-1 left-4 hidden text-sm md:block">
            ... So I started coding.
          </p>

          <ArrowLoadingIcon className="animateRotate absolute -right-8 hidden h-6 -translate-y-1/2 stroke-white md:block"></ArrowLoadingIcon>
          <p className="absolute right-4 bottom-1 hidden text-sm md:block">
            Now I'm here!
          </p>
          <div className="absolute right-0 aspect-square h-2 -translate-y-1/2 rounded-full bg-white"></div>
          <p className="absolute top-1 right-4 hidden text-sm md:block">
            ... Still coding to this day.
          </p>
        </div>

        <div
          id="bottom-section"
          className="relative flex h-1/2 w-full flex-row-reverse"
        >
          <div id="2025-d" className="h-full w-1/3">
            <div className="mx-auto flex w-2/3 flex-col justify-center gap-1 overflow-hidden">
              <div className="h-2/5">
                <h3 className="text-1xl font-bold">Terras Lusas</h3>
                <p className="">
                  A web app to explore the beautiful landscapes of Portugal.
                </p>
              </div>
            </div>
          </div>
          <div id="2024-d" className="h-full w-1/3">
            <div className="mx-auto flex w-2/3 flex-col gap-1">
              <div className="h-2/5">
                <ul>
                  <li>
                    <h3 className="text-1xl font-bold">Blog</h3>
                    <p className="">
                      A platform to share my thoughts and experiences.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="2023-d" className="h-full w-1/3">
            <div className="mx-auto flex w-2/3 flex-col justify-center gap-1">
              <div className="h-2/5">
                <h3 className="text-1xl font-bold">IPMA+</h3>
                <p className="">
                  A project to automate weather data collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

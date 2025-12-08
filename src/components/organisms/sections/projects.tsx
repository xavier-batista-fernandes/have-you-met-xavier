'use client';

import { HammerIcon } from '@/src/components/atoms/icons/hammer.icon';
import { Accordion } from '../../atoms/accordion';

export default function Projects() {
  const projects = [
    {
      id: 'sproutalis',
      url: 'https://sproutalis.vercel.app',
      header: (
        <h2 className="my-1 text-lg text-[#5b5b5b] dark:text-amber-50/75">
          Sproutalis - <span className="text-sm">2026</span>
        </h2>
      ),
      content: (
        <div>
          <a
            className="block text-sm font-bold text-amber-600 dark:text-amber-200"
            href="https://sproutalis.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sproutalis.vercel.app
          </a>
          <p className="mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      ),
    },
    {
      id: 'terras-lusas',
      url: 'https://terras-lusas.vercel.app',
      header: (
        <h2 className="my-1 text-lg text-[#5b5b5b] dark:text-amber-50/75">
          Terras Lusas - <span className="text-sm">2025</span>
        </h2>
      ),
      content: (
        <div>
          <a
            className="block text-sm font-bold text-amber-600 dark:text-amber-200"
            href="https://terras-lusas.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://terras-lusas.vercel.app
          </a>
          <p className="mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      ),
    },

    {
      id: 'rubiks-rush',
      url: 'https://rubiks-rush.vercel.app',
      header: (
        <h2 className="my-1 text-lg text-[#5b5b5b] dark:text-amber-50/75">
          Rubik's Rush - <span className="text-sm">2024</span>
        </h2>
      ),
      content: (
        <div>
          <a
            className="block text-sm font-bold text-amber-600 dark:text-amber-200"
            href="https://rubiks-rush.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://rubiks-rush.vercel.app
          </a>
          <p className="mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full max-w-screen overflow-y-scroll py-10">
      <div className="flex h-10 items-center gap-2">
        <HammerIcon className="h-full fill-black dark:fill-white" />
        <h1 className="text-[min(4vw,2rem)] font-bold">
          WHAT I HAVE BEEN UP TO.
        </h1>
      </div>
      <p className="mt-5">
        I'm a coffee lover. They do say that developers are machines that turn
        coffee into code. That's me: I have a thousand of new ideas in my mind
        that I would like to implement. Some of them actually come to life, and
        I invite you to have a look at them!
      </p>
      <div
        className="mt-10 flex w-full flex-col gap-2 overflow-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map(({ id, header, content }) => (
          <div key={id} className="">
            <Accordion header={header} content={content}></Accordion>
            <hr className="h-[0.5px] bg-amber-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="my-8 flex flex-col items-start gap-4">
  <div className="flex h-48 items-start gap-10">
    <div className="flex h-full flex-col gap-2">
      <div className="ml-2 flex cursor-pointer items-center gap-2 text-2xl">
        <InformationIcon className="size-6 fill-amber-50" />
        <span>2025</span>
      </div>
      <div className="ml-5 w-px grow bg-amber-100"></div>
    </div>
    <div>
      <p className="cursor-pointer">Terras Lusas</p>
      <p className="cursor-pointer">Lunch Tram</p>
      <p className="cursor-pointer">Blog</p>
    </div>
  </div>

  <div className="flex h-48 items-start gap-10">
    <div className="flex h-full flex-col gap-2">
      <div className="cursor-pointer text-2xl">2024</div>
      <div className="ml-5 w-px grow bg-amber-100"></div>
    </div>
    <div>
      <p className="cursor-pointer">Rubik's Rush</p>
      <p className="cursor-pointer">Lunch Tram</p>
    </div>
  </div>
  <div className="flex h-48 items-start gap-10">
    <div className="flex h-full flex-col gap-2">
      <div className="cursor-pointer text-2xl">College</div>
      <div className="ml-5 w-px grow bg-amber-100"></div>
    </div>
    <div>
      <p className="cursor-pointer">Rubik's Rush</p>
      <p className="cursor-pointer">Lunch Tram</p>
    </div>
  </div>
</div>; */
}

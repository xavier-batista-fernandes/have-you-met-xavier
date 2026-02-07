'use client';

import { HammerIcon } from '@/src/components/atoms/icons/hammer.icon';
import { SPROUTALIS_URL, TERRAS_LUSAS_URL } from '@/src/lib/constants/pages';
import { Accordion } from '../../atoms/accordion';
import { ExternalIcon } from '../../atoms/icons/external.icon';

export default function Projects() {
  const projects = [
    {
      id: 'sproutalis',
      header: 'Sproutalis',
      url: SPROUTALIS_URL,
      date: 'September 2025',
      content: (
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      ),
    },
    {
      id: 'terras-lusas',
      url: TERRAS_LUSAS_URL,
      header: 'Terras Lusas',
      date: 'July 2024',
      content: (
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      ),
    },

    {
      id: 'rubiks-rush',
      url: 'https://rubiks-rush.vercel.app',
      header: "Rubik's Rush",
      date: 'August 2023',
      content: (
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      ),
    },
  ];

  return (
    <div className="h-full max-w-screen overflow-y-scroll py-10">
      <div className="flex h-10 items-center gap-2">
        <HammerIcon className="h-full fill-black dark:fill-white" />
        <h1 className="text-[min(4vw,2rem)] font-bold">
          What I have been up to.
        </h1>
      </div>

      <p className="mt-2">
        I am a bit of a coffee addict... But only because developers are
        machines that need fuel (also known as coffee) to turn ideas into code!
        <br />
        <strong>That's me:</strong> I have a thousand of new ideas in my mind
        that I would like to implement. Some of them actually come to life, and
        I invite you to have a look at them!
      </p>

      <div
        className="mt-10 flex w-full flex-col overflow-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map(({ id, url, date, header, content }) => (
          <div key={id} className="w-full p-2 not-last:border-b-[0.5px]">
            <Accordion
              header={
                <h2 className="my-1 flex w-full items-center justify-between gap-4 dark:text-amber-50/75">
                  <span className="font-bold">{header}</span>
                  <div className="grow border-t border-dashed border-amber-600 dark:border-amber-200"></div>
                  <span className="text-sm">{date}</span>
                </h2>
              }
              content={
                <div className="">
                  <a
                    className="flex items-center gap-1 text-base font-bold text-amber-600 dark:text-amber-200"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{url}</span>
                    <ExternalIcon className="size-4 fill-amber-600 dark:fill-amber-200" />
                  </a>
                  <div className="py-3">{content}</div>
                </div>
              }
              startsExtended={true}
            ></Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}

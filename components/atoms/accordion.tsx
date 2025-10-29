'use client';

import { useRef, useState } from 'react';
import { CrossIcon } from './icons/cross.icon';

export function Accordion({
  header,
  content,
}: {
  header?: React.ReactNode;
  content?: React.ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [isExtended, setIsExtended] = useState(false);

  function getContainerHeight() {
    return container.current ? container.current.scrollHeight : 0;
  }

  return (
    <div>
      {/* Accordion's Header / Trigger */}
      <button
        className="flex cursor-pointer flex-row-reverse items-center gap-2"
        onClick={() => setIsExtended(!isExtended)}
      >
        {header}
        <CrossIcon
          className={`size-6 transition-transform ${isExtended ? '' : 'rotate-45'} fill-black dark:fill-white`}
        />
      </button>

      {/* Accordion's Content / Panel */}
      <div
        ref={container}
        style={{ height: isExtended ? `${getContainerHeight()}px` : '0' }}
        className={`overflow-auto transition-[height] duration-500 ease-in-out`}
      >
        {content}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { CrossIcon } from './icons/cross.icon';

export function Accordion({
  startsExtended = false,
  header,
  content,
}: {
  startsExtended?: boolean;
  header?: React.ReactNode;
  content?: React.ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [isExtended, setIsExtended] = useState(startsExtended);
  const [containerHeight, setContainerHeight] = useState(0);

  // Whenever the accordion is extended or collapsed, the true height of the content container is recalculated and updated.
  useEffect(() => {
    const height = container.current ? container.current.scrollHeight : 0;
    setContainerHeight(height);
  }, [isExtended]);

  return (
    <div>
      {/* Accordion's Header / Trigger */}
      <button
        className="flex w-full cursor-pointer items-center gap-2"
        onClick={() => setIsExtended(!isExtended)}
      >
        <CrossIcon
          className={`size-6 transition-transform ${isExtended ? '' : 'rotate-45'} fill-black dark:fill-white`}
        />
        <div className="grow">{header}</div>
      </button>

      {/* Accordion's Content / Panel */}
      <div
        ref={container}
        style={{ height: isExtended ? `${containerHeight}px` : '0' }}
        className={`overflow-hidden transition-[height] duration-500 ease-in-out`}
      >
        {content}
      </div>
    </div>
  );
}

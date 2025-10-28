'use client';

import { useAppContext } from '@/contexts/store';
import { useEffect, useState } from 'react';
import { ChevronsIcon } from '../atoms/icons/chevrons.icon';
import { CrossIcon } from '../atoms/icons/cross.icon';
import { MenuIcon } from '../atoms/icons/menu.icon';
import { ThemeButton } from './theme-button';

export function Controls() {
  const { isNavOpen, setIsNavOpen } = useAppContext();
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const onScroll = (event: Event) => {
      const scrollTop = (event.target as HTMLElement).scrollTop;
      setIsOnTop(scrollTop === 0);
    };

    const main = document.querySelector('main')! as HTMLElement;
    main.addEventListener('scroll', onScroll);

    return () => {
      main.removeEventListener('scroll', onScroll);
    };
  }, []);

  function goBackToTop() {
    const main = document.querySelector('main')! as HTMLElement;
    main.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="absolute top-0 right-0 z-900 flex size-full items-center justify-between px-10">
      <button
        onClick={goBackToTop}
        className={`size-8 cursor-pointer transition-opacity ease-in-out dark:fill-white ${isOnTop ? 'opacity-0' : 'opacity-100'}`}
      >
        <ChevronsIcon className={`fill-black dark:fill-white`} />
      </button>

      <div className="flex items-center gap-2">
        <ThemeButton className="cursor-pointer" />
        {isNavOpen ? (
          <button type="button" onClick={() => setIsNavOpen(false)}>
            <CrossIcon
              className={`size-7 cursor-pointer fill-black transition-transform ease-in-out dark:fill-white`}
            />
          </button>
        ) : (
          <button type="button" onClick={() => setIsNavOpen(true)}>
            <MenuIcon
              className={`size-7 cursor-pointer fill-black transition-transform ease-in-out dark:fill-white`}
            />
          </button>
        )}
      </div>
    </div>
  );
}

'use client';

import { useAppContext } from '@/src/contexts/store';
import { useEffect, useState } from 'react';
import { ChevronsIcon } from '../atoms/icons/chevrons.icon';
import { CrossIcon } from '../atoms/icons/cross.icon';
import { MenuIcon } from '../atoms/icons/menu.icon';
import { ThemeButton } from './theme-button';

export function Controls() {
  const { isNavOpen, setIsNavOpen } = useAppContext();
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsOnTop(entry.isIntersecting));
    });
    const introduction = document.getElementById('introduction');
    if (!introduction) {
      console.error(
        '[Controls] Could not find element with ID "introduction".'
      );
      return;
    }

    observer.observe(introduction);

    return () => {
      observer.disconnect();
    };
  }, []);

  function goBackToTop() {
    const main = document.querySelector('main')! as HTMLElement;
    main.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="absolute top-0 right-0 z-900 flex size-full items-center justify-between px-10">
      <div className="flex items-center">
        {!isNavOpen && (
          <button
            onClick={goBackToTop}
            className={`size-8 cursor-pointer transition-opacity duration-300 ease-in-out dark:fill-white ${isOnTop ? 'opacity-0' : 'opacity-100'}`}
          >
            <ChevronsIcon className={`fill-black dark:fill-white`} />
          </button>
        )}
      </div>

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

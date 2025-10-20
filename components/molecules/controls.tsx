'use client';

import { useAppContext } from '@/contexts/store';
import { CrossIcon } from '../atoms/icons/cross.icon';
import { MenuIcon } from '../atoms/icons/menu.icon';
import { ThemeButton } from './theme-button';

export function Controls() {
  const { isNavOpen, setIsNavOpen } = useAppContext();

  return (
    <div className="absolute top-0 right-0 z-900 flex h-full w-full flex-row-reverse items-center gap-2 px-10">
      {isNavOpen ? (
        <button type="button" onClick={() => setIsNavOpen(false)}>
          <CrossIcon
            className={`size-7 fill-black transition-transform ease-in-out dark:fill-white`}
          />
        </button>
      ) : (
        <button type="button" onClick={() => setIsNavOpen(true)}>
          <MenuIcon
            className={`size-7 fill-black transition-transform ease-in-out dark:fill-white`}
          />
        </button>
      )}
      <ThemeButton />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { MoonIcon } from '../atoms/icons/moon.icon';
import { SunIcon } from '../atoms/icons/sun.icon';
import { Skeleton } from '../atoms/skeleton';

enum ThemeEnum {
  Light = 'light',
  Dark = 'dark',
}
type Theme = `${ThemeEnum}`;

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | undefined>();

  useEffect(() => {
    const match = document.cookie.match(/theme=(light|dark)/);
    setTheme((match ? match[1] : 'light') as Theme);
  }, []);

  const onThemeChange = (newTheme: Theme) => {
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
    setTheme(newTheme);
    document.documentElement.classList.remove(...Object.values(ThemeEnum));
    document.documentElement.classList.add(newTheme);
  };

  let icon;
  switch (theme) {
    case 'dark':
      icon = (
        <SunIcon className="size-6 fill-white transition-transform duration-300 hover:rotate-25" />
      );
      break;
    case 'light':
      icon = (
        <MoonIcon className="size-6 fill-black transition-transform duration-300 hover:-rotate-25" />
      );
      break;
    default:
      icon = <Skeleton className="m-[2 px] size-[22px] rounded-full" />;
      break;
  }

  return (
    <button
      type="button"
      className={className}
      aria-label="Change theme to light or dark mode."
      onClick={() =>
        theme === 'dark' ? onThemeChange('light') : onThemeChange('dark')
      }
    >
      {icon}
    </button>
  );
}

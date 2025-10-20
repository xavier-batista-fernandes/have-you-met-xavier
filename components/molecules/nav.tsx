'use client';

import { useAppContext } from '@/contexts/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { BlogIcon } from '../atoms/icons/blog.icon';
import { FilesIcon } from '../atoms/icons/files.icon';
import { HammerIcon } from '../atoms/icons/hammer.icon';
import { PersonIcon } from '../atoms/icons/person.icon';

export function Nav() {
  const { isNavOpen: isOpen, setIsNavOpen: setOpen } = useAppContext();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const sections = [
    {
      link: '#about',
      text: 'About',
      iconComponent: (
        <PersonIcon className="h-6 w-6 fill-black hover:stroke-3 dark:fill-white" />
      ),
    },
    {
      link: '#work',
      text: 'Work',
      iconComponent: (
        <FilesIcon className="h-6 w-6 fill-black dark:fill-white" />
      ),
    },
    {
      link: '#projects',
      text: 'Projects',
      iconComponent: (
        <HammerIcon className="h-6 w-6 fill-black dark:fill-white" />
      ),
    },
    {
      link: '#blog',
      text: 'Blog',
      iconComponent: (
        <BlogIcon className="h-6 w-6 fill-black dark:fill-white" />
      ),
    },
  ];

  return (
    <>
      <nav
        role="dialog"
        className={`fixed top-0 left-0 z-450 h-screen w-full overflow-auto bg-slate-300 dark:bg-gray-800 ${isOpen ? '' : '-translate-y-full'} transition-transform duration-200 ease-in-out`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-2 text-sm">
          {sections.map((section, index) => (
            <li
              key={section.text}
              style={{
                transitionDelay: isOpen ? `${200 + index * 200}ms` : '0ms',
                transitionProperty: 'translate, opacity',
              }}
              className={`duration-200 ease-out hover:font-bold ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <Link
                onClick={() => setOpen(false)}
                href={section.link}
                className="flex items-center justify-center gap-2 px-3 py-3"
              >
                {section.iconComponent}
                <span>{section.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

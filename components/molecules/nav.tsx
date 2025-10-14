'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CrossIcon } from '../atoms/icons/cross.icon';
import { FilesIcon } from '../atoms/icons/files.icon';
import { HammerIcon } from '../atoms/icons/hammer.icon';
import { PersonIcon } from '../atoms/icons/person.icon';

export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const sections = [
    {
      link: '#about',
      text: 'About',
      iconComponent: <PersonIcon className="h-6 w-6 fill-white" />,
    },
    {
      link: '#work',
      text: 'Work',
      iconComponent: <FilesIcon className="h-6 w-6 fill-white" />,
    },
    {
      link: '#projects',
      text: 'Projects',
      iconComponent: <HammerIcon className="h-6 w-6 fill-white" />,
    },
    // {
    //   link: '#blog',
    //   text: 'Blog',
    //   iconComponent: <BlogIcon className="h-6 w-6 fill-white" />,
    // },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsNavOpen((x) => !x)}
        className="fixed top-5 right-5 z-101 cursor-pointer lg:hidden"
      >
        <CrossIcon
          className={`h-7 w-7 fill-black dark:fill-white ${isNavOpen ? 'rotate-0' : 'rotate-135'} transition-transform ease-in-out`}
        />
      </button>

      <nav
        role="dialog"
        className={`fixed top-0 left-0 z-100 h-screen w-full overflow-auto bg-gray-800 text-white ${isNavOpen ? '' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-2 text-sm">
          {sections.map((section) => (
            <li
              key={section.text}
              className="transition-colors duration-200 ease-out hover:font-bold"
            >
              <Link
                onClick={() => setIsNavOpen(false)}
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

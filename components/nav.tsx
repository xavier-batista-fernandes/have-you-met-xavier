'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { BlogIcon } from './icons/blog.icon'
import { FilesIcon } from './icons/files.icon'
import { HammerIcon } from './icons/hammer.icon'
import { PersonIcon } from './icons/person.icon'

export function Nav({
  isOpen,
  onLinkClick,
}: {
  isOpen: boolean
  onLinkClick: (input: boolean) => void
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav
      role="dialog"
      className={`fixed top-0 left-0 z-100 h-screen w-full overflow-auto bg-gray-800 fill-white ${isOpen ? '' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}
    >
      <ul className="flex h-full flex-col items-center justify-center gap-2 text-sm">
        <li className="transition-colors duration-200 ease-out hover:bg-white/10">
          <Link
            onClick={() => onLinkClick(false)}
            href="#about"
            className="flex items-center justify-center gap-2 px-3 py-3"
          >
            <PersonIcon className="h-6 w-6 fill-white" />
            <span>About</span>
          </Link>
        </li>

        <li className="transition-colors duration-200 ease-out hover:bg-white/10">
          <Link
            onClick={() => onLinkClick(false)}
            href="#blog"
            className="flex items-center justify-center gap-2 px-3 py-3"
          >
            <BlogIcon className="h-6 w-6 fill-white" />
            <span>Blog</span>
          </Link>
        </li>

        <li className="transition-colors duration-200 ease-out hover:bg-white/10">
          <Link
            onClick={() => onLinkClick(false)}
            href="#projects"
            className="flex items-center justify-center gap-2 px-3 py-3"
          >
            <HammerIcon className="h-6 w-6 fill-white" />
            <span>Projects</span>
          </Link>
        </li>

        <li className="transition-colors duration-200 ease-out hover:bg-white/10">
          <Link
            onClick={() => onLinkClick(false)}
            href="#work"
            className="flex items-center justify-center gap-2 px-3 py-3"
          >
            <FilesIcon className="h-6 w-6 fill-white" />
            <span>Work</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

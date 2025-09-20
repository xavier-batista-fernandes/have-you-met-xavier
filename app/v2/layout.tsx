'use client'

import '@/app/v2/globals.css'
import { BlogIcon } from '@/components/icons/blog.icon'
import { CrossIcon } from '@/components/icons/cross.icon'
import { ExternalIcon } from '@/components/icons/external.icon'
import { FilesIcon } from '@/components/icons/files.icon'
import { HammerIcon } from '@/components/icons/hammer.icon'
import { MessagesIcon } from '@/components/icons/messages.icon'
import { PersonIcon } from '@/components/icons/person.icon'
import { Libre_Franklin } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

const font = Libre_Franklin({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        <title>About - Xavier Fernandes</title>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </head>
      <body className="box-content bg-black p-10 text-white">
        <header className="flex h-[30vh] flex-col gap-10 overflow-auto lg:flex-row">
          <div className="basis-[350px] text-center lg:text-left">
            <h1 className="p-0 text-2xl font-light uppercase">
              Xavier Fernandes
            </h1>
            <p className="text-4xl font-bold text-[#ABABAB]">
              SOFTWARE DEVELOPER
            </p>
            <div className="pt-2">
              <hr className="border-t-[0.5px] border-[#4f4f4f]" />
              <a
                href="mailto:fernandesbatistaxavier@gmail.com"
                className="flex items-center gap-2 p-3 text-xs transition-colors duration-200 ease-out hover:bg-white/10"
              >
                <MessagesIcon className="h-4 w-4 fill-white" />
                <span>Send me a message!</span>
              </a>
              <hr className="border-t-[0.5px] border-[#4f4f4f]" />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsNavOpen((x) => !x)}
            className="fixed top-5 right-5 z-101 cursor-pointer lg:hidden"
          >
            <CrossIcon
              className={`h-7 w-7 fill-white ${isNavOpen ? 'rotate-0' : 'rotate-135'} transition-transform ease-in-out`}
            />
          </button>
          <nav
            className={`fixed top-0 left-0 z-100 h-screen w-full overflow-auto bg-gray-800 fill-white ${isNavOpen ? '' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}
          >
            <ul className="flex h-full flex-col items-center justify-center gap-2 text-sm">
              <li className="transition-colors duration-200 ease-out hover:bg-white/10">
                <Link
                  onClick={() => setIsNavOpen(false)}
                  href="/v2/about"
                  className="flex items-center justify-center gap-2 px-3 py-3"
                >
                  <PersonIcon className="h-6 w-6 fill-white" />
                  <span>About</span>
                </Link>
              </li>

              <li className="transition-colors duration-200 ease-out hover:bg-white/10">
                <Link
                  onClick={() => setIsNavOpen(false)}
                  href="/v2/blog"
                  className="flex items-center justify-center gap-2 px-3 py-3"
                >
                  <BlogIcon className="h-6 w-6 fill-white" />
                  <span>Blog</span>
                </Link>
              </li>

              <li className="transition-colors duration-200 ease-out hover:bg-white/10">
                <Link
                  onClick={() => setIsNavOpen(false)}
                  href="/v2/projects"
                  className="flex items-center justify-center gap-2 px-3 py-3"
                >
                  <HammerIcon className="h-6 w-6 fill-white" />
                  <span>Projects</span>
                </Link>
              </li>

              <li className="transition-colors duration-200 ease-out hover:bg-white/10">
                <Link
                  onClick={() => setIsNavOpen(false)}
                  href="/v2/work"
                  className="flex items-center justify-center gap-2 px-3 py-3"
                >
                  <FilesIcon className="h-6 w-6 fill-white" />
                  <span>Work</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="mt-10 text-[14px]">
          <div
            className={`${font.className} flex flex-col items-start gap-10 lg:flex-row`}
          >
            <section className="flex shrink-0 basis-[350px] flex-col items-center gap-10 lg:sticky lg:top-0">
              <img
                src="/images/cat.webp"
                alt="An animated cat drinking a cup of coffee."
                className="w-1/2 max-w-[250px] select-none"
              />
              <div>
                <p className="text-xs">
                  I'm a coffee lover. They do say that developers are machines
                  that turn coffee into code. That's me: I have a thousand of
                  new ideas in my mind that I would like to implement. Some of
                  them actually come to life, and I invite you to have a look at
                  them!
                </p>
                <ul className="mt-10 flex w-full flex-col text-sm">
                  <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                  <li className="transition-colors duration-200 ease-out hover:bg-white/10">
                    <a
                      href="https://github.com/xavier-batista-fernandes"
                      className="flex items-center gap-2 px-3 py-3"
                    >
                      <ExternalIcon className="h-4 w-4 fill-white" />
                      <span>GitHub</span>
                    </a>
                  </li>
                  <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                  <li className="transition-colors duration-200 ease-out hover:bg-white/10">
                    <a
                      href="https://www.linkedin.com/in/xavierbatistafernandes/"
                      className="flex items-center gap-2 px-3 py-3"
                    >
                      <ExternalIcon className="h-4 w-4 fill-white" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                </ul>
              </div>
            </section>
            <section className="h-[200vh] grow-1">{children}</section>
          </div>
        </main>
      </body>
    </html>
  )
}

'use client'

import '@/app/globals.css'
import { CrossIcon } from '@/components/icons/cross.icon'
import { ExternalIcon } from '@/components/icons/external.icon'
import { MessagesIcon } from '@/components/icons/messages.icon'
import { Nav } from '@/components/nav'
import { Libre_Franklin } from 'next/font/google'
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
        <title>Have you met Xavier?</title>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </head>
      <body className="bg-black p-10 text-white">
        <header className="flex flex-col gap-10 overflow-auto lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="p-0 text-xl font-extrabold tracking-widest uppercase">
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
          <Nav isOpen={isNavOpen} onLinkClick={setIsNavOpen} />
        </header>
        <main className="mt-10 text-[14px] text-wrap">
          <div
            className={`${font.className} flex flex-col items-start gap-10 lg:flex-row`}
          >
            <section className="flex flex-col items-center gap-10">
              <p className="mt-3 leading-relaxed font-light">
                <span className="font-bold">
                  Hey there! Glad to see you’ve wandered this far across the
                  web!
                </span>{' '}
                Welcome to my little digital corner.
              </p>

              <img
                src="/images/cat.webp"
                alt="An animated cat drinking a cup of coffee."
                className="w-1/2 max-w-[250px] select-none"
              />
              <div>
                <p className="text-xs">
                  I’m {new Date().getFullYear() - 2000} years old. I'm a coffee
                  lover. They do say that developers are machines that turn
                  coffee into code. That's me: I have a thousand of new ideas in
                  my mind that I would like to implement. Some of them actually
                  come to life, and I invite you to have a look at them!
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
            <section className="grow-1">{children}</section>
          </div>
        </main>
      </body>
    </html>
  )
}

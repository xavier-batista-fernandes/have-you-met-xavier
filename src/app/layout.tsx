import '@/src/app/globals.css';
import { ExternalIcon } from '@/src/components/atoms/icons/external.icon';
import { Controls } from '@/src/components/molecules/controls';
import { Nav } from '@/src/components/molecules/nav';
import { AppContextProvider } from '@/src/contexts/store';

import { Libre_Franklin } from 'next/font/google';
import { cookies } from 'next/headers';

const font = Libre_Franklin({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeCookie = (await cookies()).get('theme');
  const theme = themeCookie?.value === 'dark' ? 'dark' : 'light';

  return (
    <html lang="en" className={`${theme}`}>
      <head>
        <title>Have you met Xavier?</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>

      <body
        className={`${font.className} mx-auto flex max-h-dvh max-w-3xl flex-col bg-amber-50 text-neutral-900 transition-colors md:border-x-[0.5px] dark:bg-zinc-900 dark:text-amber-50 md:dark:border-amber-50`}
      >
        <AppContextProvider>
          <header className="relative min-h-20 border-b-[0.5px]">
            <Controls />
            <Nav />
          </header>

          <main className="overflow-auto px-10 text-[14px] text-wrap">
            <div
              id="introduction"
              className={`${font.className} flex flex-col items-center gap-6 text-center`}
            >
              <div>
                <p className="mt-12 text-2xl font-bold">Howdy stranger!</p>
                <p className="mt-2 max-w-xl">
                  Seems you’ve stumbled into my corner of the web.
                  <br />
                  Stick around, this is where you can get to know me better —
                  <strong> both personally and professionally</strong>.
                </p>
              </div>

              <div className="min-size-1/2 pointer-events-none size-2/5 overflow-hidden rounded-full border select-none dark:border-amber-50">
                <img src="xavier.png" alt="Portrait of Xavier Fernandes" />
              </div>

              <div>
                <h3 className="text-2xl font-bold uppercase">
                  Xavier Fernandes
                </h3>

                <p className="mt-1 text-sm opacity-75">
                  One of the rare moments I stayed still long enough for a
                  photograph to be taken.
                </p>
              </div>

              <div className="mt-6 w-full">
                <p className="p-3 text-start">
                  <span className="font-bold">
                    Do you want to get in touch?
                  </span>
                  <br />
                  <span className="text-sm">
                    Have a look at my social links or send me a message.
                  </span>
                </p>
                <ul className="flex flex-col text-sm">
                  <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                  <li className="duration-200 ease-out hover:bg-amber-600/5 dark:hover:bg-amber-200/5">
                    <a
                      href="https://github.com/xavier-batista-fernandes"
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-3"
                    >
                      <ExternalIcon className="h-4 w-4 fill-black dark:fill-white" />
                      <span>GitHub</span>
                    </a>
                  </li>
                  <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                  <li className="duration-200 ease-out hover:bg-amber-600/5 dark:hover:bg-amber-200/5">
                    <a
                      href="https://www.linkedin.com/in/xavierbatistafernandes/"
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-3"
                    >
                      <ExternalIcon className="h-4 w-4 fill-black dark:fill-white" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                </ul>
              </div>
            </div>
            <div>{children}</div>
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}

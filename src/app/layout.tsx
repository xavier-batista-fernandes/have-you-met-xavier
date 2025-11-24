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
        className={`${font.className} mx-auto flex max-h-dvh max-w-3xl flex-col bg-amber-50 text-neutral-900 md:border-x-[0.5px] dark:bg-zinc-900 dark:text-amber-50 md:dark:border-amber-50`}
      >
        <AppContextProvider>
          <header className="relative min-h-20 border-b-[0.5px]">
            <Controls />
            <Nav />
          </header>

          <main className="overflow-auto px-10 text-[14px] text-wrap">
            <div
              id="introduction"
              className={`${font.className} flex flex-col items-start gap-10`}
            >
              <ul className="mt-10 flex w-full flex-col text-sm">
                <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                <li className="transition-colors duration-200 ease-out hover:bg-white/10">
                  <a
                    href="https://github.com/xavier-batista-fernandes"
                    className="flex items-center gap-2 px-3 py-3"
                  >
                    <ExternalIcon className="h-4 w-4 fill-black dark:fill-white" />
                    <span>GitHub</span>
                  </a>
                </li>
                <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                <li className="transition-colors duration-200 ease-out hover:bg-white/10">
                  <a
                    href="https://www.linkedin.com/in/xavierbatistafernandes/"
                    className="flex items-center gap-2 px-3 py-3"
                  >
                    <ExternalIcon className="h-4 w-4 fill-black dark:fill-white" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <hr className="border-t-[0.5px] border-[#4f4f4f]" />
              </ul>
            </div>
            <div>{children}</div>
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}

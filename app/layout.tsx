import '@/app/globals.css';
import { Controls } from '@/components/molecules/controls';
import { Nav } from '@/components/molecules/nav';
import { AppContextProvider } from '@/contexts/store';

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
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </head>

      <body
        className={`${font.className} mx-auto flex max-h-screen max-w-[768px] flex-col bg-amber-50 text-neutral-900 md:border-x-[0.5px] dark:bg-zinc-900 dark:text-amber-50 md:dark:border-amber-50`}
      >
        <AppContextProvider>
          <header className="relative min-h-20 border-b-[0.5px]">
            <Controls />
            <Nav />
          </header>

          {/* <div className="sticky top-0 z-300 cursor-pointer border-b-[0.5px] border-neutral-900 bg-amber-50 dark:border-amber-50 dark:bg-neutral-900"></div> */}

          {/* <header className="my-10 w-full flex-col gap-10">
            <div className="text-center">
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
                  <MessagesIcon className="h-4 w-4 fill-black dark:fill-white" />
                  <span>Send me a message!</span>
                </a>
                <hr className="border-t-[0.5px] border-[#4f4f4f]" />
              </div>
            </div>
          </header> */}
          <main className="overflow-auto px-10 text-[14px] text-wrap">
            <div
              className={`${font.className} flex flex-col items-start gap-10`}
            >
              {/* <section className="flex flex-col items-center gap-10">
                <p className="mt-3 leading-relaxed font-light">
                  <span className="font-bold">
                    Hey there! Glad to see you've wandered this far across the
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
                    I'm {new Date().getFullYear() - 2000} years old. I'm a
                    coffee lover. They do say that developers are machines that
                    turn coffee into code. That's me: I have thousands of new
                    ideas in my mind that I would like to implement. Some of
                    them actually come to life, and I invite you to have a look
                    at them!
                  </p>
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
              </section> */}
            </div>
            <div className="">{children}</div>
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}

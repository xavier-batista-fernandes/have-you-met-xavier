import "@/app/v2/globals.css";
import { ExternalIcon } from "@/components/icons/external.icon";
import { Libre_Franklin } from "next/font/google";

const font = Libre_Franklin({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>About - Xavier Fernandes</title>
      </head>
      <body className="text-white bg-black p-10">
        <header className="h-[30vh]">
          <h1 className="text-2xl font-bold p-0">XAVIER FERNANDES</h1>
          <p className="text-lg font-bold text-[#ABABAB]">SOFTWARE DEVELOPER</p>
        </header>
        <main className="text-[14px]">
          <div className={`${font.className} flex items-start gap-10`}>
            <section className="sticky top-0 min-w-[350px] w-[350px] outline-t">
              <p className="mt-10">
                I'm a coffee lover. They do say that developers are machines that turn coffee into
                code. That's me: I have a thousand of new ideas in my mind that I would like to
                implement. Some of them actually come to life, and I invite you to have a look at
                them!
              </p>
              <ul className="mt-10 flex flex-col text-sm">
                <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                <li className="transition-colors hover:bg-white/10 duration-200 ease-out">
                  <a
                    href="https://github.com/xavier-batista-fernandes"
                    className="flex items-center gap-2 py-3 px-3"
                  >
                    <ExternalIcon className="h-4 w-4 fill-white" />
                    <span>GitHub</span>
                  </a>
                </li>
                <hr className="border-t-[0.5px] border-[#4f4f4f]" />
                <li className="transition-colors hover:bg-white/10 duration-200 ease-out">
                  <a
                    href="https://www.linkedin.com/in/xavierbatistafernandes/"
                    className="flex items-center gap-2 py-3 px-3"
                  >
                    <ExternalIcon className="h-4 w-4 fill-white" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <hr className="border-t-[0.5px] border-[#4f4f4f]" />
              </ul>
            </section>
            <section className="basis-2/3 h-[200vh]">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}

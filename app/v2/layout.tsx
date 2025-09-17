import "@/app/v2/globals.css";
import { BlogIcon } from "@/components/icons/blog.icon";
import { ExternalIcon } from "@/components/icons/external.icon";
import { FilesIcon } from "@/components/icons/files.icon";
import { HammerIcon } from "@/components/icons/hammer.icon";
import { MessagesIcon } from "@/components/icons/messages.icon";
import { PersonIcon } from "@/components/icons/person.icon";
import { Libre_Franklin } from "next/font/google";
import Link from "next/link";

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
        <header className="h-[30vh] flex gap-10">
          <div className="basis-[350px]">
            <h1 className="text-2xl font-light p-0 uppercase">Xavier Fernandes</h1>
            <p className="text-4xl font-bold text-[#ABABAB]">SOFTWARE DEVELOPER</p>
            <div className="pt-2">
              <hr className="border-t-[0.5px] border-[#4f4f4f]" />
              <a
                href="mailto:fernandesbatistaxavier@gmail.com"
                className="text-xs flex items-center gap-2 p-3 transition-colors hover:bg-white/10 duration-200 ease-out"
              >
                <MessagesIcon className="h-4 w-4 fill-white" />
                <span>Send me a message!</span>
              </a>
              <hr className="border-t-[0.5px] border-[#4f4f4f]" />
            </div>
          </div>
          <nav className="grow-1">
            <ul className="flex flex-col text-sm">
              <hr className="border-t-[0.5px] border-[#4f4f4f]" />
              <li className="transition-colors hover:bg-white/10 duration-200 ease-out">
                <Link href="/v2/about" className="flex items-center gap-2 py-3 px-3">
                  <PersonIcon className="h-6 w-6 fill-white" />
                  <span>About</span>
                </Link>
              </li>
              <hr className="border-t-[0.5px] border-[#4f4f4f]" />
              <li className="transition-colors hover:bg-white/10 duration-200 ease-out">
                <Link href="/v2/blog" className="flex items-center gap-2 py-3 px-3">
                  <BlogIcon className="h-6 w-6 fill-white" />
                  <span>Blog</span>
                </Link>
              </li>
              <hr className="border-t-[0.5px] border-[#4f4f4f]" />
              <li className="transition-colors hover:bg-white/10 duration-200 ease-out">
                <Link href="/v2/projects" className="flex items-center gap-2 py-3 px-3">
                  <HammerIcon className="h-6 w-6 fill-white" />
                  <span>Projects</span>
                </Link>
              </li>
              <hr className="border-t-[0.5px] border-[#4f4f4f]" />
              <li className="transition-colors hover:bg-white/10 duration-200 ease-out">
                <Link href="/v2/work" className="flex items-center gap-2 py-3 px-3">
                  <FilesIcon className="h-6 w-6 fill-white" />
                  <span>Work</span>
                </Link>
              </li>
              <hr className="border-t-[0.5px] border-[#4f4f4f]" />
            </ul>
          </nav>
        </header>
        <main className="text-[14px] mt-10">
          <div className={`${font.className} flex items-start gap-10`}>
            <section className="sticky top-0 basis-[350px] shrink-0">
              <p className="text-xs">
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
            <section className="grow-1 h-[200vh]">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}

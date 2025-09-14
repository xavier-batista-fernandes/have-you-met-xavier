import "@/app/v2/globals.css";
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
          <h1 className="text-3xl font-bold p-0">Xavier Fernandes</h1>
          <p className="text-[#ABABAB]">Software Developer</p>
        </header>
        <main className="text-[14px]">
          <div className={`${font.className} flex items-start gap-10`}>
            <section className="sticky top-0 min-w-[350px] w-[350px]">
              <p className="mt-10">
                I'm a coffee lover. They do say that developers are machines that turn coffee into
                code. That's me: I have a thousand of new ideas in my mind that I would like to
                implement. Some of them actually come to life, and I invite you to have a look at
                them!
              </p>
            </section>
            <section className="basis-2/3 h-[200vh]">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}

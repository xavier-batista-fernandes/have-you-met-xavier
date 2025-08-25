"use client";
import { GitHubIcon } from "@/components/icons/github-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const items = document.getElementById("items")?.children!;
    for (const item of items) {
      const handlerMouseOver = () => {
        console.log(item);
        item.style.transition = `transform 0.5s ease-in-out, height 0.5s ease-in-out`;
        item.style.transform = `translateX(20px)`;
      };
      item.addEventListener("click", handlerMouseOver);

      const handlerMouseLeave = () => {
        console.log(item);
        item.style.transition = `transform 0.5s ease-in-out, height 0.5s ease-in-out`;
        item.style.transform = `translateX(-20px)`;
      };
      item.addEventListener("click", handlerMouseLeave);
    }
  }, []);

  return (
    <>
      {/* <div
        className="fixed"
        style={{ backgroundImage: "linear-gradient(to right, black 1px, black 1px)" }}
      ></div> */}
      <div
        id="items"
        className="relative h-screen bg-[#ede0d4] transition-transform"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ddb892 1px, transparent 1px), linear-gradient(to bottom, #ddb892 1px, transparent 1px)",
          backgroundSize: "10vw 10vw",
          backgroundPosition: "5vw 5vw",
        }}
      >
        <div className="absolute h-5/6 aspect-square left-10 top-10 rounded-2xl border-1 shadow-2xl bg-[#b08968]">
          <h2 className="font-bold text-xl w-fit -rotate-90 -translate-x-8 translate-y-18">
            About Me
          </h2>
        </div>
        <div className="absolute h-5/6 aspect-square left-18 top-14 rounded-2xl border-1 shadow-2xl bg-[#ddb892]">
          <h2 className="font-bold text-xl w-fit -rotate-90 -translate-x-8 translate-y-18">
            About Me
          </h2>
        </div>
        <div className="absolute h-5/6 aspect-square left-26 top-18 rounded-2xl border-1 shadow-2xl bg-[#e6ccb2] ">
          <h2 className="font-bold text-xl w-fit -rotate-90 -translate-x-8 translate-y-18">
            About Me
          </h2>
        </div>
        <div className="absolute h-5/6 aspect-square left-34 top-22 rounded-2xl border-1 shadow-2xl bg-[#e8a969] p-10">
          <h1 className="font-extrabold text-5xl">Xavier Fernandes</h1>
          <p>Software Developer</p>
        </div>
      </div>
    </>
  );
}

const FooterComponent = () => (
  <footer className="relative w-full bg-gradient-to-b from-neutral-950 to-black py-12 border-t border-neutral-800">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6 gap-10">
      {/* Social Links */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <h3 className="text-neutral-400 text-sm font-semibold tracking-widest uppercase">
          Connect
        </h3>
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/xavier-batista-fernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-neutral-400 hover:text-blue-400 transition-all duration-200"
          >
            <div className="h-8 w-8">
              <GitHubIcon />
            </div>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/xavier-batista-fernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-neutral-400 hover:text-blue-400 transition-all duration-200"
          >
            <div className="h-8 w-8">
              <LinkedInIcon />
            </div>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <h3 className="text-neutral-400 text-sm font-semibold tracking-widest uppercase">
          Projects
        </h3>
        <div className="grid grid-cols-1 gap-2 text-center md:text-left">
          <a
            href="https://github.com/xavier-batista-fernandes/project1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-blue-400 text-sm font-mono transition-colors duration-200"
          >
            Terras Lusas
          </a>
          <a
            href="https://github.com/xavier-batista-fernandes/project2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-blue-400 text-sm font-mono transition-colors duration-200"
          >
            IPMA+
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="text-neutral-600 text-xs mt-10 text-center px-4">
      &copy; {new Date().getFullYear()} Xavier Fernandes • Built with 🩵 using Next.js (React) &
      TailwindCSS
    </div>
  </footer>
);

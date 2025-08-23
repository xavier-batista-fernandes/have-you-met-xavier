export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-neutral-100 font-mono overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 z-0 grid-bg" aria-hidden="true" />
      <div className=" w-full  z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start min-h-screen">
        {/* Left side: Large text about yourself */}
        <section className="w-full py-12">
          <h1 className="text-4xl font-bold mb-6 select-none transition-colors duration-200 hover:text-blue-400">
            Xavier Fernandes
          </h1>
          <div className="text-lg leading-relaxed text-neutral-300 font-mono">
            {/* Replace with your own story/intro */}
            I'm a passionate software developer with a love for clean code,
            thoughtful architecture, and continuous learning. My experience
            spans full-stack web development, cloud infrastructure, and open
            source. I thrive on solving complex problems and building impactful
            digital experiences for users and teams.
            <br />
            <br />I enjoy working with modern technologies like React, Next.js,
            TypeScript, and Java Spring Boot. Outside of coding, I’m always
            exploring new ideas, writing, and collaborating with other
            developers.
          </div>
        </section>
        {/* Right side: Vertical stack of border-only cards */}
        <aside className="w-full flex flex-col gap-6 bg-black h-full px-0 mx-0">
          <a
            href="/blog"
            className="w-full border border-neutral-700 rounded-lg text-neutral-200 hover:border-blue-400 transition-colors duration-200 block"
          >
            <div className="text-lg font-semibold px-0 py-4 text-center">
              Blog
            </div>
          </a>
          <a
            href="/projects"
            className="border border-neutral-700 rounded-lg text-neutral-200 hover:border-blue-400 transition-colors duration-200 block"
          >
            <div className="text-lg font-semibold px-0 py-4 text-center">
              Projects
            </div>
          </a>
          <div className="border border-neutral-700 rounded-lg text-neutral-400 block">
            <div className="text-lg font-semibold px-0 py-4 text-center">
              Coming Soon
            </div>
          </div>
        </aside>
      </div>
      {/* Footer with contact links */}
      <footer className="w-full bg-black py-8 mt-16 flex flex-col items-center border-t border-neutral-800">
        <div className="flex flex-col items-center w-full max-w-5xl px-4">
          <div className="flex gap-6 mb-2">
            <a
              href="https://github.com/xavier-batista-fernandes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-400 hover:text-blue-400 text-xs transition-colors duration-200"
            >
              <svg
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="inline-block align-middle opacity-80 group-hover:opacity-100"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/xavier-batista-fernandes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-400 hover:text-blue-400 text-xs transition-colors duration-200"
            >
              <svg
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="inline-block align-middle opacity-80 group-hover:opacity-100"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-2">
            <a
              href="https://github.com/xavier-batista-fernandes/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-blue-400 text-xs font-mono transition-colors duration-200"
            >
              Project One
            </a>
            <a
              href="https://github.com/xavier-batista-fernandes/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-blue-400 text-xs font-mono transition-colors duration-200"
            >
              Project Two
            </a>
            <a
              href="https://github.com/xavier-batista-fernandes/project3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-blue-400 text-xs font-mono transition-colors duration-200"
            >
              Project Three
            </a>
          </div>
          <div className="text-neutral-600 text-[11px] font-mono mt-2 text-center w-full">
            &copy; {new Date().getFullYear()} Xavier Batista Fernandes. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

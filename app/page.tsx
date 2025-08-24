import { GitHubIcon } from "@/components/icons/github-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";

export default function Home() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className=" min-h-screen flex flex-col items-center justify-center bg-transparent text-neutral-100 overflow-hidden">
        {/* Grid background effect */}
        <div className="w-full flex z-10 items-start min-h-screen">
          {/** LEFT PANEL: Description */}
          <section className="w-1/2 py-12 text-center">
            <h1 className="text-4xl font-bold mb-6 select-none uppercase tracking-widest">
              Xavier Fernandes
            </h1>
            <div className="leading-relaxed text-neutral-300 px-12">
              I'm a 24-year-old Software Engineer based in Lisbon, passionate about building
              engaging and scalable software solutions. My interest in web development started
              during my academic years as both a student and a teaching assistant, which naturally
              led me into a fullstack role as my first professional experience.
              <br />
              <br />
              I'm driven by curiosity and the excitement of building things from scratch. I often
              want to understand how things work under the hood, because it helps me applying good
              practices that improve the codebase and the user experience. There's nothing quite
              like seeing good code come to life and make a real impact.
              <br />
              <br />
              Currently I’m developing features for a B2B product at Volkswagen Digital Solutions.
              In my spare time I’m building a side project focused on the geography of Portuguese
              municipalities.
            </div>
          </section>

          {/** RIGHT PANEL: Navigation links */}
          <aside className="w-1/2 flex flex-col h-full bg-black grow-[1]">
            <a
              href="/blog"
              className="w-full border-dashed border-neutral-700 text-neutral-200 hover:border-blue-400 transition-colors duration-200 block flex-1"
            >
              <div className="text-lg font-semibold px-0 py-4 text-center">Blog</div>
              <div className="text-sm font-thin text-neutral-400 px-0 pb-4 text-center">
                Read my latest thoughts on web development, engineering practices, and tech trends.
                I share tips, tutorials, and personal stories from my journey.
              </div>
            </a>
            <a
              href="/projects"
              className="w-full border-dashed border-neutral-700 text-neutral-200 hover:border-blue-400 transition-colors duration-200 block flex-1 group"
            >
              <div className="flex flex-col items-center py-6">
                <div className="text-2xl font-bold text-center mb-2">Projects</div>
                <div className="text-base text-neutral-400 text-center">
                  Explore my portfolio of professional and side projects, including open source work
                  and experiments in web, cloud, and data visualization.
                </div>
              </div>
            </a>
            <div className="w-full border-dashed border-neutral-700 text-neutral-200 hover:border-blue-400 transition-colors duration-200 block flex-1 group">
              <div className="flex flex-col items-center py-6">
                <div className="text-2xl font-bold text-center mb-2">About me</div>
                <div className="text-base text-neutral-400 text-center">
                  More content coming soon! Feel free to connect or check out my work below.
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer with contact links */}
      </div>
      <FooterComponent />
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

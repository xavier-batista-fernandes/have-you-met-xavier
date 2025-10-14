import About from '@/components/organisms/sections/about';
import Projects from '@/components/organisms/sections/projects';
import Work from '@/components/organisms/sections/work';

export default function Page() {
  return (
    <>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="work" className="min-h-screen">
        <Work />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      {/* <section id="blog" className="min-h-screen">
        <Blog />
      </section> */}
    </>
  );
}

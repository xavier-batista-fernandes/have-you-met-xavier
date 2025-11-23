import About from '@/src/components/organisms/sections/about';
import Blog from '@/src/components/organisms/sections/blog';
import Projects from '@/src/components/organisms/sections/projects';
import Work from '@/src/components/organisms/sections/work';

export default function Page() {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="blog">
        <Blog />
      </section>
    </>
  );
}

import About from '@/components/organisms/sections/about';
import Blog from '@/components/organisms/sections/blog';
import Projects from '@/components/organisms/sections/projects';
import Work from '@/components/organisms/sections/work';

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

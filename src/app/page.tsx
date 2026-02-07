import About from '@/src/components/organisms/sections/about';
import Blog from '@/src/components/organisms/sections/blog';
import Projects from '@/src/components/organisms/sections/projects';
import Work from '@/src/components/organisms/sections/work';
import Skills from '../components/organisms/sections/skills';

export default function Page() {
  return (
    <>
      <section id="skills">
        <Skills />
      </section>
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

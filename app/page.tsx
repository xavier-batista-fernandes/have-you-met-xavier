import About from '../components/sections/about'
import Blog from '../components/sections/blog'
import Projects from '../components/sections/projects'
import Work from '../components/sections/work'

export default function Page() {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="blog">
        <Blog />
      </section>
    </>
  )
}

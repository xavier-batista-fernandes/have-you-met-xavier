import About from '../components/sections/about'
import Blog from '../components/sections/blog'
import Projects from '../components/sections/projects'
import Work from '../components/sections/work'

export default function Page() {
  return (
    <>
      <section className="h-[100vh]" id="about">
        <About />
      </section>
      <section className="h-[100vh]" id="projects">
        <Projects />
      </section>
      <section className="h-[100vh]" id="work">
        <Work />
      </section>
      <section className="h-[100vh]" id="blog">
        <Blog />
      </section>
    </>
  )
}

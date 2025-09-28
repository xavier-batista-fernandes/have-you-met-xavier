import { AboutSection } from './sections/about'
import { BlogSection } from './sections/blog'
import { ProjectsSection } from './sections/projects'
import { WorkSection } from './sections/work'

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <AboutSection />
      <BlogSection />
      <ProjectsSection />
      <WorkSection />
    </div>
  )
}

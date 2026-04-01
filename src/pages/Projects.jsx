import ProjectList from '../components/ProjectList'
import SectionHeader from '../components/SectionHeader'

export default function Projects() {
  return (
    <section className="space-y-10 sm:space-y-12">
      <SectionHeader
        eyebrow="Portfolio"
        title="Projects"
        subtitle="Full-stack web, product UX, and applied AI—each project is a concrete slice of how I design and implement solutions."
      />
      <ProjectList />
    </section>
  )
}

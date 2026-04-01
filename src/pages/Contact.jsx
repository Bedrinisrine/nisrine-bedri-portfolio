import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'

export default function Contact({ titleAs = 'h1' }) {
  return (
    <section className="space-y-10 sm:space-y-12">
      <SectionHeader
        titleAs={titleAs}
        eyebrow="Hello"
        title="Contact"
        subtitle="Send a message for opportunities, collaborations, or questions—I read every note."
      />
      <ContactForm />
    </section>
  )
}

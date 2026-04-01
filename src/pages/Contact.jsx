import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'

export default function Contact({ titleAs = 'h1' }) {
  return (
    <section className="space-y-10 sm:space-y-12">
      <SectionHeader
        titleAs={titleAs}
        eyebrow="Hello"
        title="Contact"
        subtitle="Your corner to say hello—about work, ideas, or anything in between. I&apos;ll get back to you."
      />
      <ContactForm />
    </section>
  )
}

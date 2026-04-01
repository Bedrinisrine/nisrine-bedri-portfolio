import { certificates } from '../data/certificates'
import { publicUrl } from '../utils/publicUrl'
import SectionHeader from '../components/SectionHeader'

export default function Certificates({ titleAs = 'h1' }) {
  return (
    <section className="space-y-8 sm:space-y-10">
      <SectionHeader
        titleAs={titleAs}
        eyebrow="Credentials"
        title="Certificates"
        subtitle="Professional certifications and training programs."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.length === 0 && (
          <div className="card p-6 text-slate-600">No certificates listed yet.</div>
        )}
        {certificates.map((c) => (
          <article
            key={c.file}
            className="group card scroll-reveal animate-fade-up hover-lift card-motion flex items-center justify-between gap-4 p-5 transition hover:shadow-soft"
          >
            <h2 className="font-medium leading-snug text-slate-900 pr-2">{c.title}</h2>
            <a
              className="shrink-0 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-rose-600"
              href={publicUrl(`/certificates/${c.file}`)}
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

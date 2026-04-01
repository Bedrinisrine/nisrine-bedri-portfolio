import { publicUrl } from '../utils/publicUrl'
import SectionHeader from '../components/SectionHeader'

export default function Experience({ titleAs = 'h1' }) {
  const experiences = [
    {
      company: 'Prodware',
      position: 'Graduation Internship – Software Engineer Intern',
      period: '04/2025 – present',
      location: 'Casablanca, Morocco',
      description: [
        'Developed a multilingual voice-command system (Darija, French, English)',
        'Integrated speech-to-text and semantic analysis APIs',
        'Designed and implemented backend services and RESTful APIs',
        'Built the UI and connected it end-to-end with backend services',
        'Collaborated on deployment and testing across desktop and web',
      ],
      technologies: [
        'Node.js',
        'Express',
        'Next.js',
        'JavaScript',
        'Whisper',
        'Gemini API',
        'APE',
        'SQL Server',
        'React',
      ],
      logo: '/images/prodware-logo.png',
    },
    {
      company: 'ONCF',
      position: 'Web Development Intern',
      period: '07/2024 – 08/2024',
      location: 'Casablanca, Morocco',
      description: [
        'Designed and implemented a web-based tool for railway maintenance operations',
      ],
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      logo: '/images/oncf-logo.png',
    },
    {
      company: 'Sonasid',
      position: 'IT Intern – Analyst',
      period: '07/2023 – 08/2023',
      location: 'Casablanca, Morocco',
      description: [
        'Conducted system analysis and documentation for an internal application',
        'Developed a dashboard for data visualization and reporting',
      ],
      technologies: ['Python', 'Django', 'SQL', 'Chart.js'],
      logo: '/images/sonasid-logo.png',
    },
  ]

  return (
    <section className="space-y-10 sm:space-y-12">
      <SectionHeader
        titleAs={titleAs}
        eyebrow="Career"
        title="Experience"
        subtitle="Internships and roles where I shipped working software—voice AI for sales teams, rail operations tools, and data-driven dashboards."
      />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="scroll-reveal animate-fade-up hover-lift card-motion rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card transition hover:shadow-soft sm:p-8"
            style={{ '--enter-delay': `${index * 90}ms`, '--float-delay': `${index * 250}ms` }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/90 bg-slate-50">
                  <img
                    src={publicUrl(exp.logo)}
                    alt=""
                    className="h-10 w-10 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-sm font-bold text-slate-700">
                    {exp.company.charAt(0)}
                  </div>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{exp.position}</h2>
                    <p className="mt-0.5 text-base font-medium text-rose-700">{exp.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 sm:text-right">
                    <p className="font-medium text-slate-700">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Stack
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="rounded-lg border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

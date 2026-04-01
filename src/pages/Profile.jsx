import SectionHeader from '../components/SectionHeader'
import ProfilePhotoExpandable from '../components/ProfilePhotoExpandable'
import { LINKEDIN, INSTAGRAM } from '../constants/social'
import { publicUrl } from '../utils/publicUrl'
import { cvButtonClass } from '../constants/ui'

const skillClass =
  'rounded-lg border border-slate-200/90 bg-slate-50/80 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:border-slate-300'

export default function Profile({ titleAs = 'h1' }) {
  return (
    <section className="space-y-10 sm:space-y-12">
      <SectionHeader
        titleAs={titleAs}
        eyebrow="Profile"
        title="About me"
        subtitle="Software & AI engineer focused on full-stack delivery, clean architecture, and user-centered products."
      />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="scroll-reveal animate-fade-up hover-lift card-motion rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card sm:p-8">
          <div className="mb-8 flex flex-col items-center sm:items-start">
            <ProfilePhotoExpandable
              src={publicUrl('/images/profile.jpg')}
              alt="Nisrine Bedri"
              buttonClassName="shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
            >
              <span className="relative block">
                <img
                  src={publicUrl('/images/profile.jpg')}
                  alt=""
                  className="h-24 w-24 rounded-full object-cover shadow-md ring-2 ring-white transition hover:ring-rose-300 sm:h-28 sm:w-28"
                />
                <span
                  className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500"
                  aria-hidden
                />
              </span>
            </ProfilePhotoExpandable>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
            I&apos;m a software engineer with hands-on experience across full-stack development and
            applied AI. I enjoy turning complex requirements into thoughtful, maintainable systems and
            interfaces that feel fast and intuitive.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Curiosity drives how I work: I stay current with modern web stacks, AI tooling, and
            engineering practices — from APIs and data models to deployment and testing.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            I&apos;m looking for environments where strong engineering and clear product thinking go
            hand in hand.
          </p>
          <div className="mt-8">
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} download className={cvButtonClass}>
              Download CV
            </a>
          </div>
        </div>

        <aside className="scroll-reveal animate-fade-up anim-delay-1 hover-lift card-motion rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 shadow-card sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-slate-500">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <span className="block text-xs font-medium text-slate-400">Email</span>
              <a className="font-medium text-slate-900 hover:text-rose-700" href="mailto:nisrinebedri@gmail.com">
                nisrinebedri@gmail.com
              </a>
            </li>
            <li>
              <span className="block text-xs font-medium text-slate-400">Location</span>
              Casablanca, Morocco
            </li>
            <li>
              <span className="block text-xs font-medium text-slate-400">Phone</span>
              <a className="font-medium text-slate-900 hover:text-rose-700" href="tel:+212617594333">
                +212 6 17 59 43 33
              </a>
            </li>
            <li>
              <span className="block text-xs font-medium text-slate-400">LinkedIn</span>
              <a
                className="font-medium text-rose-700 hover:underline"
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/nisrine-bedri-ba8514201
              </a>
            </li>
            <li>
              <span className="block text-xs font-medium text-slate-400">Instagram</span>
              <a
                className="font-medium text-rose-700 hover:underline"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                @nissrine_bedri
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-slate-900">Technical skills</h2>
        <p className="mt-1 text-sm text-slate-500">
          A practical map of what I use in real builds—languages, web and mobile, data, AI APIs, and
          how I ship—organized so you can scan it quickly.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Languages', items: ['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'J2EE'] },
            { title: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
            {
              title: 'Frameworks & platforms',
              items: ['Node.js', 'Express', 'Django', 'Spring Boot', 'Angular', 'Flutter', '.NET'],
            },
            { title: 'Mobile', items: ['Android (Java)'] },
            { title: 'Databases', items: ['SQL Server', 'Oracle', 'MySQL'] },
            {
              title: 'AI & APIs',
              items: ['Whisper', 'Gemini (semantic API)', 'OpenAI', 'Vosk'],
            },
            {
              title: 'Delivery',
              items: ['Git', 'Docker', 'CI/CD', 'Agile / Scrum', 'Jira', 'GitHub Actions'],
            },
          ].map((group) => (
            <div key={group.title} className="card scroll-reveal animate-fade-up hover-lift card-motion p-5">
              <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span key={s} className={skillClass}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

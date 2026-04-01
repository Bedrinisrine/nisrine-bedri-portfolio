import { Link } from 'react-router-dom'
import Profile from './Profile'
import Experience from './Experience'
import Certificates from './Certificates'
import ProjectList from '../components/ProjectList'
import SectionHeader from '../components/SectionHeader'
import { publicUrl } from '../utils/publicUrl'
import { cvButtonClass } from '../constants/ui'

export default function Home() {
  return (
    <div className="space-y-0">
      <section
        id="home"
        className="scroll-reveal animate-scale-in relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 text-center shadow-soft"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${publicUrl('/images/hero.jpg')})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/95"
          aria-hidden
        />
        <div className="relative z-10 px-4 py-20 sm:px-8 sm:py-28">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-eyebrow text-rose-300/95">
            Software engineering · Artificial intelligence
          </p>
          <h1 className="animate-fade-up anim-delay-1 mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            <span className="title-wave inline-block">Hello, I&apos;m Nisrine Bedri</span>
          </h1>
          <p className="animate-fade-up anim-delay-2 mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-200/95 sm:text-base">
            Recently graduated MIAGE engineer with hands-on experience in full-stack development and
            artificial intelligence. I focus on clear architecture, solid UX, and shipping products
            that scale.
          </p>
          <p className="animate-fade-up anim-delay-3 mx-auto mt-4 max-w-xl text-sm text-slate-400">
            Read it like a single story top to bottom—or jump straight to any chapter from the menu
            when you are short on time.
          </p>
          <div className="animate-fade-up anim-delay-4 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download
              className={`min-w-[160px] focus-visible:ring-offset-slate-900 ${cvButtonClass}`}
            >
              Download CV
            </a>
            <Link
              to="/projects"
              className="inline-flex min-h-[44px] min-w-[160px] items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              View projects
            </Link>
          </div>
        </div>
      </section>

      <div id="profile" className="scroll-mt-28 pt-16 sm:pt-20">
        <Profile titleAs="h2" />
      </div>

      <div
        id="projects"
        className="scroll-mt-28 border-t border-slate-200/80 pt-16 sm:pt-20"
      >
        <SectionHeader titleAs="h2" eyebrow="Work" title="Selected projects" />
        <ProjectList />
      </div>

      <div
        id="experience"
        className="scroll-mt-28 border-t border-slate-200/80 pt-16 sm:pt-20"
      >
        <Experience titleAs="h2" />
      </div>

      <div
        id="certificates"
        className="scroll-mt-28 border-t border-slate-200/80 pt-16 sm:pt-20"
      >
        <Certificates titleAs="h2" />
      </div>

      <div
        id="contact"
        className="scroll-mt-28 border-t border-slate-200/80 pb-4 pt-16 sm:pt-20"
      >
        <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-rose-50/80 via-white to-slate-50 p-8 text-center shadow-card sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-rose-600">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Let&apos;s talk
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
            Opportunities, collaborations, or questions—send a message and I&apos;ll get back to you.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex min-h-[44px] min-w-[180px] items-center justify-center rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
          >
            Open contact form
          </Link>
        </div>
      </div>
    </div>
  )
}

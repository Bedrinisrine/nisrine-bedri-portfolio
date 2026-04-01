import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { projects as defaultProjects } from '../data/projects'
import { orderProjectsWithVoiceFirst } from '../data/orderProjects'
import { publicUrl } from '../utils/publicUrl'

export default function ProjectList({ projects: projectsProp } = {}) {
  const projects = useMemo(
    () => orderProjectsWithVoiceFirst(projectsProp ?? defaultProjects),
    [projectsProp]
  )
  const [expandedProjects, setExpandedProjects] = useState({})
  const [gallery, setGallery] = useState(null)
  const touchStartX = useRef(null)

  const toggleExpanded = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  const openGallery = useCallback((project, globalIndex) => {
    const images = project.media?.screenshots ?? []
    if (!images.length) return
    setGallery({
      images,
      index: Math.min(Math.max(0, globalIndex), images.length - 1),
      title: project.title,
    })
  }, [])

  const closeGallery = useCallback(() => setGallery(null), [])

  const goPrev = useCallback(() => {
    setGallery((g) => {
      if (!g || g.index <= 0) return g
      return { ...g, index: g.index - 1 }
    })
  }, [])

  const goNext = useCallback(() => {
    setGallery((g) => {
      if (!g || g.index >= g.images.length - 1) return g
      return { ...g, index: g.index + 1 }
    })
  }, [])

  useEffect(() => {
    if (!gallery) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeGallery()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [gallery, closeGallery, goPrev, goNext])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (dx > 56) goPrev()
    else if (dx < -56) goNext()
  }

  return (
    <>
      <div className="space-y-12">
        {projects.map((project, projectOrder) => (
          <div
            key={project.id}
            className={`scroll-reveal animate-fade-up hover-lift card-motion rounded-2xl border bg-white p-5 shadow-card transition hover:shadow-soft sm:p-8 ${
              project.featured
                ? 'border-rose-300/80 ring-1 ring-rose-200/60 md:scroll-mt-32'
                : 'border-slate-200/90'
            }`}
            style={{
              '--enter-delay': `${Math.min(projectOrder, 6) * 75}ms`,
              '--float-delay': `${projectOrder * 220}ms`,
            }}
          >
            {project.featured && projectOrder === 0 && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-eyebrow text-rose-700">
                Flagship project
              </p>
            )}
            <div className="mb-6">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <h2 className="pr-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  {project.title}
                </h2>
                {project.featured && (
                  <span
                    className="inline-flex shrink-0 items-center rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white sm:text-[11px]"
                    title="Highlighted project"
                  >
                    Featured
                  </span>
                )}
              </div>
              <p className="text-[15px] leading-relaxed text-slate-600">{project.description}</p>

              <div className="mb-4 mt-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="rounded-lg border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Highlights
                </h3>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {project.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {project.media.video && (
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Demo video
                  </h3>
                  <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/80">
                    <video controls className="w-full h-auto" preload="metadata">
                      <source src={publicUrl(project.media.video)} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}

              {project.media.screenshots.length > 0 && (
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Screenshots ({project.media.screenshots.length})
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {(expandedProjects[project.id]
                      ? project.media.screenshots
                      : project.media.screenshots.slice(0, 4)
                    ).map((screenshot, screenIdx) => {
                      const globalIndex = expandedProjects[project.id]
                        ? screenIdx
                        : screenIdx
                      return (
                        <button
                          type="button"
                          key={screenIdx}
                          className="group relative block w-full cursor-zoom-in rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                          onClick={() => openGallery(project, globalIndex)}
                        >
                          <img
                            src={publicUrl(screenshot)}
                            alt={`${project.title} screenshot ${globalIndex + 1}`}
                            className="h-28 w-full rounded-xl border border-slate-200/90 object-cover transition group-hover:border-rose-300/90 group-hover:ring-2 group-hover:ring-rose-400/50 sm:h-32"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                          <div className="hidden h-28 w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-500 sm:h-32">
                            Image not found
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {project.media.screenshots.length > 4 && (
                    <div className="mt-4 text-center">
                      <button
                        type="button"
                        onClick={() => toggleExpanded(project.id)}
                        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-600"
                      >
                        {expandedProjects[project.id]
                          ? 'Show less'
                          : `Show all ${project.media.screenshots.length} screenshots`}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {gallery &&
        createPortal(
          <div
            className="fixed inset-0 z-[60000] flex flex-col bg-black/93 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot gallery"
          >
            <header className="relative z-10 shrink-0 border-b border-white/20 bg-slate-950 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] pr-16 sm:px-5 sm:pr-20">
              <p className="truncate text-sm font-semibold text-white">{gallery.title}</p>
              <p className="text-xs tabular-nums text-rose-200/95">
                {gallery.index + 1} / {gallery.images.length}
              </p>
            </header>

            <button
              type="button"
              onClick={closeGallery}
              className="fixed z-[60001] flex h-12 min-h-[48px] w-12 min-w-[48px] items-center justify-center rounded-full bg-rose-600 text-2xl font-light leading-none text-white shadow-2xl shadow-black/50 ring-2 ring-white/40 transition hover:bg-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{
                top: 'max(0.75rem, env(safe-area-inset-top))',
                right: 'max(0.75rem, env(safe-area-inset-right))',
              }}
              aria-label="Close gallery"
            >
              ×
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              disabled={gallery.index <= 0}
              className="fixed z-[60001] flex h-12 min-h-[48px] w-12 min-w-[48px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/35 bg-slate-950 text-xl font-bold text-white shadow-2xl transition hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-35"
              style={{
                top: '50%',
                left: 'max(0.5rem, env(safe-area-inset-left))',
              }}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              disabled={gallery.index >= gallery.images.length - 1}
              className="fixed z-[60001] flex h-12 min-h-[48px] w-12 min-w-[48px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/35 bg-slate-950 text-xl font-bold text-white shadow-2xl transition hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-35"
              style={{
                top: '50%',
                right: 'max(0.5rem, env(safe-area-inset-right))',
              }}
              aria-label="Next image"
            >
              ›
            </button>

            <div
              className="flex min-h-0 flex-1 touch-pan-y flex-col"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex flex-1 cursor-default items-center justify-center px-14 py-4 sm:px-20 sm:py-6"
                onClick={closeGallery}
                role="presentation"
              >
                <div
                  className="relative max-h-[min(78vh,82dvh)] w-full max-w-5xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={publicUrl(gallery.images[gallery.index])}
                    alt={`${gallery.title} screenshot ${gallery.index + 1}`}
                    className="mx-auto max-h-[min(78vh,82dvh)] max-w-full select-none rounded-lg object-contain shadow-2xl ring-2 ring-white/25"
                    draggable={false}
                  />
                </div>
              </div>

              <div className="flex shrink-0 justify-center gap-3 border-t border-white/15 bg-slate-950/80 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:gap-4 sm:pb-5 sm:pt-4">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={gallery.index <= 0}
                  className="min-h-[44px] rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 disabled:opacity-35"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={gallery.index >= gallery.images.length - 1}
                  className="min-h-[44px] rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 disabled:opacity-35"
                >
                  Next
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

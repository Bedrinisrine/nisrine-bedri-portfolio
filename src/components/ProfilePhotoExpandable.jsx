import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * Wraps a profile image; click opens a full-screen preview with a clear exit control.
 */
export default function ProfilePhotoExpandable({ src, alt = 'Nisrine Bedri', children, buttonClassName = '' }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={buttonClassName}
        aria-label={`Enlarge ${alt} photo`}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {children}
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[60000] flex flex-col bg-black/93 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo of ${alt}`}
          >
            <div className="relative z-10 shrink-0 border-b border-white/20 bg-slate-950 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] pr-16 sm:pr-20 sm:px-5">
              <p className="truncate text-sm font-medium text-white">{alt}</p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="fixed z-[60001] flex h-12 min-h-[48px] w-12 min-w-[48px] items-center justify-center rounded-full bg-rose-600 text-2xl font-light leading-none text-white shadow-2xl shadow-black/50 ring-2 ring-white/40 transition hover:bg-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{
                top: 'max(0.75rem, env(safe-area-inset-top))',
                right: 'max(0.75rem, env(safe-area-inset-right))',
              }}
              aria-label="Close photo"
            >
              ×
            </button>

            <button
              type="button"
              className="flex flex-1 cursor-default items-center justify-center p-4 sm:p-8"
              onClick={() => setOpen(false)}
              aria-label="Close preview"
            >
              <img
                src={src}
                alt=""
                className="max-h-[85vh] max-w-full object-contain shadow-2xl ring-2 ring-white/25"
                onClick={(e) => e.stopPropagation()}
              />
            </button>
          </div>,
          document.body
        )}
    </>
  )
}

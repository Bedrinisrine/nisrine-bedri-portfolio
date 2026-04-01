import { NavLink } from 'react-router-dom'
import { publicUrl } from '../utils/publicUrl'
import { useEffect } from 'react'
import ProfilePhotoExpandable from './ProfilePhotoExpandable'

const NAV = [
  { to: '/', end: true, label: 'Home' },
  { to: '/profile', label: 'Profile' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      navbar.style.position = 'fixed'
      navbar.style.top = '0px'
      navbar.style.left = '0px'
      navbar.style.right = '0px'
      navbar.style.transform = 'translateZ(0)'
      navbar.style.willChange = 'transform'
    }
  }, [])

  const desktopClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
      isActive
        ? 'text-slate-900 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-rose-600'
        : 'text-slate-600 hover:text-slate-900'
    }`

  const pillClass = ({ isActive }) =>
    `shrink-0 px-3.5 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${
      isActive
        ? 'border-slate-900 bg-slate-900 text-white shadow-soft'
        : 'border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
    }`

  return (
    <div
      id="navbar"
      className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 shadow-nav backdrop-blur-xl"
    >
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10001] focus:inline-block focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-3 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <ProfilePhotoExpandable
              src={publicUrl('/images/profile.jpg')}
              alt="Nisrine Bedri"
              buttonClassName="group shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
            >
              <span className="relative block">
                <img
                  src={publicUrl('/images/profile.jpg')}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover shadow-md ring-2 ring-white transition group-hover:ring-rose-300 sm:h-11 sm:w-11"
                />
                <span
                  className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500"
                  aria-hidden
                />
              </span>
            </ProfilePhotoExpandable>
            <NavLink
              to="/"
              className="group flex min-w-0 flex-col justify-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/40"
              end
            >
              <span className="block truncate text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                Nisrine Bedri
              </span>
              <span className="hidden text-[11px] font-medium text-slate-500 sm:block">
                Software &amp; AI Engineer
              </span>
            </NavLink>
          </div>

          <div className="hidden items-center gap-0.5 md:flex">
            {NAV.map(({ to, end, label }) => (
              <NavLink key={to + String(end)} to={to} end={end} className={desktopClass}>
                {label}
              </NavLink>
            ))}
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 md:hidden">
            Navigate
          </span>
        </nav>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-0.5 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV.map(({ to, end, label }) => (
            <NavLink key={to + String(end)} to={to} end={end} className={pillClass}>
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      navbar.style.position = 'fixed'
      navbar.style.top = '0px'
      navbar.style.left = '0px'
      navbar.style.right = '0px'
      navbar.style.zIndex = '9999'
      navbar.style.transform = 'translateZ(0)'
      navbar.style.willChange = 'transform'
    }
    
    // Force reflow to ensure positioning
    const forceReflow = () => {
      if (navbar) {
        navbar.style.display = 'none'
        navbar.offsetHeight // trigger reflow
        navbar.style.display = 'block'
      }
    }
    
    setTimeout(forceReflow, 100)
  }, [])

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm tracking-wide block ${isActive ? 'text-pink-700 font-semibold' : 'text-gray-600'} hover:text-pink-700 transition-colors`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div 
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <nav className="bg-white rounded-lg shadow-sm px-4 py-3 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/profile.jpg" 
              alt="Nisrine Bedri" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-lg font-semibold text-gray-900 font-poppins">
              Nisrine Bedri
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={({ isActive }) =>
              `px-3 py-1 text-sm ${isActive ? 'text-pink-700 font-semibold' : 'text-gray-600'} hover:text-pink-700 transition-colors`
            }>
              Home
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) =>
              `px-3 py-1 text-sm ${isActive ? 'text-pink-700 font-semibold' : 'text-gray-600'} hover:text-pink-700 transition-colors`
            }>
              Profile
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) =>
              `px-3 py-1 text-sm ${isActive ? 'text-pink-700 font-semibold' : 'text-gray-600'} hover:text-pink-700 transition-colors`
            }>
              Projects
            </NavLink>
            <NavLink to="/experience" className={({ isActive }) =>
              `px-3 py-1 text-sm ${isActive ? 'text-pink-700 font-semibold' : 'text-gray-600'} hover:text-pink-700 transition-colors`
            }>
              Experience
            </NavLink>
            <NavLink to="/certificates" className={({ isActive }) =>
              `px-3 py-1 text-sm ${isActive ? 'text-pink-700 font-semibold' : 'text-gray-600'} hover:text-pink-700 transition-colors`
            }>
              Certificates
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg border border-pink-100">
            <div className="py-2">
              <NavLink to="/" end className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/profile" className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Profile
              </NavLink>
              <NavLink to="/projects" className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </NavLink>
              <NavLink to="/experience" className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Experience
              </NavLink>
              <NavLink to="/certificates" className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Certificates
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}



import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export default function Navbar() {
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
    `px-2 py-1 text-sm tracking-wide ${isActive ? 'text-pink-700 font-semibold' : 'text-gray-600'} hover:text-pink-700 transition-colors`;

  return (
    <div 
      id="navbar"
      style={{
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        zIndex: 9999,
        paddingTop: '16px',
        paddingLeft: '16px',
        paddingRight: '16px',
        backgroundColor: 'transparent'
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <nav style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/images/profile.jpg" 
              alt="Nisrine Bedri" 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <span style={{
              fontSize: '20px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              color: '#111827',
              fontFamily: 'Poppins, sans-serif'
            }}>Nisrine Bedri</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/profile" className={linkClass}>Profile</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/experience" className={linkClass}>Experience</NavLink>
            <NavLink to="/certificates" className={linkClass}>Certificates</NavLink>
          </div>
        </nav>
      </div>
    </div>
  )
}



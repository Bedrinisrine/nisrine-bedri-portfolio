import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block rounded px-3 py-2 ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`

  return (
    <aside className="sticky top-4 h-max space-y-2">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/profile" className={linkClass}>01_Profile</NavLink>
      <NavLink to="/projects" className={linkClass}>02_Projects</NavLink>
      <NavLink to="/experience" className={linkClass}>03_Experience</NavLink>
      <NavLink to="/certificates" className={linkClass}>04_Certificates</NavLink>
      <NavLink to="/contact" className={linkClass}>05_Contact</NavLink>
    </aside>
  )
}



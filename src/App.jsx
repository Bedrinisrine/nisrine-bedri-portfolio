import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.scroll-reveal'))
    if (!elements.length) return

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 55}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.01, rootMargin: '0px 0px -6% 0px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <main
        id="main-content"
        className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-32 md:pt-28"
        tabIndex={-1}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

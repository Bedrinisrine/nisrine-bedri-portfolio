import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-pink-50 text-gray-900">
        <main className="mx-auto max-w-6xl px-4 pt-32 pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default function Footer() {
  return (
    <footer className="bg-pink-100 border-t border-pink-200 py-8 mt-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/profile.jpg" 
                alt="Nisrine Bedri" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span className="text-2xl font-bold text-pink-700 hidden">NB</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Nisrine Bedri</h3>
              <p className="text-sm text-gray-600">Software Engineer & AI Engineer</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 mb-2">Get in touch</p>
            <p className="text-sm text-gray-700">+212 6 17 59 43 33</p>
            <p className="text-sm text-gray-700">nisrinebedri@gmail.com</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE52gGteJK_FwAAAZneYXUo-G92EB7O-aRymqaIvUFPxgAy--QLNhDD1nVXpxKGFirVI-1M8grFq7ND3rHvefmCGkHoj9RZJ1UpzLfzr5ot2tjuFMGCuLnpKNsrzZyC8UEyzuk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnisrine-bedri-ba8514201%2F" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.instagram.com/nisrinebedri" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              title="Instagram"
            >
              <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281h-1.563v-1.563h1.563v1.563zm-3.262 2.344c.49 0 .98.49.98 1.297 0 .807-.49 1.297-.98 1.297s-.98-.49-.98-1.297c0-.807.49-1.297.98-1.297zm5.229 4.688c0 2.026-1.297 3.323-3.323 3.323s-3.323-1.297-3.323-3.323 1.297-3.323 3.323-3.323 3.323 1.297 3.323 3.323z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.facebook.com/nisrinebedri" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              title="Facebook"
            >
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a 
              href="tel:+212617594333" 
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              title="Phone"
            >
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-pink-200 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Nisrine Bedri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

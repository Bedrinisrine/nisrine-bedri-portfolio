export default function Profile() {
  return (
    <section className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] items-start bg-white p-6 rounded-xl border border-pink-100">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="leading-7 text-gray-900">
          I’m a Software Engineer & AI Engineer with hands‑on experience across full‑stack
          development and applied artificial intelligence. I love transforming ideas into
          thoughtful, elegant products that feel fast, intuitive, and alive.
        </p>
        <p className="leading-7 text-gray-900">
          Creativity drives me, curiosity fuels me. I’m passionate about AI, modern web
          technologies, and building interfaces that delight. I’m always learning—the new
          and unknown is what keeps me excited and energized.
        </p>
        <p className="leading-7 text-gray-900">
          I’m eager to apply and expand my technical expertise in a dynamic, innovative
          environment where great engineering meets great design.
        </p>
        <div className="pt-2">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center rounded-md bg-pink-600 px-4 py-2 text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Download CV
          </a>
        </div>

        
      </div>

      <aside className="space-y-2 bg-pink-50 p-4 rounded-lg border border-pink-100">
        <h2 className="text-xl font-semibold">Quick Info</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li><strong>Email:</strong> <a className="text-pink-700 hover:underline" href="mailto:nisrinebedri@gmail.com">nisrinebedri@gmail.com</a></li>
          <li><strong>Location:</strong> Casablanca</li>
          <li><strong>Phone:</strong> <a className="text-pink-700 hover:underline" href="tel:+212617594333">+212 6 17 59 43 33</a></li>
          <li><strong>LinkedIn:</strong> <a className="text-pink-700 hover:underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE52gGteJK_FwAAAZneYXUo-G92EB7O-aRymqaIvUFPxgAy--QLNhDD1nVXpxKGFirVI-1M8grFq7ND3rHvefmCGkHoj9RZJ1UpzLfzr5ot2tjuFMGCuLnpKNsrzZyC8UEyzuk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnisrine-bedri-ba8514201%2F">nisrine-bedri</a></li>
        </ul>
      </aside>
      <div className="md:col-span-2">
        <div className="pt-2 space-y-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="card p-4 h-full">
              <h3 className="font-semibold text-black mb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'J2EE'].map((s) => (
                  <span key={s} className="rounded-full border border-pink-300 bg-white px-3 py-1 text-sm text-pink-700">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-4 h-full">
              <h3 className="font-semibold text-black mb-2">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React'].map((s) => (
                  <span key={s} className="rounded-full border border-pink-300 bg-white px-3 py-1 text-sm text-pink-700">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-4 h-full">
              <h3 className="font-semibold text-black mb-2">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'Django', 'Spring Boot', 'Angular', 'Flutter', '.NET'].map((s) => (
                  <span key={s} className="rounded-full border border-pink-300 bg-white px-3 py-1 text-sm text-pink-700">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-4 h-full">
              <h3 className="font-semibold text-black mb-2">Mobile Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Android (Java)'].map((s) => (
                  <span key={s} className="rounded-full border border-pink-300 bg-white px-3 py-1 text-sm text-pink-700">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-4 h-full">
              <h3 className="font-semibold text-black mb-2">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['SQL Server', 'Oracle', 'MySQL'].map((s) => (
                  <span key={s} className="rounded-full border border-pink-300 bg-white px-3 py-1 text-sm text-pink-700">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-4 h-full">
              <h3 className="font-semibold text-black mb-2">AI & APIs</h3>
              <div className="flex flex-wrap gap-2">
                {['Whisper', 'Gemini (semantic API)', 'OpenAI', 'Vosk'].map((s) => (
                  <span key={s} className="rounded-full border border-pink-300 bg-white px-3 py-1 text-sm text-pink-700">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-4 h-full">
              <h3 className="font-semibold text-black mb-2">Tools & Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'CI/CD', 'Agile / Scrum', 'Jira', 'GitHub Actions'].map((s) => (
                  <span key={s} className="rounded-full border border-pink-300 bg-white px-3 py-1 text-sm text-pink-700">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
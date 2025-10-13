export default function Home() {
  return (
    <section className="hero-bg grid gap-6 text-center py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-black">Hello, I’m Nisrine Bedri</h1>
      <p className="max-w-2xl mx-auto leading-7 text-gray-900/90">
        Recently graduated MIAGE engineer with hands-on experience in full‑stack development
        and artificial intelligence solutions. Eager to apply and expand technical expertise in
        a dynamic and innovative work environment.
      </p>
      <div className="flex justify-center gap-3">
        <a href="/cv.pdf" download className="px-5 py-2.5 rounded-md bg-pink-600 text-white hover:bg-pink-700 shadow-sm">Download CV</a>
        <a href="/projects" className="px-5 py-2.5 rounded-md border border-pink-300 text-pink-700 bg-white hover:bg-pink-50">View Projects</a>
      </div>
    </section>
  )
}


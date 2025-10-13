export default function Contact() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-gray-700 mt-2">Send me a message or reach me on social media.</p>
        <ul className="mt-4 space-y-2 text-blue-600">
          <li><a href="mailto:you@example.com" className="hover:underline">you@example.com</a></li>
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
          <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
        </ul>
      </div>

      <form className="space-y-3 bg-white p-4 rounded-lg border" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-1 w-full rounded border p-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded border p-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="mt-1 w-full rounded border p-2" rows="4" placeholder="How can I help?" />
        </div>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Send</button>
      </form>
    </section>
  )
}
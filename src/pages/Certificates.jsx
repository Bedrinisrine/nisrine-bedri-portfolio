import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Certificates</h1>
      <p className="text-gray-700">Here are some certificates I earned.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.length === 0 && (
          <div className="card p-4 text-gray-600">No certificates yet. Send me the list to add them.</div>
        )}
        {certificates.map((c) => (
          <article key={c.file} className="card flex items-center justify-between p-4">
            <h2 className="font-medium pr-4">{c.title}</h2>
            <a className="text-blue-600 hover:underline" href={`/certificates/${c.file}`} target="_blank" rel="noreferrer">Open</a>
          </article>
        ))}
      </div>
    </section>
  )
}
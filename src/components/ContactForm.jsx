import { useState, useMemo, useCallback } from 'react'
import { CONTACT_EMAIL, whatsappUrlWithText } from '../constants/contact'

const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorDetail, setErrorDetail] = useState('')

  const whatsappHref = useMemo(() => {
    const body = `Hi Nisrine,\n\nI'm ${name || '[your name]'} (${email || 'email'}).\n\n${message || '[your message]'}\n`
    return whatsappUrlWithText(body)
  }, [name, email, message])

  /** Outside <form> + sync handler — avoids Chrome blocking mailto: inside form / SPA */
  const openMailto = useCallback(() => {
    const subject = encodeURIComponent(`Portfolio: message from ${name || 'visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.assign(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`)
  }, [name, email, message])

  const openWhatsApp = useCallback(() => {
    window.open(whatsappHref, '_blank', 'noopener,noreferrer')
  }, [whatsappHref])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorDetail('')
    if (!WEB3_KEY) return
    setStatus('submitting')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3_KEY,
          subject: `[Portfolio] Message from ${name}`,
          name,
          email,
          message,
          from_name: name,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
        setErrorDetail(data.message || 'Something went wrong. Try WhatsApp or email.')
      }
    } catch {
      setStatus('error')
      setErrorDetail('Network error. Try WhatsApp or email.')
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
      <p className="mt-2 text-sm text-slate-600">
        Write your message, then send it with WhatsApp or your email app.
        {WEB3_KEY && (
          <>
            {' '}
            You can also use <span className="font-medium text-slate-800">Send by email</span> below.
          </>
        )}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1.5 w-full resize-y rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30"
            placeholder="Your message…"
          />
        </div>

        {status === 'success' && (
          <p className="rounded-xl border border-emerald-200/90 bg-emerald-50 px-4 py-3 text-sm text-emerald-900" role="status">
            Thanks — your message was sent. I&apos;ll reply soon.
          </p>
        )}
        {status === 'error' && (
          <p className="rounded-xl border border-red-200/90 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
            {errorDetail || 'Could not send. Try WhatsApp or email.'}
          </p>
        )}

        {WEB3_KEY && (
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex min-h-[44px] min-w-[160px] items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending…' : 'Send by email'}
            </button>
          </div>
        )}
      </form>

      {/* Not inside <form> — mailto:/window.open must run from a direct tap/click */}
      <div
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        role="group"
        aria-label="Send with WhatsApp or your email app"
      >
        <button
          type="button"
          onClick={openWhatsApp}
          className="inline-flex min-h-[44px] min-w-[160px] items-center justify-center rounded-xl border border-emerald-600/40 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          Open in WhatsApp
        </button>
        <button
          type="button"
          onClick={openMailto}
          className="inline-flex min-h-[44px] min-w-[160px] items-center justify-center rounded-xl border border-slate-300/90 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-rose-300 hover:bg-rose-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
        >
          Send with email app
        </button>
      </div>
    </div>
  )
}

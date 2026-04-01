/** Page / section title block — consistent hierarchy across the site */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  titleAs = 'h1',
}) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const subMargin = align === 'center' ? 'mx-auto' : ''
  const TitleTag = titleAs === 'h2' ? 'h2' : 'h1'

  return (
    <header className={`mb-10 sm:mb-14 animate-fade-up ${alignClass}`}>
      {eyebrow && (
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-eyebrow text-rose-600 mb-3">
          {eyebrow}
        </p>
      )}
      <TitleTag className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 text-balance">
        {title}
      </TitleTag>
      {subtitle && (
        <p
          className={`mt-3 text-slate-600 text-[15px] sm:text-base leading-relaxed max-w-2xl ${subMargin}`}
        >
          {subtitle}
        </p>
      )}
    </header>
  )
}

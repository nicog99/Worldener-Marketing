import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type LegalPageLayoutProps = {
  label: string
  title: string
  subtitle?: string
  highlights?: { title: string; description: string }[]
  children: ReactNode
}

export function LegalPageLayout({
  label,
  title,
  subtitle,
  highlights,
  children,
}: LegalPageLayoutProps) {
  return (
    <div>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container-main max-w-3xl text-center md:mx-auto">
          <p className="section-label mb-3">{label}</p>
          <h1 className="section-heading mb-4">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted md:text-base">{subtitle}</p>
          )}
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="border-b border-black/5 bg-white py-10">
          <div className="container-main">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h) => (
                <div key={h.title} className="card-surface p-5">
                  <h3
                    className="mb-1 text-sm font-semibold text-heading"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {h.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </section>
    </div>
  )
}

type LegalSectionProps = {
  id: string
  title: string
  content: string
}

export function LegalSectionBlock({ id, title, content }: LegalSectionProps) {
  return (
    <article id={id} className="mb-10 scroll-mt-24">
      <h2
        className="mb-4 text-xl font-semibold text-heading"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-relaxed whitespace-pre-line md:text-base">
        {content.split('\n\n').map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export function LegalToc({ sections }: { sections: { id: string; title: string }[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 rounded-[var(--radius-card)] bg-surface p-6"
    >
      <h2
        className="mb-3 text-sm font-semibold uppercase tracking-wider text-heading"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Contents
      </h2>
      <ol className="space-y-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-sm text-accent hover:underline"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function LegalCrossLinks() {
  return (
    <div className="mt-12 border-t border-black/10 pt-8">
      <p className="text-sm text-muted">
        Related:{' '}
        <Link to="/privacy-policy" className="text-accent hover:underline">
          Privacy Policy
        </Link>
        {' · '}
        <Link to="/terms-of-service" className="text-accent hover:underline">
          Terms of Service
        </Link>
        {' · '}
        <Link to="/faqs" className="text-accent hover:underline">
          FAQs
        </Link>
      </p>
    </div>
  )
}

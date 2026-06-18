import { AppStoreButtonsLight } from '@/components/layout/AppStoreButtons'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FinalCtaSection() {
  return (
    <section id="cta" className="py-16 md:py-20">
      <div className="container-main">
        <ScrollReveal direction="scale" duration={0.7}>
          <div className="grid items-center gap-10 rounded-[var(--radius-card)] bg-dark p-10 md:grid-cols-2 md:p-14 lg:p-16">
            <div>
              <p className="section-label mb-3 !text-primary">Start Your Next Chapter</p>
              <h2
                className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Plan less awkwardly. Travel more beautifully.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-footer-muted md:text-base">
                Download Worldener and discover personalized travel plans, group collaboration, and
                hidden gems — all in one beautifully designed app.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <AppStoreButtonsLight layout="column" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

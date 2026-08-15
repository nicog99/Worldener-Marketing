import { PROBLEM_ICONS } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <p className="section-label mb-3">The problem</p>
            <h2 className="section-heading mb-8">
              Planning trips is everywhere. All over the place.
            </h2>

            <div className="relative h-64 overflow-hidden rounded-card bg-white sm:h-80">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full text-accent/30"
                viewBox="0 0 400 320"
                fill="none"
                aria-hidden
              >
                <path
                  d="M60 50 C140 80, 180 120, 200 140 C230 90, 300 40, 340 50"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                <path
                  d="M50 250 C120 210, 160 180, 200 140 C250 190, 300 160, 350 170"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                <path
                  d="M50 250 C90 140, 140 80, 200 140 C220 220, 260 260, 300 280"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
              </svg>
              {PROBLEM_ICONS.map((icon) => (
                <div
                  key={icon.label}
                  className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md sm:h-16 sm:w-16 ${icon.className}`}
                >
                  <img src={icon.src} alt={icon.label} className="h-8 w-8 object-contain sm:h-9 sm:w-9" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="section-label mb-3">The solution</p>
            <h2 className="section-heading mb-6">
              Worldener brings everything together.
            </h2>
            <p className="mb-8 max-w-md text-lg leading-relaxed">
              One platform. All your trips. With your people.
            </p>
            <a
              href="#features"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-heading transition-opacity hover:opacity-90"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Discover Worldener
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

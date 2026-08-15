import { SCREENSHOTS } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-secondary py-20 md:py-28">
      <div className="container-main">
        <ScrollReveal className="mb-12 max-w-2xl">
          <p className="section-label mb-3">See it in action</p>
          <h2 className="section-heading mb-4">From idea to unforgettable in one app.</h2>
          <p className="text-base leading-relaxed md:text-lg">
            Every step of your journey, together with your people.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15}>
        <div className="overflow-x-auto pb-4">
          <div className="mx-auto flex w-max gap-4 px-5 md:gap-6 md:px-8">
            {SCREENSHOTS.map((shot) => (
              <figure key={shot.src} className="w-[180px] shrink-0 sm:w-[200px] md:w-[220px]">
                <div className="overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-sm">
                  <img
                    src={shot.src}
                    alt={`Worldener app — ${shot.label}`}
                    className="aspect-[9/16] w-full rounded-[1.35rem] object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <figcaption
                  className="mt-3 text-center text-sm font-semibold text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

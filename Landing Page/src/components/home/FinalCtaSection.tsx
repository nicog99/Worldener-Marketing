import { AppStoreButtons } from '@/components/layout/AppStoreButtons'
import { CTA_VALUE_PROPS } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FinalCtaSection() {
  return (
    <section id="cta" className="py-16 md:py-20">
      <div className="container-main">
        <ScrollReveal direction="scale" duration={0.7}>
          <div
            id="download"
            className="grid overflow-hidden rounded-[var(--radius-card)] md:grid-cols-2"
          >
            <div className="bg-dark p-10 md:p-12 lg:p-14">
              <p
                className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Why Worldener
              </p>
              <ul className="space-y-5">
                {CTA_VALUE_PROPS.map((item) => (
                  <li key={item.title} className="flex items-center gap-3 text-white">
                    <img
                      src={item.icon}
                      alt=""
                      className={`h-6 w-6 object-contain ${item.title === 'Travel experiences' ? 'invert' : ''}`}
                    />
                    <span
                      className="text-sm font-medium md:text-base"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary p-10 md:p-12 lg:p-14">
              <p className="section-label mb-3 !text-heading">Ready to travel together?</p>
              <h2
                className="mb-6 text-3xl font-bold leading-tight text-heading md:text-4xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Your next trip starts here.
              </h2>
              <AppStoreButtons variant="onYellow" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

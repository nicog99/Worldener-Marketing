import { FEATURES } from '@/lib/constants'
import { ScrollReveal, StaggerItem, StaggerReveal } from '@/components/ui/ScrollReveal'

export function FeaturesSection() {
  return (
    <section id="features" className="bg-secondary py-20 md:py-28">
      <div className="container-main">
        <ScrollReveal className="mb-12 max-w-2xl">
          <p className="section-label mb-3">Features</p>
          <h2 className="section-heading">
            A premium travel planning experience without the clutter
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <article className="border-l-2 border-primary pl-5">
                <h3
                  className="mb-2 text-lg font-semibold text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed md:text-base">{feature.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

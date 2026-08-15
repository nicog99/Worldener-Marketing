import { FEATURES } from '@/lib/constants'
import { ScrollReveal, StaggerItem, StaggerReveal } from '@/components/ui/ScrollReveal'

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="container-main">
        <ScrollReveal className="mb-12 max-w-2xl">
          <p className="section-label mb-3">Features</p>
          <h2 className="section-heading">Everything you need, in one place</h2>
        </ScrollReveal>

        <StaggerReveal
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          stagger={0.08}
        >
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <article className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-secondary">
                  <img src={feature.icon} alt="" className="h-8 w-8 object-contain" />
                </div>
                <h3
                  className="mb-2 text-lg font-semibold text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed">{feature.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

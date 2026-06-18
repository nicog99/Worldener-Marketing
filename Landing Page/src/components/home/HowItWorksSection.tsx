import { motion, useReducedMotion } from 'framer-motion'
import { HOW_IT_WORKS } from '@/lib/constants'
import { ScrollReveal, StaggerItem, StaggerReveal } from '@/components/ui/ScrollReveal'

export function HowItWorksSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="how-it-works" className="bg-secondary py-20 md:py-28">
      <div className="container-main">
        <ScrollReveal className="mb-12 max-w-2xl">
          <p className="section-label mb-3">How It Works</p>
          <h2 className="section-heading">
            Everything you need to go from idea to itinerary
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {HOW_IT_WORKS.map((item) => (
            <StaggerItem key={item.step}>
              <motion.article
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }
                }
                transition={{ duration: 0.25 }}
                className="card-surface flex h-full flex-col p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-heading"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.step}
                  </span>
                  <img src={item.icon} alt="" className="h-8 w-8 object-contain" />
                </div>
                <h3
                  className="mb-3 text-lg font-semibold text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed">{item.description}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

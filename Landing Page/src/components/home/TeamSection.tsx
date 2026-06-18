import { motion, useReducedMotion } from 'framer-motion'
import { TEAM } from '@/lib/constants'
import { ScrollReveal, StaggerItem, StaggerReveal } from '@/components/ui/ScrollReveal'

export function TeamSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="team" className="bg-white py-20 md:py-28">
      <div className="container-main">
        <ScrollReveal className="mb-12 max-w-2xl">
          <p className="section-label mb-3">Our Team</p>
          <h2 className="section-heading">
            Built by people who care about the feeling of a great trip
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <motion.article
                whileHover={prefersReducedMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.3 }}
                className="card-surface overflow-hidden"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="text-base font-bold text-heading"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {member.name}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-accent">{member.role}</p>
                  <p className="text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

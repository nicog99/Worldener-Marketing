import { motion, useReducedMotion } from 'framer-motion'
import { ABOUT_IMAGES } from '@/lib/constants'
import { ScrollReveal, StaggerItem, StaggerReveal } from '@/components/ui/ScrollReveal'
import { defaultTransition } from '@/lib/motion'

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-28">
      <motion.img
        src="/images/about_tree1.png"
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ ...defaultTransition, duration: 0.8 }}
        className="pointer-events-none absolute left-0 top-10 hidden w-32 md:block lg:w-44"
      />
      <motion.img
        src="/images/about_tree2.png"
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ ...defaultTransition, duration: 0.8 }}
        className="pointer-events-none absolute bottom-0 right-0 hidden w-36 md:block lg:w-48"
      />

      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <StaggerReveal className="grid grid-cols-2 gap-3 md:gap-4" stagger={0.08}>
            {ABOUT_IMAGES.map((src, i) => (
              <StaggerItem
                key={src}
                className={`overflow-hidden rounded-2xl ${i === 1 || i === 4 ? 'mt-6' : ''}`}
              >
                <motion.figure
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full overflow-hidden"
                >
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </motion.figure>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <ScrollReveal direction="right">
            <p className="section-label mb-3">About Us</p>
            <h2 className="section-heading mb-6">What is Worldener?</h2>
            <p className="mb-6 leading-relaxed">
              Welcome, Worldener — plan your next trip with us whatever fits you the best. Book
              trips that match your interests completely. Discover not only the obvious but also
              the hidden gems of each destination through personalized plans, swiping, and
              interactive group chats.
            </p>

            <StaggerReveal className="space-y-5" stagger={0.12}>
              {[
                {
                  title: 'Introduction',
                  text: 'In the era of personalized experiences, travel planning has evolved beyond standard itineraries. As a Worldener, you get an innovative platform to create personalized plans based on your interests.',
                },
                {
                  title: 'Background and Mission',
                  text: 'Our travel app is designed to revolutionize trip planning with user-centric features that create an immersive travel planning experience.',
                },
                {
                  title: 'Key Features',
                  text: 'We stand out with personalized plans, swipe functionality for easy planning, and interactive group chats — all in an intuitive, user-friendly interface accessible to every type of traveler.',
                },
              ].map((block) => (
                <StaggerItem key={block.title}>
                  <h3
                    className="mb-2 font-semibold text-heading"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {block.title}
                  </h3>
                  <p className="text-sm leading-relaxed md:text-base">{block.text}</p>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

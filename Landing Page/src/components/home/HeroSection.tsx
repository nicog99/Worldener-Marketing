import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AppStoreButtons } from '@/components/layout/AppStoreButtons'
import { STATS } from '@/lib/constants'
import { defaultTransition } from '@/lib/motion'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/images/banner_bg.png)',
      }}
    >
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
            style={prefersReducedMotion ? undefined : { opacity: contentOpacity }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.1 }}
              className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Plan trips that fit you
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.15 }}
              className="mb-2 text-4xl font-bold italic text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              &ldquo;Worldener&rdquo;
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...defaultTransition, delay: 0.25 }}
              className="mb-1 text-sm uppercase tracking-widest text-white/70"
            >
              noun [C/U]
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="mb-8 max-w-lg text-lg italic leading-relaxed text-white/90"
            >
              An adventurous person who loves traveling and discovering new things. Be a Worldener
              and discover the beautiful sights and secrets our planet has to offer.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.4 }}
            >
              <AppStoreButtons variant="dark" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.5 }}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-8"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...defaultTransition, delay: 0.55 + i * 0.08 }}
                >
                  <p
                    className="text-xl font-bold text-primary md:text-2xl"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/70 md:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            style={
              prefersReducedMotion
                ? undefined
                : { y: phoneY, scale: phoneScale }
            }
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/images/app.jpeg"
              alt="Worldener app on smartphone"
              className="max-h-[520px] w-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary" />
    </section>
  )
}

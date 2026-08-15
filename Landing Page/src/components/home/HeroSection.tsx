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

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <img src="/icons/star.png" alt="" className="h-3.5 w-3.5 invert" />
              The Social Operating System for Travel
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.15 }}
              className="mb-5 text-4xl font-bold leading-tight text-heading md:text-5xl lg:text-[3.25rem]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Discover. Plan. Book. Remember.{' '}
              <span className="text-accent">Together.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="mb-8 max-w-lg text-lg leading-relaxed"
            >
              Worldener brings everything you need to plan and experience unforgettable trips with
              your people — all in one app.
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
              className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-heading/10 pt-8"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...defaultTransition, delay: 0.55 + i * 0.08 }}
                >
                  <p
                    className="text-xl font-bold text-accent md:text-2xl"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted md:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            style={prefersReducedMotion ? undefined : { y: phoneY, scale: phoneScale }}
            className="relative mx-auto flex min-h-[480px] w-full max-w-lg items-center justify-center lg:max-w-none lg:justify-end"
          >
            <div
              className="absolute right-0 top-8 hidden h-[70%] w-[72%] overflow-hidden rounded-[2rem] md:block"
              aria-hidden
            >
              <img
                src="/images/banner_bg.png"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-white" />
            </div>

            <div className="relative z-10">
              <img
                src="/images/app.jpeg"
                alt="Worldener app on smartphone"
                className="relative z-10 max-h-[520px] w-auto rounded-[2rem] shadow-2xl"
              />

              <div className="absolute -left-4 top-16 z-20 hidden w-52 rounded-2xl bg-white p-3 shadow-lg sm:block lg:-left-16">
                <p
                  className="mb-2 text-xs font-semibold text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Where should we go next?
                </p>
                <ul className="space-y-1.5 text-xs text-body">
                  {[
                    { city: 'Barcelona', pct: '32%' },
                    { city: 'Santorini', pct: '21%' },
                    { city: 'Bali', pct: '47%' },
                  ].map((row) => (
                    <li key={row.city} className="flex items-center justify-between gap-2">
                      <span>{row.city}</span>
                      <span className="font-semibold text-accent">{row.pct}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute -right-2 top-8 z-20 hidden items-center gap-2 rounded-full bg-white px-3 py-2 shadow-lg sm:flex lg:-right-8">
                <img src="/icons/remember.png" alt="" className="h-4 w-4" />
                <span className="text-xs font-medium text-heading">Anna voted Bali.</span>
              </div>

              <div className="absolute -right-4 bottom-28 z-20 hidden w-52 rounded-2xl bg-white px-3 py-2.5 shadow-lg sm:block lg:-right-10">
                <p className="text-xs font-medium text-heading">Timmy booked Beach Club Canggu.</p>
              </div>

              <div className="absolute -left-2 bottom-10 z-20 hidden w-48 rounded-2xl bg-white p-3 shadow-lg sm:block lg:-left-12">
                <p
                  className="mb-2 text-xs font-semibold text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Trip saved to Memories
                </p>
                <div className="flex -space-x-2">
                  {['/images/about_img5.jpeg', '/images/about_img6.jpeg', '/images/about_img1.png'].map(
                    (src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="h-8 w-8 rounded-md object-cover ring-2 ring-white"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

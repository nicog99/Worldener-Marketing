import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

import { HOME_SECTIONS } from '@/lib/constants'

export function SectionScrollTracker() {
  const [activeId, setActiveId] = useState<string>(HOME_SECTIONS[0].id)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  const fillHeight = useTransform(
    prefersReducedMotion ? scrollYProgress : smoothProgress,
    [0, 1],
    ['0%', '100%'],
  )

  useEffect(() => {
    const sections = HOME_SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="relative flex flex-col items-end gap-5">
        {/* Vertical progress rail */}
        <div
          aria-hidden
          className="absolute right-[5px] top-2 bottom-2 w-[2px] rounded-full bg-heading/10"
        >
          <motion.div
            className="w-full origin-top rounded-full bg-primary"
            style={{ height: fillHeight }}
          />
        </div>

        {HOME_SECTIONS.map(({ id, label }) => {
          const isActive = activeId === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              aria-label={`Go to ${label}`}
              aria-current={isActive ? 'true' : undefined}
              className="group relative flex items-center gap-3"
            >
              <span
                className={cn(
                  'pointer-events-none rounded-md bg-dark px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100',
                  isActive && 'opacity-100',
                )}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {label}
              </span>
              <span
                className={cn(
                  'relative z-10 block h-3 w-3 rounded-full border-2 transition-all duration-300',
                  isActive
                    ? 'scale-125 border-primary bg-primary shadow-[0_0_0_4px_rgba(239,202,8,0.25)]'
                    : 'border-heading/25 bg-white group-hover:border-primary group-hover:bg-primary/30',
                )}
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}

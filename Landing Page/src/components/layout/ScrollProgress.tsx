import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-primary"
      style={{
        scaleX: prefersReducedMotion ? scrollYProgress : scaleX,
      }}
    />
  )
}

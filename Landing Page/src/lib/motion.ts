import type { Transition, Variants } from 'framer-motion'

export const easeOut = [0.22, 1, 0.36, 1] as const

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: easeOut,
}

export const defaultViewport = {
  once: true,
  margin: '-60px',
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

export const directionVariants = {
  up: fadeUp,
  in: fadeIn,
  left: slideInLeft,
  right: slideInRight,
  scale: scaleIn,
} as const

export type RevealDirection = keyof typeof directionVariants

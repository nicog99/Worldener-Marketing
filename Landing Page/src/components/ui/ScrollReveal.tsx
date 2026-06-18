import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  defaultTransition,
  defaultViewport,
  directionVariants,
  type RevealDirection,
} from '@/lib/motion'

type ScrollRevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  direction?: RevealDirection
  delay?: number
  duration?: number
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration,
  className,
  ...props
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={directionVariants[direction]}
      transition={{
        ...defaultTransition,
        delay,
        ...(duration !== undefined ? { duration } : {}),
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerRevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  stagger?: number
}

export function StaggerReveal({
  children,
  stagger = 0.1,
  className,
  ...props
}: StaggerRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = HTMLMotionProps<'div'> & {
  children: ReactNode
}

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: defaultTransition,
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

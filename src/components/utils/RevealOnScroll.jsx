import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'

const RevealOnScroll = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.2,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount, margin: "-50px" })

  const directions = useMemo(() => ({
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  }), [])

  const variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Simpler easing for better performance
      },
    },
  }), [direction, duration, delay, directions])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      style={{ willChange: isInView ? 'auto' : 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll

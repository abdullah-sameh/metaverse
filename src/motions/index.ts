export const imgVarients = (direction: 'left' | 'right') => ({
  hidden: { rotate: 120, x: direction === 'left' ? '-100%' : '100%' },
  visible: {
    rotate: 0,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
})

export const fadeX = (x: number | string = 60) => ({
  hidden: { opacity: 0, x: x },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
})
export const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
}

export const fadeUp = (y: number = 60) => ({
  hidden: { opacity: 0, y: y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 1,
      ease: 'easeOut',
    },
  },
})

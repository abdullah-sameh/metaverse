import cover from '../assets/cover.png'
import stamp from '../assets/stamp.png'
import { motion } from 'framer-motion'

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
      staggerDirection: -1
    }
  }
}

const imgVariant = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 1, type: 'tween', ease: 'easeOut', } },
}

const headerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const headerChildVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
    }
  }
}

export default function Landing() {
  return (
    <motion.div
      className="container pb-[128px]"
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
    >
      <motion.header
        variants={headerVariant}
        className="relative z-50 text-center pt-20 text-[44px] sm:text-[100px] xl:text-[144px] font-bold leading-none"
      >
        <motion.h1 variants={headerChildVariant}>METAVERSE</motion.h1>
        <motion.h1 variants={headerChildVariant}>MA<span className="D" />NESS</motion.h1>
      </motion.header>
      <main>
        <motion.div
          variants={imgVariant}
          className="relative lg:-mt-3 img ml-10 md:ml-0"
        >
          <img src={cover} alt="" className='w-full h-[300px] lg:h-[500px] object-cover rounded-tl-[140px]' />
          <img src={stamp} alt="" className='h-[100px] lg:h-[150px] absolute right-[30px] bottom-[-50px] lg:bottom-[-75px]' />
        </motion.div>
      </main>
    </motion.div>)
}

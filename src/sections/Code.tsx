import planet9 from '../assets/planet-09.webp'
import smallPlanet9 from '../assets/small-imgs/planet-09.png'
import stamp from '../assets/stamp.webp'
import { motion } from 'framer-motion'
import LazyLoadImg from '../components/LazyLoadImg'

const fadeRight = {
  hidden: { opacity: 0, x: '-100%' },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
}

const pop = {
  hidden: { opacity: 0, scale: 0, x: '-50%' },
  visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } },
}

export default function Code() {
  return (
    <div className='container relative flex gap-8 py-[64px] flex-col lg:flex-row'>
      <div className='awsomeColor5'></div>
      <motion.div
        variants={fadeRight}
        initial='hidden'
        whileInView='visible'
        className='flex flex-col justify-end lg:max-w-[370px] border-[#6A6A6A] border-[1px] rounded-3xl sm:p-8 p-4'
      >
        <header>
          <h3 className='sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] font-bold'>
            Samantha
          </h3>
          <p className='text-[12px] sm:text-[18px]'>Founder Metaverus</p>
        </header>
        <p className='mt-[24px] sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px]'>
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeLeft}
        initial='hidden'
        whileInView='visible'
        className='relative'
      >
        <LazyLoadImg
          imgSrc={planet9}
          loadImg={smallPlanet9}
          stylingImg='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
        />
        <motion.img
          variants={pop}
          initial='hidden'
          whileInView='visible'
          src={stamp}
          alt=''
          className='hidden lg:block absolute left-0 top-5 -translate-x-1/2 w-[150px] h-[150px]'
        />
      </motion.div>
    </div>
  )
}

import whatsnew from '../assets/whats-new.png'
import headset from '../assets/headset.svg'
import vrpano from '../assets/vrpano.svg'
import { motion } from 'framer-motion'
import Header from '../components/Header'

const imgVarients = {
  hidden: { rotate: 120, x: '100%' },
  visible: {
    rotate: 0,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
}

const FadeLeft = {
  hidden: { opacity: 0, x: '-100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 1,
      ease: 'easeOut',
    },
  },
}

export default function New() {
  return (
    <div className='relative container my-[64px] flex flex-col sm:flex-row gap-16'>
      <motion.div
        variants={FadeLeft}
        initial='hidden'
        whileInView='visible'
        className='flex flex-1 flex-col'
      >
        <header>
          <Header header="What's new" text="What's new about Metaversus?" />
        </header>
        <main className='flex flex-wrap justify-between gap-5'>
          <div className='flex-1 max-w-[250px] min-w-[210px]'>
            <div className='mb-[26px] bg-[#323F5D] rounded-3xl w-[70px] h-[70px] flex justify-center items-center'>
              <img src={vrpano} alt='' className='w-1/2 h-1/2 object-contain' />
            </div>
            <h5 className='text-[26px] font-bold mb-[16px]'>
              Title A new world
            </h5>
            <p className='text-[18px] text-[#c7c7c7] leading-[32.4px]'>
              we have the latest update with new world for you to try never mind
            </p>
          </div>

          <div className='flex-1 max-w-[250px] flex flex-col min-w-[210px]'>
            <div className='mb-[26px] bg-[#323F5D] rounded-3xl w-[70px] h-[70px] flex justify-center items-center'>
              <img
                src={headset}
                alt=''
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <h5 className='text-[26px] font-bold mb-[16px]'>
              Title More realistic
            </h5>
            <p className='text-[18px] text-[#c7c7c7] leading-[32.4px]'>
              In the latest update, your eyes are narrow, making the world more
              realistic than ever
            </p>
          </div>
        </main>
      </motion.div>

      <motion.div
        variants={imgVarients}
        initial='hidden'
        whileInView='visible'
        className='flex-1 flex justify-center items-center'
      >
        <img src={whatsnew} alt='' />
      </motion.div>
    </div>
  )
}

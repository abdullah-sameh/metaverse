import started from '../assets/get-started.webp'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { imgVarients } from '../motions'

const FadeRight = {
  hidden: { opacity: 0, x: '100%' },
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

export default function Started() {
  const contents = [
    'Find a world that suits you and you want to enter',
    'Enter the world by reading basmalah to be safe',
    'No need to beat around the bush, just stay on the gas and have fun',
  ]

  return (
    <div className='relative container my-[64px] flex lg:flex-row flex-col gap-8'>
      <div className='awsomeColor3'></div>
      <motion.div
        variants={imgVarients('left')}
        initial='hidden'
        whileInView='visible'
        className='left flex flex-[1] justify-center items-center'
      >
        <img
          src={started}
          alt=''
          className='max-w-3xl h-[90%] w-[90%] object-contain'
        />
      </motion.div>

      <motion.div
        variants={FadeRight}
        initial='hidden'
        whileInView='visible'
        className='right grid content-center flex-[0.75]'
      >
        <Header
          header='How Metaverus Works'
          text='Get started with just a few clicks'
        />
        <div className='grid gap-8'>
          {[...Array(3).keys()].map(i => (
            <div key={i} className='flex gap-8 items-center'>
              <h4 className='rounded-3xl text-center text-[20px] w-[70px] h-[70px] p-5 bg-[#323F5D]'>
                0{1 + i}
              </h4>
              <p className='text-2xl max-w-md leading-[32.4px] text-[#c7c7c7]'>
                {contents[i]}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

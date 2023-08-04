import { motion } from 'framer-motion'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Header from '../components/Header'

import headset from '../assets/headset.svg'
import planet1 from '../assets/planet-01.png'
import planet2 from '../assets/planet-02.png'
import planet3 from '../assets/planet-03.png'
import planet4 from '../assets/planet-04.png'
import planet5 from '../assets/planet-05.png'
import { fadeUp } from '../content'

const imgContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: 'spring',
      ease: 'easeOut',
    },
  },
}

const titleVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
}

const getImg = (i: number) => {
  if (i === 0) return planet1
  if (i === 1) return planet2
  if (i === 2) return planet3
  if (i === 3) return planet4
  if (i === 4) return planet5
}

const headings = [
  'The Hogwarts',
  'The Upside Down',
  'Kadirojo Permai',
  'Paradise Island',
  'Hawkins Labs',
]

export default function World() {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className='container py-[64px]'>
      <motion.header
        variants={fadeUp(20)}
        initial='hidden'
        whileInView='visible'
        className='text-center'
      >
        <Header
          header='The World'
          text='Choose the world you want to explore'
          center={true}
        />
      </motion.header>

      <motion.div
        variants={imgContainer}
        initial='hidden'
        whileInView='visible'
        className='flex gap-6 flex-col lg:flex-row'
      >
        {[...Array(5).keys()].map(i => {
          return (
            <motion.div
              variants={fadeInLeft}
              key={i}
              className={twMerge(
                `lg:h-[500px] h-[75px] relative cursor-pointer rounded-3xl overflow-hidden duration-75 lg:basis-1/6`,
                tabIndex === i ? 'lg:basis-1/3 h-[200px]' : ''
              )}
              onClick={() => setTabIndex(i)}
            >
              <img
                className='h-full w-full object-cover'
                src={getImg(i)}
                alt=''
              />

              <motion.div
                variants={titleVariants}
                initial='hidden'
                whileInView='visible'
                className={twMerge(
                  'absolute lg:bottom-28 bottom-0 left-0 z-50 duration-75 lg:-rotate-90',
                  tabIndex === i
                    ? 'lg:rotate-0 h-[100%] lg:h-auto lg:left-0 lg:bottom-0 lg:p-7 p-3 bg-black bg-opacity-70 w-full'
                    : 'bottom-4 left-4'
                )}
              >
                {tabIndex === i && (
                  <header className='grid gap-4 mb-8'>
                    <div className='headset bg-base-content backdrop-blur-sm bg-opacity-25 rounded-3xl border-gray-400 border w-fit p-5'>
                      <img src={headset} alt='' />
                    </div>
                    <p>ENTER METAVERSE</p>
                  </header>
                )}

                <motion.p className='text-3xl font-bold'>
                  {headings[i]}
                </motion.p>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

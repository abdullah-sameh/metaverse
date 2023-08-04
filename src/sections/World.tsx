import Title from '../components/Title'
import { motion } from 'framer-motion'
import planet1 from '../assets/planet-01.png'
import planet2 from '../assets/planet-02.png'
import planet3 from '../assets/planet-03.png'
import planet4 from '../assets/planet-04.png'
import planet5 from '../assets/planet-05.png'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import headset from '../assets/headset.svg'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

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

const titleVarients = {
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
      <Title text='The World' />
      <motion.h3
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        className='text-[64px] font-black text-center mb-12'
      >
        Choose the world you want <br /> to explore
      </motion.h3>
      <motion.div
        variants={imgContainer}
        initial='hidden'
        whileInView='visible'
        className='flex gap-6'
      >
        {[...Array(5).keys()].map(i => {
          return (
            <motion.div
              variants={fadeInLeft}
              key={i}
              className={twMerge(
                `h-[500px] relative cursor-pointer rounded-3xl overflow-hidden duration-75 basis-1/6`,
                tabIndex === i ? 'basis-1/3' : ''
              )}
              onClick={() => setTabIndex(i)}
            >
              <img
                className='h-full w-full object-cover'
                src={getImg(i)}
                alt=''
              />

              <motion.div
                variants={titleVarients}
                initial='hidden'
                whileInView='visible'
                className={twMerge(
                  'absolute bottom-28 z-50 duration-75 -rotate-90',
                  tabIndex === i
                    ? 'rotate-0 left-0 bottom-0 p-7 bg-black bg-opacity-70 w-full'
                    : ''
                )}
              >
                {tabIndex === i && (
                  <header className='grid gap-4 mb-8'>
                    <div className='headset bg-base-content backdrop-blur-sm bg-opacity-25 rounded-3xl border-gray-400 border w-fit p-5'>
                      <img src={headset} alt='' />
                    </div>
                    <p className=''>ENTER METAVERSE</p>
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

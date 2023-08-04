import Header from '../components/Header'
import map from '../assets/map.png'
import person1 from '../assets/people-01.png'
import person2 from '../assets/people-02.png'
import person3 from '../assets/people-03.png'
import { motion } from 'framer-motion'
import { containerVariant, fadeUp } from '../content'

export default function People() {
  return (
    <motion.div
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      className='container py-[64px]'
    >
      <motion.header variants={fadeUp()} className='text-center'>
        <Header
          header='People on the World'
          text='Track friends around you and invite them to play together in the same world'
          center={true}
        />
      </motion.header>
      <motion.div variants={fadeUp()} className='relative'>
        <img src={map} alt='' className='object-contain' />
        <div className='absolute left-[5%] top-[10%] w-[70px] h-[70px] overflow-hidden rounded-full p-2 bg-[#5D6680]'>
          <img src={person1} alt='' />
        </div>
        <div className='absolute left-[50%] top-[50%] -translate-x-1/2 w-[70px] h-[70px] overflow-hidden rounded-full p-2 bg-[#5D6680]'>
          <img src={person2} alt='' />
        </div>
        <div className='absolute right-[5%] bottom-[15%] w-[70px] h-[70px] overflow-hidden rounded-full p-2 bg-[#5D6680]'>
          <img src={person3} alt='' />
        </div>
      </motion.div>
    </motion.div>
  )
}

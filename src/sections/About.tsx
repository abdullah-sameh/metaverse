
import { motion } from 'framer-motion'
import Title from '../components/Title'
import arrowDown from '../assets/arrow-down.svg'

const fadeTop = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'twen',
      dely: '0.2',
      duration: 1,
      ease: 'easeOut',
    }
  }
}

export default function About() {
  return (
    <div className="container my-[64px]">
      <Title text='About Metaverus' />
      <motion.div variants={fadeTop} className='relative' initial='hidden' whileInView='visible'>
        <div className="awsomeColor"></div>
        <div className="awsomeColor2"></div>
        <p className="about-section text-center p-5 text-2xl leading-normal">
          <b>Metaverse</b> is a new thing in the future,
          where you can enjoy the virtual world by feeling like it's really real,
          you can feel what you feel in this metaverse world,
          because this is really the <b>madness of the metaverse</b> of today,
          using only <b>VR</b> devices you can easily <b>explore</b> the metaverse world you want,
          turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down
        </p>
        <img src={arrowDown} alt="" className='m-auto mt-4' />
      </motion.div>
    </div>)
}

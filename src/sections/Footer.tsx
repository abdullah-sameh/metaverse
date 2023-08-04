import { motion } from 'framer-motion'
import headset from '../assets/headset.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import { fadeUp } from '../content'

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp()}
      initial='hidden'
      whileInView='visible'
      className='container relative flex md:flex-col flex-row gap-10'
    >
      <div className='awsomeColor6'></div>
      <section className='flex justify-between items-center flex-wrap gap-4'>
        <h4 className='font-bold md:text-[64px] text-[44px]'>
          Enter the Metaverse
        </h4>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className='flex gap-3 bg-[#24618B] h-fit px-5 py-3 rounded-3xl'
        >
          <img src={headset} alt='' />
          Enter Metaverse
        </motion.button>
      </section>
      <section className='flex justify-between pt-[50px] pb-[30px] border-t-[1px]'>
        <h4 className='text-[24px] font-bold'>METAVERUS</h4>
        <p className='text-[14px] font-[#c7c7c7]'>
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
        <div className='flex gap-4'>
          <img src={twitter} alt='' />
          <img src={linkedin} alt='' />
          <img src={instagram} alt='' />
          <img src={facebook} alt='' />
        </div>
      </section>
    </motion.footer>
  )
}

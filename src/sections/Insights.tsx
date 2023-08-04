import Header from '../components/Header'
import { containerVariant, fadeUp, insights } from '../content'
import arrow from '../assets/arrow.svg'
import { motion } from 'framer-motion'

export default function Insights() {
  return (
    <motion.div
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      className='container my-[64px] relative'
    >
      <div className='awsomeColor4'></div>
      <motion.header variants={fadeUp()} className='text-center'>
        <Header header='Insight' text='Insight about metaverse' center={true} />
      </motion.header>
      <div className='flex flex-col gap-8'>
        {insights.map((insight, i) => (
          <motion.div
            variants={fadeUp(120)}
            key={i}
            className='flex gap-4 sm:flex-row flex-col'
          >
            <header>
              <img
                src={insight.imgUrl}
                alt=''
                className='w-[270px] h-[250px] rounded-3xl object-cover'
              />
            </header>
            <main className='flex flex-1 justify-between items-center'>
              <section className='max-w-[650px] md:ml-[62px]'>
                <h3 className='lg:text-[42px] text-[26px]'>{insight.title}</h3>
                <p className='lg:text-[20px] text-[14px] text-[#c7c7c7] mt-[16px]'>
                  {insight.subtitle}
                </p>
              </section>
              <motion.section
                whileHover={{
                  rotate: 30,
                }}
                whileTap={{
                  scale: 0.8,
                }}
                className='hidden md:flex cursor-pointer rounded-full border w-[100px] h-[100px] justify-center items-center'
              >
                <img src={arrow} alt='' className='select-none' />
              </motion.section>
            </main>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'

const TextVarient = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
const spanVarient = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
export default function Title({ text }: { text: string }) {
  return (
    <motion.h1
      variants={TextVarient}
      initial='hidden'
      whileInView='visible'
      className='w-fit m-auto relative before:absolute before:w-1 before:h-full before:bg-[#c7c7c7] before:-left-2 text-[#c7c7c7]'
    >
      {text.split('').map((letter, i) => (
        <motion.span variants={spanVarient} key={i}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

import menu from '../assets/menu.svg'
import search from '../assets/search.svg'
import { motion } from 'framer-motion'

const navVariat = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    }
  }
}

export default function Nav() {
  return (
    <div className="container">
      <motion.nav
        variants={navVariat}
        initial='hidden'
        whileInView='visible'
        className="flex justify-between items-center py-5 px-4 nav"
      >
        <div className="left"><img src={search} alt="" /></div>
        <div className="center text-2xl font-extrabold">METAVERSUS</div>
        <div className="right"><img src={menu} alt="" /></div>
      </motion.nav>
    </div >)
}

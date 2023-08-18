import { motion } from 'framer-motion'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const navVariat = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
}

export default function Nav() {
  const [opened, setOpened] = useState(false)

  return (
    <div className='container'>
      <motion.nav
        variants={navVariat}
        initial='hidden'
        whileInView='visible'
        className='flex justify-between items-center py-5 px-4 nav'
      >
        <div className='text-2xl font-extrabold'>METAVERSUS</div>
        <div className='open-nav'>
          <label className={twMerge('btn btn-circle swap swap-rotate z-50')}>
            <input
              type='checkbox'
              checked={opened}
              onChange={() => {
                setOpened(!opened)
              }}
            />

            <svg
              className='swap-off fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>

            <svg
              className='swap-on fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
            </svg>
          </label>

          <div
            className={twMerge(
              'absolute h-[100dvh] inset-0 z-40 nav-content bg-black',
              opened ? 'opened' : ''
            )}
          >
            <div className='w-fit m-auto h-full flex gap-2 flex-col justify-center px-4'>
              <h2 className='text-4xl text-center'>
                Developed By <br /> Abdullah Sameh
              </h2>
              <span className='text-xl mt-4 underline'>Connect me:</span>
              <span>
                GitHub Account:{' '}
                <a
                  className='link'
                  target='_blank'
                  href='https://github.com/abdullah-sameh/'
                >
                  https://github.com/abdullah-sameh
                </a>
              </span>
              <span>
                Whatsapp:{' '}
                <a
                  className='link'
                  target='_blank'
                  href='https://wa.me/+201026227264'
                >
                  +201026227264
                </a>
              </span>{' '}
              <span>
                LinkedIn Account:{' '}
                <a
                  className='link'
                  target='_blank'
                  href='https://www.linkedin.com/in/abdullahsameh/'
                >
                  https://www.linkedin.com/in/abdullahsameh/
                </a>
              </span>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

import React, { useState } from 'react'
import { motion } from "framer-motion";
import book from '../../assets/images/book.png'
import h from '../../assets/images/h.png'



export default function Book() {
  const [isFill, setIsFill] = useState(false)

  const handleFill = () => {
    setIsFill(prev => !prev)
  }

  return (
    <>

      <div className='h-32'></div>
      <section className='mx-auto px-12 md:px-[120px]  overflow-hidden pb-8'>
        <motion.h2
          initial={{ scale: .5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: .5 }}
          className="will-change-transform  will-change-opacity text-center font-bold font-[quando] uppercase text-mowana text-4xl mb-8">books</motion.h2>

        <div className='flex flex-col lg:flex-row items-center gap-y-7 md:w-7/12 mx-auto'>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: .2, x: { type: 'spring', stiffnes: 60 },
              opacity: { duration: 1 },
              ease: 'easeIn',
              duration: 1,
            }}
            className='lg:w-7/12 will-change-transform  will-change-opacity'>
            <img src={book} className='w-[350px] !h-[300px] lg:!h-[400px] object-cover rounded-4xl' alt="" />
          </motion.div>


          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: .2, x: { type: 'spring', stiffnes: 60 },
              opacity: { duration: 1 },
              ease: 'easeIn',
              duration: 1,
            }}
            className='will-change-transform  will-change-opacity lg:w-5/12 flex flex-col font-[poppins] px-6'>
            <h2 className='font-semibold text-2xl'>Over view</h2>
            <h3 className='capitalize mb-2 !text-[18px]'>front view</h3>
            <p>Cozy modern room with comfort and essentials.</p>
            <div className='flex justify-between mt-6 items-center'>
              <span className='text-2xl'>500<span className='!text-[15px] '>EGP</span> </span>
              <i onClick={handleFill} className={`${isFill ? 'fa-solid' : 'fa-regular'} fa-heart text-4xl text-red-600 cursor-pointer`}></i>
              {/* <img src={h} className='cursor-pointer' alt="" /> */}
            </div>
            <span className={` text-center px-9 py-3  text-mowana !border !border-mowana rounded-2xl spa hover:text-white duration-200 cursor-pointer mt-4 w-11/12 mx-auto`} >See More</span>

          </motion.div>


        </div>
      </section>







    </>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import r1 from '../../assets/images/r1.png'
import r2 from '../../assets/images/r2.png'
import r3 from '../../assets/images/r3.png'
import r4 from '../../assets/images/r4.png'





export default function Rooms() {



  return (<>

    <div className='h-32'></div>

    <section className='md:px-[120px] overflow-hidden  mx-auto px-12 pb-8  '>
      <motion.h2
        initial={{ opacity: 0, scale: .5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .5 }}
        className='text-center text-4xl text-mowana font-bold font-[Quando]  mb-10 uppercase'>rooms</motion.h2>

      <div className='flex flex-col lg:flex-row gap-7'>

        <motion.div
          initial={{ opacity: 0, scale: .5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          className='lg:w-3/12 flex  flex-col font-[poppins] '>
          <img src={r1} className='!h-[350px] rounded-4xl mb-3 object-cover ' loading='lazy' alt="" />
          <h3 className='px-7 capitalize  !text-[19px]'>over view</h3>
          <div className='px-7 flex justify-between items-center gap-1 mt-3 '>
            <p>Cozy modern room with comfort and essentials.</p>
            <span>300k</span>
          </div>
          <span className='text-center px-9 py-3  text-mowana !border !border-mowana rounded-2xl spa hover:text-white duration-200 cursor-pointer mt-3 w-10/12 mx-auto  ' >See More</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          className='lg:w-3/12 flex  flex-col font-[poppins] '>
          <img src={r2} className='!h-[350px] rounded-4xl mb-3 object-cover' loading='lazy' alt="" />
          <h3 className='px-7 capitalize  !text-[19px]'>mountain view</h3>
          <div className='px-7 flex justify-between items-center gap-1 mt-3 '>
            <p>Cozy modern room with stunning mountain view.</p>
            <span>300k</span>
          </div>
          <span className='text-center px-9 py-3  text-mowana !border !border-mowana rounded-2xl spa hover:text-white duration-200 cursor-pointer mt-3 w-10/12 mx-auto  ' >See More</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          className='lg:w-3/12 flex  flex-col font-[poppins] '>
          <img src={r3} className='!h-[350px] rounded-4xl mb-3 object-cover' loading='lazy' alt="" />
          <h3 className='px-7 capitalize  !text-[19px]'>sea view</h3>
          <div className='px-7 flex justify-between items-center gap-1 mt-3 '>
            <p>Cozy modern room with peaceful forest view.</p>
            <span>300k</span>
          </div>
          <span className='text-center px-9 py-3  text-mowana !border !border-mowana rounded-2xl spa hover:text-white duration-200 cursor-pointer mt-3 w-10/12 mx-auto  ' >See More</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          className='lg:w-3/12 flex  flex-col font-[poppins] '>
          <img src={r4} className='!h-[350px] rounded-4xl mb-3 object-cover' loading='lazy' alt="" />
          <h3 className='px-7 capitalize  !text-[19px]'>forest view</h3>
          <div className='px-7 flex justify-between items-center gap-1 mt-3 '>
            <p>Cozy modern room with peaceful forest view.</p>
            <span>300k</span>
          </div>
          <span className='text-center px-9 py-3  text-mowana !border !border-mowana rounded-2xl spa hover:text-white duration-200 cursor-pointer mt-3 w-10/12 mx-auto  ' >See More</span>
        </motion.div>


      </div>
    </section>




  </>

  )
}

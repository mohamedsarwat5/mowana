import React from 'react'
import s1 from '../../assets/images/s1.png'
import s2 from '../../assets/images/s2.png'
import s3 from '../../assets/images/s3.png'
import s4 from '../../assets/images/s4.png'
import Btn from '../Btn/Btn'
import { motion } from 'framer-motion'


export default function Suites() {
    return (<>
        <Btn></Btn>
        <div className='h-32'></div>

        <section className='mx-auto px-12 md:px-[120px]  overflow-hidden pb-8 '>
            <motion.h2

                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: .2, x: { type: 'spring', stiffnes: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1,
                }}
                className="text-center font-bold font-[quando] capitalize text-mowana text-4xl mb-8">SUITES</motion.h2>

            <div className='flex flex-col lg:flex-row   justify-between gap-4 '>

                <div className='flex flex-col gap-4 lg:w-7/12 '>
                    <div className=' flex flex-col lg:flex-row gap-4 '>
                        <motion.img
                            initial={{ opacity: 0, scale: .5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .6, ease: 'easeInOut' }}
                            src={s1} className='lg:w-6/12 rounded-4xl object-cover ' loading='lazy' alt="" />
                        <motion.img
                            initial={{ opacity: 0, scale: .5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .6, ease: 'easeInOut' }}
                            src={s2} className='lg:w-6/12 rounded-4xl ' loading='lazy' alt="" />
                    </div>
                    <div className='md:w-12/12 flex '>
                        <motion.img
                            initial={{ opacity: 0, scale: .5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .6, ease: 'easeInOut' }}
                            src={s3} loading='lazy' className=' relative lg:left-2 w-12/12 h-72 object-cover mx-auto rounded-4xl' alt="" />
                    </div>
                </div>

                <div className='flex '>
                    <motion.img
                        initial={{ opacity: 0, scale: .5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .6, ease: 'easeInOut' }}
                        src={s4} loading='lazy' className=' rounded-4xl s3 w-full !lg:w-[500px] lg:!h-[550px] object-cover' alt="" />
                </div>

            </div >

        </section>
    </>)
}

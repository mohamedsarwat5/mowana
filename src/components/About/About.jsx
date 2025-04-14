import React from 'react'
import img1 from '../../assets/images/about1.png'
import img2 from '../../assets/images/about2.png'
import Btn from '../Btn/Btn'
import { motion } from 'framer-motion'


export default function About() {
    return (<>
        <Btn></Btn>
        <div className='h-32'></div>

        <section className='  md:px-[120px]  flex flex-col  mx-auto  px-12'>
            <motion.h2
                initial={{ opacity: 0, scale: .5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5 }}
                className='text-center text-4xl text-mowana font-bold font-[Quando]  mb-10 uppercase'>About Us</motion.h2>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-0'>
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: .2, x: { type: 'spring', stiffnes: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1,
                    }}
                    src={img1} className='md:w-5/12 rounded-4xl' loading='lazy' alt="" />
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: .2, x: { type: 'spring', stiffnes: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1,
                    }}

                    className='md:w-6/12 font-[poppins] text-center text-mowana'>
                    Welcome to Mowana Hotel, where comfort meets convenience. Located in the heart of Egypt, we offer a relaxing and memorable stay with top-notch amenities, exceptional service, and a warm, inviting atmosphere. Whether you're here for business or leisure, our friendly staff is dedicated to making your visit enjoyable and stress-free.
                </motion.p>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center mt-14 justify-between gap-5 md:gap-0'>
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: .2, x: { type: 'spring', stiffnes: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1,
                    }}
                    className='md:w-6/12 font-[poppins] text-center text-mowana'>
                    At Mowana Hotel, we pride ourselves on providing a home away from home. With modern rooms, personalized service, and a central location in Egypt, we ensure a comfortable stay for all our guests. Whether you're visiting for work or relaxation, we’re here to make your experience unforgettable.
                </motion.p>
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: .2, x: { type: 'spring', stiffnes: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1,
                    }}

                    className='md:w-5/12 rounded-4xl' src={img2} loading='lazy' alt="" />
            </div>
        </section>
    </>)
}

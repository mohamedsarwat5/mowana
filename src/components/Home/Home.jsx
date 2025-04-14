import React from 'react'
import png from '../../assets/images/png.png'
import photo from '../../assets/images/photo.png'
import About from '../About/About'
import Services from '../Services/Services'
import Suites from '../Suites/Suites'
import Btn from '../Btn/Btn'
import { motion } from 'framer-motion'
import Rooms from '../Rooms/Rooms'
import Book from '../Book/Book'
import Contact from '../Contact/Contact'

export default function Home() {
    return (
        <>
            <Btn></Btn>
            <div className='h-36'></div>

            <section className='overflow-hidden flex md:flex-row flex-col-reverse items-center px-10 md:px-[120px]     gap-14'>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: .2, x: { type: 'spring', stiffnes: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1,
                    }}
                    className='will-change-transform  will-change-opacity w-full md:w-4/12 flex flex-col gap-5 md:gap-8'>
                    <h2 className='font-[quando] font-bold text-mowana md:text-4xl text-2xl'> <span className=' text-4xl lg:text-6xl'>Mowana</span> Where Luxury Meets..</h2>
                    <p className='font-[poppins] lg:text-3xl text-2xl'>Tranquility in the heart of breathtaking nature..</p>
                </motion.div>

                <div className=' w-full md:w-8/12  '>
                    <motion.img
                        className='will-change-transform  will-change-opacity'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: .2, x: { type: 'spring', stiffnes: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1,
                        }}
                        src={photo} loading='lazy' />
                </div>
            </section>

            <About></About>
            <Services></Services>
            <Suites></Suites>
            <Rooms />
            <Book></Book>
            <Contact />
        </>
    )
}

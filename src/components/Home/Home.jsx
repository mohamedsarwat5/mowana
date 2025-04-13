import React from 'react'
import png from '../../assets/images/png.png'
import photo from '../../assets/images/photo.png'
import About from '../About/About'


export default function Home() {
    return (
        <>
            <section className='flex md:flex-row flex-col-reverse items-center min-h-screen px-10 md:px-[120px]  pb-16 bg-mowana-light gap-14'>

                <div className='w-full md:w-4/12 flex flex-col gap-5 md:gap-8'>
                    <h2 className='font-[quando] font-bold text-mowana md:text-4xl text-2xl'> <span className=' text-4xl lg:text-6xl'>Mowana</span> Where Luxury Meets..</h2>
                    <p className='font-[poppins] lg:text-3xl text-2xl'>Tranquility in the heart of breathtaking nature..</p>
                </div>

                <div className=' w-full md:w-8/12  '>
                    <img src={photo} />
                </div>
            </section>

            <About></About>

        </>
    )
}

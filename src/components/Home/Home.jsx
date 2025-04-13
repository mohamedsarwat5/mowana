import React from 'react'
import beach from '../../assets/images/beach.png'
import img from '../../assets/images/img.png'
import girl from '../../assets/images/girl.png'
import png from '../../assets/images/png.png'
export default function Home() {
    return (
        <>
            <section className='flex md:flex-row flex-col-reverse items-center  px-10 md:px-[120px] py-20 bg-mowana-light gap-14' >
                <div className='w-full md:w-4/12 flex flex-col gap-5 md:gap-8'>
                    <h2 className='font-[quando] font-bold text-mowana md:text-4xl text-2xl'> <span className=' text-4xl md:text-6xl'>Mowana</span> Where Luxury Meets..</h2>
                    <p className='font-[poppins] md:text-3xl text-2xl'>Tranquility in the heart of breathtaking nature..</p>
                </div>

                <div className=' w-full md:w-8/12  '>
                    {/* <img className='w-[290px] !h-[320px] !object-cover rounded-4xl absolute top-0 -left-14' src={beach} />
                    <img className=' absolute w-[280px] !h-[329px] object-cover rounded-4xl top-[250px] left-16 z-10' src={img} alt="" />
                    <img className=' !h-[520px] w-[347px] object-cover rounded-4xl end-0 top-8 absolute ' src={girl} alt="" /> */}
                    <img src={png} alt=""  />
                </div>
            </section>


        </>
    )
}

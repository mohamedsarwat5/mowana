import React from 'react'
import img1 from '../../assets/images/about1.png'
import img2 from '../../assets/images/about2.png'


export default function About() {
    return (
        <section className=' px-10 md:px-[120px] pb-16 flex flex-col pt-36'>
            <h2 className='text-center text-4xl text-mowana font-bold font-[Quando] mb-10'>About Us</h2>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-0'>
                <img src={img1} className='md:w-5/12 rounded-4xl' alt="" />
                <p className='md:w-6/12 font-[poppins] text-center'>
                    Welcome to Mowana Hotel, where comfort meets convenience. Located in the heart of Egypt, we offer a relaxing and memorable stay with top-notch amenities, exceptional service, and a warm, inviting atmosphere. Whether you're here for business or leisure, our friendly staff is dedicated to making your visit enjoyable and stress-free.
                </p>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center mt-14 justify-between gap-5 md:gap-0'>
                <p className='md:w-6/12 font-[poppins] text-center'>
                    At Mowana Hotel, we pride ourselves on providing a home away from home. With modern rooms, personalized service, and a central location in Egypt, we ensure a comfortable stay for all our guests. Whether you're visiting for work or relaxation, we’re here to make your experience unforgettable.
                </p>
                <img className='md:w-5/12 rounded-4xl' src={img2} alt="" />
            </div>
        </section>
    )
}

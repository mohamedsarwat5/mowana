import React from 'react'
import img from "../../assets/images/logo1.png";



export default function Footer() {
  return (
    <>

      <section className='font-[poppins] mx-auto px-12 md:px-[120px] py-10 overflow-hidden bg-gradient-to-t from-[#F2FF4D] to-[#F8FEAB] flex flex-col lg:flex-row justify-between items-center'>


        <div className='text-mowana font-semibold text-2xl'>
          <p>Phone Support</p>
          <span>+20 123 456 789</span>
        </div>
        <div>
          <img src={img} className='w-[300px]' alt="" />
        </div>
        <div className=''>
          <p className='text-center mb-3 text-2xl font-[poppins] font-semibold'>Follow Us</p>
          <div className='flex items-center gap-7 justify-center text-2xl '>
            <i className='fa-brands cursor-pointer fa-facebook-f'></i>
            <i className='fa-brands cursor-pointer fa-twitter'></i>
            <i className='fa-brands cursor-pointer fa-youtube'></i>
            <i className='fa-brands cursor-pointer fa-instagram'></i>
          </div>
        </div>


      </section>
      <div className='bg-green-900 w-full h-16 px-1 text-[#F2FF4D] text-center flex justify-center items-center'>
        © Copyright 2017 Mowana hotel - All Rights Reserved
      </div>

    </>
  )
}

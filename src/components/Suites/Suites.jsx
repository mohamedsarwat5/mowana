import React from 'react'
import s1 from '../../assets/images/s1.png'
import s2 from '../../assets/images/s2.png'
import s3 from '../../assets/images/s3.png'
import s4 from '../../assets/images/s4.png'
import Btn from '../Btn/Btn'
export default function Suites() {
    return (<>
        <Btn></Btn>
        <div className='h-32'></div>

        <section className='mx-autopx-12 md:px-[120px]'>
            <h2 className="text-center font-bold font-[quando] capitalize text-mowana text-4xl mb-8">SUITES</h2>

            <div className='flex flex-col md:flex-row  justify-between gap-4 '>

                <div className='flex flex-col gap-4 md:w-7/12 '>
                    <div className=' flex flex-col md:flex-row gap-4'>
                        <img src={s1} className='md:w-6/12 rounded-4xl object-cover' alt="" />
                        <img src={s2} className='md:w-6/12 rounded-4xl' alt="" />
                    </div>
                    <div className='md:w-12/12 flex '>
                        <img src={s3} className=' relative md:left-2 w-12/12 h-72 object-cover mx-auto rounded-4xl' alt="" />
                    </div>
                </div>

                <div className='flex '>
                    <img src={s4} className='rounded-4xl s3 w-[500px] object-top' alt="" />
                </div>

            </div >

        </section>
    </>)
}

import React from "react";
import Slider from "react-slick";

import spa from '../../assets/images/spa.png'
import pool from '../../assets/images/pool.png'
import gym from '../../assets/images/gym.png'
import Housekeeping from '../../assets/images/Housekeeping.jpeg'
import Jacuzzi from '../../assets/images/Jacuzzi.jpg'
import Massage from '../../assets/images/Massage.jpg'
import Lounge from '../../assets/images/Lounge.jpg'
import Terrace from '../../assets/images/Terrace.jpg'
import Sauna from '../../assets/images/Sauna.jpg'
import Btn from "../Btn/Btn";
import { motion } from 'framer-motion'




export default function Services() {
    let settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 400,
        infinite: true,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 300,
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: false,
                }
            }
        ]
    }
    return (<>
        {/* <Btn></Btn> */}
        <div className='h-32'></div>

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}

            className="will-change-transform  will-change-opacity slider-container mx-auto  px-12 md:px-[120px] relative overflow-hidden pb-18 ">
            <h2 className="text-center font-bold font-[quando] text-mowana text-4xl mb-8 uppercase">Our Services</h2>
            <Slider {...settings} className="custom-slider">
                <div>
                    <img loading='lazy'  src={spa} className="h-48 w-72 mx-auto rounded-4xl object-cover object-top" alt="" />
                    <h3 className="font-[poppins] text-mowana-green text-center">Spa</h3>
                </div>
                <div>
                    <img loading='lazy' src={Jacuzzi} className="h-48 w-72 mb-3 mx-auto rounded-4xl  object-cover object-top" alt="" />
                    <h3 className="font-[poppins] text-mowana-green text-center">Jacuzzi</h3>
                </div>
                <div>
                    <img loading='lazy' src={Housekeeping} className="h-48 w-72 mb-3 mx-auto rounded-4xl  object-cover object-top" alt="" />
                    <h3 className="font-[poppins] text-mowana-green text-center">Housekeeping</h3>
                </div>
                <div>
                    <img loading='lazy' src={pool} className="h-48 w-72 mb-3 mx-auto rounded-4xl  object-cover object-center" alt="" />
                    <h3 className="font-[poppins] text-mowana-green text-center">Pool</h3>
                </div>
                <div>
                    <img loading='lazy' src={gym} className="h-48 w-72 mb-3 mx-auto rounded-4xl  object-cover object-top" alt="" />
                    <h3 className="font-[poppins] text-mowana-green text-center">Gym</h3>
                </div>
                <div>
                    <img loading='lazy' src={Massage} className="h-48 w-72 mb-3 mx-auto rounded-4xl  object-cover object-top" alt="" />
                    <h3 className="font-[poppins] text-mowana-green text-center">Massage</h3>
                </div>
                <div>
                    <img loading='lazy' src={Terrace} className="h-48 w-72 mb-3 mx-auto rounded-4xl  object-cover object-top" alt="" />
                    <h3 className="font-[poppins] text-mowana-green text-center">Terrace</h3>
                </div>
                <div>
                    <img loading='lazy' src={Lounge} className="h-48 w-72 mb-3 mx-auto rounded-4xl  object-cover object-top" alt="" />
                    <h3 className="font-[poppins] text-mowana-green text-center">Lounge</h3>
                </div>
                <div>
                    <img loading='lazy' src={Sauna} className="h-48 w-72 mb-3 mx-auto rounded-4xl  object-cover object-top" alt="" />
                    <h3 className="font-[poppins] text-mowana-green text-center">Sauna</h3>
                </div>
            </Slider>

            <div className="w-full md:w-8/12 mx-auto mt-20 text-center text-[20px] text-mowana">
                <p className="">At Mowana Hotel, we offer premium services for your comfort and relaxation — from spa treatments and soothing saunas to serene terraces, elegant lounges, and expert massages. Daily housekeeping ensures a clean, welcoming stay tailored to your every need.</p>
            </div>
        </motion.div>
    </>);
}

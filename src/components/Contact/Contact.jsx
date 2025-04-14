import React from 'react'
import { easeIn, motion } from "framer-motion";
import thank from "../../assets/images/thank.png";



export default function Contact() {
    return (<>


        <div className='h-32'></div>


        <motion.h2
            initial={{ scale: .5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: .5 }}
            className="text-center font-bold font-[quando] uppercase text-mowana  text-4xl mb-8">contact us</motion.h2>

        <section className='mx-auto px-12 md:px-[120px] flex  flex-col lg:flex-row items-center gap-y-9  justify-between overflow-hidden py-8 bg-nav'>




            <motion.form
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, ease: "easeIn" }}
                className="max-w-2xl w-full flex flex-col ">
                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-mowana">Enter Your Name</label>
                    <input type="text" id="email" className="bg-white border border-gray-300 text-mowana text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-mowana">Enter Your Email</label>
                    <input type="text" id="password" className="bg-white border border-gray-300 text-mowana text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " required />
                </div>
                <div className="flex items-start">
                </div>

                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 mb-5" placeholder="Leave a message...."></textarea>

                <button type="submit" className="text-white spa !bg-[#146c6c]  btn hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </motion.form>





            <div>
                <motion.img
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: .5, ease: "easeIn" }}
                    src={thank} alt="" />
            </div>


        </section>








    </>

    )
}

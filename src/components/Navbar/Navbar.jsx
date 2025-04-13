import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'


export default function Navbar() {



    const handledarkmode = () => {
        document.documentElement.classList.toggle('dark')
    }

    const [isOpen, setIsOpen] = useState(false)

    const handleNavBar = () => {
        setIsOpen(prev => !prev)
    }


    return (<>






        <nav className="bg-nav opacity-80  fixed top-0  w-full z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center  justify-between p-4 mx-auto px-4">
                <Link><img to={'/'} src={logo} className='h-18' alt="" /></Link>
                <button onClick={handleNavBar} type="button" className=" text-mowana-green md:hidden">
                    <i className={`${isOpen? 'fa-xmark' : 'fa-bars'} fa-solid  text-[22px] text-mowana`}></i>
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className="font-medium text-center flex flex-col md:flex-row p-4 md:p-0 mt-4  gap-9  md:mt-0">
                        <li>
                            <NavLink to={'/'}   onClick={() => setIsOpen(false)} className={`font-[poppins] py-2 text-mowana  cursor-pointer`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/rooms'}  onClick={() => setIsOpen(false)} className={`font-[poppins] py-2 text-mowana  cursor-pointer`}>Rooms</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/services'}  onClick={() => setIsOpen(false)} className={`font-[poppins] py-2 text-mowana `}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}  onClick={() => setIsOpen(false)} className={`font-[poppins] py-2 text-mowana-green cursor-pointer`}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/suites'}  onClick={() => setIsOpen(false)} className={`font-[poppins] py-2 text-mowana-green cursor-pointer`}>Suites</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/book'}  onClick={() => setIsOpen(false)} className={`font-[poppins] py-2 text-mowana-green cursor-pointer`}>Book</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}  onClick={() => setIsOpen(false)} className={`font-[poppins] py-2 text-mowana-green cursor-pointer`}>Contact Us</NavLink>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>







    </>

    )
}

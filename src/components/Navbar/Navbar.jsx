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






        <nav className="bg-[#c6eedc] border-gray-200 dark:bg-mowana-dark fixed top-0 left-0 w-full ">
            <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
                <Link><img to={'/'} src={logo} alt="" /></Link>
                {/* <i onClick={handledarkmode} className="fa-solid fa-moon text-mowana-green text-[22px] ms-auto"></i> */}
                <button onClick={handleNavBar} type="button" className=" text-mowana-green md:hidden">
                    <i className="fa-solid fa-bars text-[22px]"></i>
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className="font-medium text-center flex flex-col md:flex-row p-4 md:p-0 mt-4  gap-9  md:mt-0">
                        <li>
                            <NavLink to={'/'} className=" font-[poppins] py-2 text-mowana-green ">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/rooms'} className=" font-[poppins] py-2  text-mowana-green ">Rooms</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/services'} className=" font-[poppins] py-2  text-mowana-green ">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/suites'} className=" font-[poppins] py-2  text-mowana-green ">Suites</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/book'} className=" font-[poppins] py-2  text-mowana-green ">Book</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'} className=" font-[poppins] py-2  text-mowana-green ">Contact Us</NavLink>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>







    </>

    )
}

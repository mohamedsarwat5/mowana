import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import Footer from '../Footer/Footer'

export default function Layout() {
    const location = useLocation();
    return (
        <>

            <Navbar></Navbar>
            <AnimatePresence mode='wait'>
                <Outlet key={location.pathname}></Outlet>
            </AnimatePresence>
            <Footer></Footer>

        </>
    )
}

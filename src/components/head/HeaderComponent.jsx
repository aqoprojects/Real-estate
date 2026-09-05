import { Avatar3 } from '@/Designs/base/Avatars'
import React from 'react'
import { IoMenuOutline } from "react-icons/io5";

const HeaderComponent = () => {
    return (
        <header className='flex justify-between items-center-safe py-10  lg:px-25 px-5'>
            <div className='max-w-35'>
                <img src="/Logo.png" alt="Logo" />
            </div>
            <nav className='lg:w-150'>
                <ul className='lg:flex hidden  justify-between items-center-safe text-base [&>li]:cursor-pointer [&>li]:hover:font-medium [&>li]:hover:text-black text-black/70 gap-3'>
                    <li>Top offers</li>
                    <li>Search in offers</li>
                    <li>Testimonials</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
                <div className='lg:hidden'>
                    <Avatar3
                        icons={{icon1: IoMenuOutline}}
                        extra={'bg-transparent'}
                    />
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent

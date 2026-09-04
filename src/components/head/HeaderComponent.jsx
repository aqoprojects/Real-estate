import React from 'react'

const HeaderComponent = () => {
    return (
        <header className='flex justify-between py-10  px-25'>
            <div className='max-w-35'>
                <img src="/Logo.png" alt="Logo" />
            </div>
            <nav className='lg:w-150'>
                <ul className='flex justify-between items-center-safe text-base [&>li]:cursor-pointer [&>li]:hover:font-medium [&>li]:hover:text-black text-black/70'>
                    <li>Top offers</li>
                    <li>Search in offers</li>
                    <li>Testimonials</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent

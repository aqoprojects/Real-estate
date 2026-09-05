import HeaderComponent from '@/components/head/HeaderComponent'
import { Button1 } from '@/Designs/base/Buttons'
import { DropdownLine1 } from '@/Designs/base/Dropdown'
import { InputField1 } from '@/Designs/base/Inputs'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'

import house5 from '@/assets/houses/house5.png';
import house6 from '@/assets/houses/house6.png';
import house7 from '@/assets/houses/house7.png';
import house8 from '@/assets/houses/house8.png';
import house9 from '@/assets/houses/house9.png';
import house10 from '@/assets/houses/house10.png';
import house11 from '@/assets/houses/house11.png';
import house12 from '@/assets/houses/house12.png';
import house13 from '@/assets/houses/house13.png';
import house14 from '@/assets/houses/house14.png';
import house15 from '@/assets/houses/house15.png';
import house16 from '@/assets/houses/house16.png';
import FooterComponent from '@/components/foot/FooterComponent'


const HousesPage = () => {
    return (
        <>
            <HeaderComponent />
            <main className='px-2'>
                <article>
                    <section className='space-y-8'>
                        <div className='lg:px-25 sm:px-10 space-y-4'>
                            <h1 className='font-bold text-3xl '>Search for an offer</h1>
                            <div className="w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-stretch gap-3 w-full">

                                    {/* Location */}
                                    <div className="lg:flex-1">
                                        <InputField1
                                            showDefault={false}
                                            icons={{
                                                icon1: {
                                                    icon: CiLocationOn,
                                                    iconStyle: "!size-6",
                                                    extra: "flex justify-center items-center-safe",
                                                },
                                            }}
                                            styles={{ input1: "w-full" }}
                                            texts={{ placeholder1: "Search of location" }}
                                            extra="rounded-sm !w-full py-2 !m-0 !justify-start"
                                        />
                                    </div>

                                    {/* Property Type */}
                                    <div className="lg:flex-1">
                                        <InputField1
                                            showDefault={false}
                                            texts={{ placeholder1: "Property type" }}
                                            icons={{ icon2: { icon: IoIosArrowDown } }}
                                            styles={{ input1: "w-full" }}
                                            extra="rounded-sm py-2 !m-0 px-3 !w-full"
                                        />
                                    </div>

                                    {/* Bedrooms */}
                                    <div className="lg:flex-1">
                                        <InputField1
                                            showDefault={false}
                                            texts={{ placeholder1: "Bedrooms" }}
                                            icons={{ icon2: { icon: IoIosArrowDown } }}
                                            styles={{ input1: "w-full" }}
                                            extra="rounded-sm py-2 !m-0 px-3 !w-full"
                                        />
                                    </div>

                                    {/* Price */}
                                    <div className="lg:flex-1">
                                        <InputField1
                                            showDefault={false}
                                            texts={{ placeholder1: "Select price" }}
                                            icons={{ icon2: { icon: IoIosArrowDown } }}
                                            styles={{ input1: "w-full" }}
                                            extra="rounded-sm py-2 !m-0 px-3 !w-full"
                                        />
                                    </div>

                                    {/* Search */}
                                    <div className="md:col-span-2 lg:col-span-1 lg:w-35">
                                        <Button1
                                            showDefault={false}
                                            icons={{ icon1: IoSearchOutline }}
                                            texts={{ text1: "Search" }}
                                            extra="bg-teal-500 rounded-sm !w-full justify-center lg:!w-35"
                                        />
                                    </div>
                                </div>
                            </div>


                        </div>

                        <DropdownLine1 extra={'h-[px] w-1 bg-black/10 w-full'} />

                    </section>
                    <section className='px-3 md:px-25 pt-8 pb-20 space-y-8'>
                        <div className="flex items-center justify-between gap-3 w-full">
                            <p className="shrink-0">
                                1452 results found
                            </p>

                            <InputField1
                                showDefault={false}
                                texts={{ placeholder1: "Sort by" }}
                                icons={{ icon2: { icon: IoIosArrowDown } }}
                                styles={{ input1: "!w-full !pr-1" }}
                                extra="rounded-sm py-2 !m-0 px-3 !w-[clamp(120px,20vw,200px)]"
                            />
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house5} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Bright and airy 2-bedroom flat near the city center
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">320 000$</p>
                                    <p className="text-black/70">Barcelona IV</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house6} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Exclusive 5-room residence with a rooftop terrace
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">495 000$</p>
                                    <p className="text-black/70">Barcelona I.</p>
                                </figcaption>
                            </figure>

                            <figure className="bg-white w-full shadow-black/20 shadow-sm">
                                <img src={house7} alt="house1" className="w-full rounded-t-sm" />
                                <figcaption className="p-3">
                                    <p className="font-bold">
                                        Newly built 4-room apartment with premium finishes
                                    </p>
                                    <p className="text-teal-500 font-bold text-sm">390 000$</p>
                                    <p className="text-black/70">Madrid III.</p>
                                </figcaption>
                            </figure>

                            {/* ...rest of your figures */}

                        </div>

                        <div className='flex justify-center w-full gap-3'>

                            <Button1
                                showDefault={false}
                                texts={{ text1: 'show more' }}
                                extra={'bg-transparent rounded-xs !py-1.5 !text-teal-500 rounded-none ring-2 !px-7'}
                            />

                        </div>
                    </section>
                </article>
            </main>
            <FooterComponent />
        </>
    )
}

export default HousesPage

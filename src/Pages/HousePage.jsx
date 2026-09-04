import React from 'react'
import HeaderComponent from '@/components/head/HeaderComponent';
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowBack } from "react-icons/io";
import { Button1, Button4, Button5 } from '@/Designs/base/Buttons';
import house1 from '@/assets/houses/large/house1.png';
import xsmallhouse1 from '@/assets/houses/xsmall/house1.png';
import xsmallhouse2 from '@/assets/houses/xsmall/house2.png';
import xsmallhouse3 from '@/assets/houses/xsmall/house3.png';
import map1 from '@/assets/map/map1.png';

import staffprofile1 from '@/assets/staffs/profilepic/profile1.png';

import { PiWarehouseLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineRadiusUpleft } from "react-icons/ai";
import { Avatar3 } from '@/Designs/base/Avatars';
import { FiPhone } from "react-icons/fi";
import { InputField1, TextareaField1 } from '@/Designs/base/Inputs';


import house2 from '@/assets/houses/house2.png';
import house3 from '@/assets/houses/house3.png';
import FooterComponent from '@/components/foot/FooterComponent';

const HousePage = () => {
    return (
        <>
            <HeaderComponent />
            <main className='px-25'>
                <div>
                    <Button4
                        icons={{ icon1: IoMdArrowBack }}
                        texts={{ text1: 'Back' }}
                        styles={{ icon1: '!fill-black', text1: '!text-base' }}
                        extra={'bg-transparent !text-black font-normal'}
                    />
                </div>

                <div>
                    <div>
                        <h1 className='font-bold text-5xl '>Exclusive 5-room residence with a rooftop terrace</h1>
                    </div>

                    <article className="flex gap-10">
                        <section className='space-y-4 w-220'>
                            <div className='max-w-220 w-220'>
                                <img src={house1} alt="house1" className='w-full rounded-sm' />
                            </div>
                            <div>
                                <div className="flex items-center-safe justify-center-safe gap-3">
                                    <Button5
                                        icons={{ icon1: IoIosArrowBack }}
                                        extra={'bg-black/10 !rounded-full'}
                                    />
                                    <div className='flex items-center-safe gap-2'>
                                        <div className='max-w-60 w-68'>
                                            <img src={xsmallhouse1} alt="house1" className='w-full' />
                                        </div>
                                        <div className='max-w-60 w-68'>
                                            <img src={xsmallhouse2} alt="house2" className='w-full' />
                                        </div>
                                        <div className='max-w-60 w-68'>
                                            <img src={xsmallhouse3} alt="house3" className='w-full' />
                                        </div>
                                    </div>
                                    <Button5
                                        icons={{ icon1: IoIosArrowForward }}
                                        extra={'bg-teal-500 !rounded-full'}
                                    />
                                </div>

                                <div className='flex justify-between items-center-safe gap-2 w-160 mx-auto my-0 py-3'>
                                    <div className='flex items-center-safe '>
                                        <Avatar3
                                            icons={{ icon1: PiWarehouseLight }}
                                            styles={{ icon1: '!fill-teal-500' }}
                                            extra={'bg-transparent !w-15 !h-15 '}
                                        />
                                        <p className='font-bold text-xl'>a Flat</p>
                                    </div>

                                    <div className='flex items-center-safe'>
                                        <Avatar3
                                            icons={{ icon1: AiOutlineRadiusUpleft }}
                                            styles={{ icon1: '!fill-teal-500' }}
                                            extra={'bg-transparent !w-15 !h-15'}
                                        />
                                        <p className='font-bold text-xl'>224 m&sup2;
                                        </p>
                                    </div>

                                    <div className='flex items-center-safe'>
                                        <Avatar3
                                            icons={{ icon1: IoLocationOutline }}
                                            styles={{ icon1: '!stroke-teal-500' }}
                                            extra={'bg-transparent !w-15 !h-15'}
                                        />
                                        <p className='font-bold text-xl'>Barcelona I.</p>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center-safe gap-2 w-160 mx-auto my-0 bg-teal-50 p-4 rounded-md'>
                                    <div>
                                        <p className='font-medium text-black/80'>Mortgage since:</p>
                                        <p className='text-teal-500 font-bold text-2xl'>807.57$/ month</p>
                                    </div>

                                    <Button1
                                        showDefault={false}
                                        texts={{ text1: 'Get a mortage' }}
                                        extra={'bg-teal-500 rounded-xs !py-2  rounded-sm ring-2 !px-5'}
                                    />

                                </div>
                                <div className='flex justify-between items-center-safe gap-2 w-160 mx-auto my-0 py-5'>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur expedita fugit eum velit sint quod maxime at optio praesentium magnam commodi recusandae repudiandae facere, quo inventore eaque, totam quibusdam similique provident eligendi atque. Adipisci iste ipsa repudiandae praesentium? Ipsa commodi molestiae vel. Recusandae at aliquid vitae veritatis doloremque? Consectetur minus deserunt repellendus quos eaque voluptates reprehenderit vel esse exercitationem at, voluptate, vitae facere vero doloremque ipsam cum repudiandae tempora. Doloribus nisi fugit dicta atque eos voluptatem ducimus, est id provident accusamus sunt saepe porro fugiat tempore maiores temporibus veniam optio rerum exercitationem, earum eius rem quibusdam quis! Incidunt, provident laborum?</p>
                                </div>

                                <div className='w-160 mx-auto my-0 py-5 space-y-3'>
                                    <h3 className='font-bold text-xl'>Location:</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel quis voluptatum vero repellat error soluta incidunt beatae nostrum repellendus deserunt placeat, similique at animi pariatur totam tempora aperiam dolore ipsa vitae nobis officiis? Veritatis, nihil assumenda est atque voluptatem unde, alias accusamus dolor non mollitia expedita ea eos nobis.</p>
                                    <img src={map1} alt="map1" />
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className='bg-teal-50 p-5 w-100'>
                                <h2 className='font-bold text-2xl '>Contact us</h2>
                                <figure className='flex items-center-safe gap-2'>
                                    <img src={staffprofile1} alt="staff" className='w-12' />
                                    <figcaption>
                                        <p className=''>Haylie Donin</p>
                                        <div className='text-base flex items-center-safe gap-2'>
                                            <Avatar3
                                                icons={{ icon1: FiPhone }}
                                                extra={'bg-transparent !w-5 !h-5 !p-0'}
                                            />
                                            +234 583 854 346
                                        </div>
                                    </figcaption>
                                </figure>

                                <div className='space-y-4 my-2'>
                                    <InputField1
                                        showDefault={false}
                                        styles={{ input1: 'w-full' }}
                                        texts={{ placeholder1: 'Your full name', text1: 'Full name' }}
                                        extra={'rounded-sm !w-full  py-2 !m-0 !justify-start bg-white px-3'}
                                    />

                                    <InputField1
                                        showDefault={false}
                                        styles={{ input1: 'w-full' }}
                                        texts={{ placeholder1: 'Your email', text1: 'Email' }}
                                        extra={'rounded-sm !w-full  py-2 !m-0 !justify-start bg-white px-3'}
                                    />

                                    <TextareaField1
                                        showDefault={false}
                                        texts={{ placeholder1: 'Your message', text1: 'Your Message' }}
                                        styles={{ textarea1: 'bg-white' }}
                                    />

                                    <Button1
                                        showDefault={false}
                                        texts={{ text1: 'Send Message' }}
                                        extra={'bg-transparent rounded-xs !py-2 !text-teal-500 rounded-none ring-2 !px-5 w-full flex justify-center'}
                                    />
                                </div>
                            </div>

                            <div className='bg-teal-50 p-5 w-100 space-y-3'>
                                <h2 className='font-bold text-2xl'>Brief characteristics</h2>

                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>City:</h3>
                                    <p>Barcelona I.</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>Street:</h3>
                                    <p>Vincent ala Carne</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>Garages:</h3>
                                    <p>2 cars</p>
                                </div>



                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>City:</h3>
                                    <p>Barcelona I.</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>Street:</h3>
                                    <p>Vincent ala Carne</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>Garages:</h3>
                                    <p>2 cars</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>City:</h3>
                                    <p>Barcelona I.</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>Street:</h3>
                                    <p>Vincent ala Carne</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>Garages:</h3>
                                    <p>2 cars</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>City:</h3>
                                    <p>Barcelona I.</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>Street:</h3>
                                    <p>Vincent ala Carne</p>
                                </div>
                                <div className='flex  items-center-safe gap-2'>
                                    <h3 className='font-bold text-lg'>Garages:</h3>
                                    <p>2 cars</p>
                                </div>
                            </div>

                        </section>
                    </article>

                </div>

                <article className='space-y-3 py-20'>
                    <div className='text-center'>
                        <h2 className='font-bold text-xl'>You might be interested in</h2>
                    </div>

                    <section className='pl-25 flex justify-center-safe gap-5'>

                        <figure className='bg-white w-70 shadow-black/20 shadow-sm'>
                            <img src={house1} alt="house1" className='w-full rounded-t-sm' />
                            <figcaption className='p-3'>
                                <p className='font-bold'>Large 4-room apartment with a beautiful terrace</p>
                                <p className='text-teal-500 font-bold text-sm'>320 000$</p>
                                <p className='text-black/70'>Barcelona IV</p>
                            </figcaption>
                        </figure>

                        <figure className='bg-white w-70 shadow-black/20 shadow-sm'>
                            <img src={house2} alt="house1" className='w-full rounded-t-sm' />
                            <figcaption className='p-3'>
                                <p className='font-bold'>Magnificent duplex in a private villa</p>
                                <p className='text-teal-500 font-bold text-sm'>315 000$</p>
                                <p className='text-black/70'>Barcelona II.</p>
                            </figcaption>
                        </figure>

                        <figure className='bg-white w-70 shadow-black/20 shadow-sm'>
                            <img src={house3} alt="house1" className='w-full rounded-t-sm' />
                            <figcaption className='p-3'>
                                <p className='font-bold'>5I large design apartment with terrace</p>
                                <p className='text-teal-500 font-bold text-sm'>280 000$</p>
                                <p className='text-black/70'>Madrid VI.</p>
                            </figcaption>
                        </figure>

                    </section>
                </article>

            </main>
            <FooterComponent/>
        </>
    )
}

export default HousePage

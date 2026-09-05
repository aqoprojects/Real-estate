import React from 'react'
import HeaderComponent from '@/components/head/HeaderComponent'
import { InputField1 } from '@/Designs/base/Inputs'
import { CiLocationOn } from "react-icons/ci";
import { Button1 } from '@/Designs/base/Buttons';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from 'react-icons/io';
import { Button2, Button5 } from '../Designs/base/Buttons';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import house1 from '@/assets/houses/house1.png';
import house2 from '@/assets/houses/house2.png';
import house3 from '@/assets/houses/house3.png';

import client1 from '@/assets/clients/client1.png';
import client2 from '@/assets/clients/client2.png';
import client3 from '@/assets/clients/client3.png';

import staff1 from '@/assets/staffs/staff1.png';
import FooterComponent from '@/components/foot/FooterComponent';



const LandingPage = () => {
  return (
    <>
      <HeaderComponent />
      <main className=''>
        <article className='flex lg:flex-row flex-col  lg:justify-between justify-center-safe   items-center-safe  lg:px-25 px-5   lg:py-26 py-6 gap-3'>
          <section className='flex flex-col gap-8'>
            <div className="max-w-160 lg:space-y-10 sm:space-y-5">
              <h1 className="text-[clamp(25px,7vw,6rem)] font-extrabold lg:leading-18 sm:leading-13">Modern living for everyone</h1>
              <p className="text-[clamp(12px,2vw,1.3rem)]">We provide a complete service for the sale, purchase or rental of real estate. We have been operating in spain more than 15 years.</p>
            </div>
            <div className='flex lg:flex-row flex-col items-stretch  gap-3'>
              <div className='lg:flex-1 flex items-center-safe gap-5'>
                <InputField1
                  showDefault={false}
                  icons={{ icon1: { icon: CiLocationOn, iconStyle: '!size-6', extra: 'flex justify-center items-center-safe' } }}
                  styles={{input1: 'flex-1 w-full lg:w-35 placeholder:text-base'}}
                  texts={{ placeholder1: 'Search of location' }}
                  extra={'rounded-sm !w-full py-2 !m-0 !justify-start'}
                />

                <InputField1
                  showDefault={false}
                  texts={{ placeholder1: 'Property type' }}
                  icons={{ icon2: { icon: IoIosArrowDown } }}
                  styles={{ input1: 'lg:w-35 w-full placeholder:text-base placeholder:truncate', }}
                  extra={'rounded-sm py-2 !m-0 px-3 lg:w-50 w-full'}
                />
              </div>
              <Button1
                showDefault={false}
                icons={{ icon1: IoSearchOutline }}
                texts={{ text1: 'Search' }}
                extra={'bg-green-600 rounded-sm lg:!w-35 !w-full  justify-center'}
              />
            </div>
          </section>
          <section className=''>
            <div className='max-w-140'>
              <img src="/realestate.png" className='size-full' alt="realestate house" />
            </div>

          </section>
        </article>

        <article className='bg-cyan-50 lg:py-26 py-16  lg:px-0 px-10 space-y-8'>
          <section className='lg:px-25 lg:py-10  flex flex-wrap items-center-safe justify-between gap-6'>
            <div className='space-y-3 leading-5 max-w-130'>
              <h2 className='font-bold text-[clamp(19px,4vw,2.5rem)]'>Top offers</h2>
              <p>Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to fullest.</p>

            </div>
            <div className="flex items-center-safe gap-4">
              <Button5
                icons={{ icon1: IoIosArrowBack }}
                extra={'bg-black/10 !rounded-full'}
              />
              <Button5
                icons={{ icon1: IoIosArrowForward }}
                extra={'bg-teal-500 !rounded-full'}
              />
              <Button2
                showDefault={false}
                texts={{ text1: 'Show all others' }}
                extra={'bg-transparent !text-teal-500 rounded-none outline-teal-500'}
              />
            </div>
          </section>
          <section className='lg:pl-25 flex items-center-safe gap-5 overflow-auto'>

            <figure className='bg-white min-w-70 shadow-black/20 shadow-sm'>
              <img src={house1} alt="house1" className='w-full rounded-t-sm' />
              <figcaption className='p-3'>
                <p className='font-bold'>Large 4-room apartment with a beautiful terrace</p>
                <p className='text-teal-500 font-bold text-sm'>320 000$</p>
                <p className='text-black/70'>Barcelona IV</p>
              </figcaption>
            </figure>

            <figure className='bg-white min-w-70 shadow-black/20 shadow-sm'>
              <img src={house2} alt="house1" className='w-full rounded-t-sm' />
              <figcaption className='p-3'>
                <p className='font-bold'>Magnificent duplex in a private villa</p>
                <p className='text-teal-500 font-bold text-sm'>315 000$</p>
                <p className='text-black/70'>Barcelona II.</p>
              </figcaption>
            </figure>

            <figure className='bg-white min-w-70 shadow-black/20 shadow-sm'>
              <img src={house3} alt="house1" className='w-full rounded-t-sm' />
              <figcaption className='p-3'>
                <p className='font-bold'>5I large design apartment with terrace</p>
                <p className='text-teal-500 font-bold text-sm'>280 000$</p>
                <p className='text-black/70'>Madrid VI.</p>
              </figcaption>
            </figure>

            <figure className='bg-white min-w-70 shadow-black/20 shadow-sm'>
              <img src={house1} alt="house1" className='w-full rounded-t-sm' />
              <figcaption className='p-3'>
                <p className='font-bold'>Large 4-room apartment with a beautiful terrace</p>
                <p className='text-teal-500 font-bold text-sm'>320 000$</p>
                <p className='text-black/70'>Barcelona IV</p>
              </figcaption>
            </figure>

            <figure className='bg-white min-w-70 shadow-black/20 shadow-sm'>
              <img src={house3} alt="house1" className='w-full rounded-t-sm' />
              <figcaption className='p-3'>
                <p className='font-bold'>Large 4-room apartment with a beautiful terrace</p>
                <p className='text-teal-500 font-bold text-sm'>320 000$</p>
                <p className='text-black/70'>Barcelona IV</p>
              </figcaption>
            </figure>
          </section>
        </article>



        <article className='bg-white lg:py-26'>
          <section className='lg:px-25 px-10  py-10 flex lg:flex-row flex-col items-center-safe justify-between gap-3'>
            <div className='space-y-3 leading-5 lg:max-w-130'>
              <h2 className='font-bold text-[clamp(19px,4vw,2.5rem)]'>Testimonials</h2>
              <p>Explore our satisfied clients; testimonials and see how we've helped them find their perfect properly</p>

            </div>
            <div className="flex items-center-safe justify-end gap-4 w-full">
              <Button5
                icons={{ icon1: IoIosArrowBack }}
                extra={'bg-black/10 !rounded-full'}
              />
              <Button5
                icons={{ icon1: IoIosArrowForward }}
                extra={'bg-teal-500 !rounded-full'}
              />

            </div>
          </section>
          <section className='px-2 space-y-6'>
            <div className='flex items-center-safe gap-5 lg:overflow-hidden overflow-auto'>
              <div className='min-w-100 max-w-100 bg-teal-50 p-4 pt-5 pb-10 space-y-5'>
                <div>
                  <p className='text-sm'>We had a wonderful experience working with this real estate team. From the intial consultation to closing the deal, theit professionalism and expertise made the entire process smooth and stress-free. They truly understood our needs and found us the perfect home.</p>
                </div>

                <figure className='flex items-center-safe gap-2'>
                  <img src={client1} alt="client" className='w-12' />
                  <figcaption>
                    <p className='font-bold'>George Aminoff</p>
                    <p className='text-sm'>3 bedroom apartment in Madrid</p>
                  </figcaption>
                </figure>
              </div>

              <div className='min-w-100 max-w-100 bg-teal-50 p-4 pt-5 pb-10 space-y-5'>
                <div>
                  <p className='text-sm'>We had a wonderful experience working with this real estate team. From the intial consultation to closing the deal, theit professionalism and expertise made the entire process smooth and stress-free. They truly understood our needs and found us the perfect home.</p>
                </div>

                <figure className='flex items-center-safe gap-2'>
                  <img src={client2} alt="client" className='w-12' />
                  <figcaption>
                    <p className='font-bold'>Jocelyn Stanton</p>
                    <p className='text-sm'>2 bedroom apartment in Barcelona</p>
                  </figcaption>
                </figure>
              </div>

              <div className='min-w-100 max-w-100 bg-teal-50 p-4 pt-5 pb-10 space-y-5'>
                <div>
                  <p className='text-sm'>We had a wonderful experience working with this real estate team. From the intial consultation to closing the deal, theit professionalism and expertise made the entire process smooth and stress-free. They truly understood our needs and found us the perfect home.</p>
                </div>

                <figure className='flex items-center-safe gap-2'>
                  <img src={client3} alt="client" className='w-12' />
                  <figcaption>
                    <p className='font-bold'>Alice Schneica</p>
                    <p className='text-sm'>4 bedroom apartment in Madrid</p>
                  </figcaption>
                </figure>
              </div>

              <div className='min-w-100 max-w-100 bg-teal-50 p-4 pt-5 pb-10 space-y-5'>
                <div>
                  <p className='text-sm'>We had a wonderful experience working with this real estate team. From the intial consultation to closing the deal, theit professionalism and expertise made the entire process smooth and stress-free. They truly understood our needs and found us the perfect home.</p>
                </div>

                <figure className='flex items-center-safe gap-2'>
                  <img src={client1} alt="client" className='w-12' />
                  <figcaption>
                    <p className='font-bold'>George Aminoff</p>
                    <p className='text-sm'>3 bedroom apartment in Madrid</p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className='flex items-center-safe gap-2 justify-center-safe'>
              <div className='bg-black/10 w-2.5 h-2.5 rounded-full '></div>
              <div className='bg-black/10 w-2.5 h-2.5 rounded-full '></div>
              <div className='bg-teal-500 w-2.5 h-2.5 rounded-full '></div>
              <div className='bg-black/10 w-2.5 h-2.5 rounded-full '></div>
            </div>
          </section>
        </article>

        <article className='bg-white py-26 lg:px-25 px-5 flex lg:flex-nowrap flex-wrap justify-center-safe gap-20 '>
          <section>
            <div>
              <img src={staff1} alt="about us" className='sm:w-140 sm:h-95 rounded-sm' />
            </div>
          </section>
          <section className='w-150 space-y-5 lg:order-last order-first'>
            <h2 className='font-bold text-3xl'>About Us</h2>
            <div className='space-y-10'>
              <p>
                We are company that connects the world of real estate and finance.
                We provide a complete service for the sale, purchase or rental of real estate. Our advantage is more than 15 years of experience and soil in atractive locations in Slovakia with branches in Bratislava and Kosice.</p>

              <p>
                We have a connection to all banks on the slovak market, so we can solve everything under one roof. By constantly innovating our business activities,  we move forward and we are able to offer truly above-standard services that set us apart from the competition.
              </p>
            </div>
          </section>
        </article>



      </main>

      <FooterComponent/>
    </>
  )
}

export default LandingPage

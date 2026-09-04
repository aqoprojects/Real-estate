import React from 'react'
import { Avatar3 } from '@/Designs/base/Avatars';
import { GrSend } from "react-icons/gr";
import { InputField1 } from '@/Designs/base/Inputs';
import { Button1 } from '@/Designs/base/Buttons';

const FooterComponent = () => {
  return (
    
          <footer >
            <section className='bg-cyan-50 py-26  flex justify-center-safe'>
              <div className=' flex items-center-safe  max-w-300 w-250 justify-evenly'>
              <div>
                  <Avatar3
                    icons={{ icon1: GrSend }}
                    extra={'bg-transparent w-50 h-50 text-teal-500/10'}
                  />
                </div>
                <div className='w-100 space-y-4'>
                  <div>
                    <h3 className='font-semibold text-2xl'>Subscribe to newsletter</h3>
                    <p>Get the latest news and interesting offers and real estate</p>
                  </div>
                  <div className='flex items-stretch w-full gap-3'>
                    <InputField1
                      showDefault={false}
                      styles={{ input1: '!text-base px-1' }}
                      texts={{ placeholder1: 'Your e-mail address' }}
                      extra={'rounded-xs !w-full  !m-0 !justify-start bg-white'}
                    />
    
                    <Button1
                      showDefault={false}
                      texts={{ text1: 'Subscribe' }}
                      extra={'bg-transparent rounded-xs !py-0 !text-teal-500 rounded-none ring-2 !px-5'}
                    />
    
                  </div>
                </div>
              </div>
            </section>
    
    
            <section className='flex justify-between py-10  px-25 bg-teal-500'>
              <div className='max-w-35'>
                <img src="/Logo.png" alt="Logo" />
              </div>
              <nav className='lg:w-150'>
                <ul className='flex justify-between items-center-safe text-base [&>li]:cursor-pointer [&>li]:hover:font-medium [&>li]:hover:text-black text-white'>
                  <li>Top offers</li>
                  <li>Search in offers</li>
                  <li>References</li>
                  <li>About us</li>
                  <li>Our team</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </section>
          </footer>
  )
}

export default FooterComponent

import React from 'react'
import { Avatar1, Avatar3 } from '../base/Avatars'
import { FcWiFiLogo } from "react-icons/fc";
import { InputField1 } from '../base/Inputs';
import { AppleButton1, Button1, FaceBookButton1, GmailButton1 } from '../base/Buttons';
import { DropdownLine1 } from '../base/Dropdown';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';
import { TagCheckbox3 } from '../base/Tags';
import { CheckBox1, CheckBoxWithText1 } from '../base/Checkbox';

const AuthenticationPages = () => {
    return (
        <div>
            {/* <LoginPage1 /> */}
            {/* <LoginPage2 /> */}
            <LoginPage3 />
        </div>
    )
}

export default AuthenticationPages


export function LoginPage1() {
    return (
        <section className='max-w-90 my-5 mx-auto'>
            <div className='flex flex-col items-center-safe '>
                <Avatar3
                    showDefault={false}
                    icons={{ icon1: FcWiFiLogo }}
                    extra={'bg-transparent w-15 h-15'}
                />
                <div className='text-center'>
                    <h1 className='text-2xl font-boldy'>Log in to your account</h1>
                    <p className='text-black/60 font-medium'>Welcome back! Please enter your details.</p>
                </div>
            </div>
            <div className='py-6 flex flex-col gap-2 w-auto'>
                <InputField1
                    showDefault={false}
                    texts={{ placeholder1: 'Enter your email' }}
                    styles={{ input1: 'w-full !text-base placeholder:text-base' }}
                    extra={'w-full py-1 px-2 !block !ring-black/10'}
                    divStyle={{ width: '100%' }}
                />
                <Button1
                    showDefault={false}
                    texts={{ text1: 'Continue with email' }}
                    styles={{ text1: 'font-medium' }}
                    extra={'w-full py-2 justify-center'}
                />
            </div>
            <div className='flex items-center-safe gap-1'>
                <DropdownLine1 extra={'flex-1 bg-black/20'} />
                <p className='text-black/60 font-semibold'>OR</p>
                <DropdownLine1 extra={'flex-1 bg-black/20'} />
            </div>
            <div className='flex flex-col gap-3 py-6'>
                <GmailButton1 extra={'bg-transparent w-full justify-center-safe'} />
                <FaceBookButton1 extra={'bg-transparent w-full justify-center-safe'}>
                    <div className='flex gap-1 justify-center-safe items-center-safe text-black'>
                        <div className="w-7 h-7 text-black">
                            <FaFacebook className="size-full fill-blue-500" />
                        </div>
                        <p>Continue with Facebook</p>
                    </div>
                </FaceBookButton1>
                <AppleButton1 extra={'bg-transparent w-full justify-center-safe'}>
                    <div className='flex gap-1 justify-center-safe items-center-safe text-black'>
                        <div className="w-7 h-7 text-black">
                            <FaApple className="size-full fill-black" />
                        </div>
                        <p>Continue with Apple</p>
                    </div>
                </AppleButton1>
            </div>
            <div>
                <p className='text-black/60 text-sm text-center'>Don't have an account? <a className='text-indigo-600'>signup</a></p>
            </div>
        </section>
    )
}



export function LoginPage2() {
    return (
        <section className='max-w-90 my-5 mx-auto'>
            <div className='flex flex-col items-center-safe gap-3 my-6'>
                <Avatar3
                    showDefault={false}
                    icons={{ icon1: FcWiFiLogo }}
                    extra={'bg-transparent w-15 h-15'}
                />
                <div className='text-center leading-10'>
                    <h1 className='text-2xl font-boldy'>Log in to your account</h1>
                    <p className='text-black/60 font-medium'>Welcome back! Please enter your details.</p>
                </div>

                <div className='flex ring-1 ring-black/14 rounded-md w-full'>
                    <Button1
                        showDefault={false}
                        texts={{ text1: "Sign up" }}
                        extra={' flex-1 bg-black/3 !font-semibold !text-black/60 justify-center !py-1.5'}
                    />
                    <Button1
                        showDefault={false}
                        texts={{ text1: "Log in" }}
                        extra={'flex-1 bg-white !font-semibold !text-black  justify-center !py-1.5 ring-1 ring-black/14'}
                    />
                </div>
            </div>



            <div className=' flex flex-col gap-3 w-auto'>
                <InputField1
                    showDefault={false}
                    texts={{ text1: 'Email', placeholder1: 'Enter your email' }}
                    styles={{ input1: 'w-full !text-base placeholder:text-base' }}
                    extra={'w-full py-1 px-2 !ring-black/10'}
                    divStyle={{ width: '100%' }}
                    inputProps={{ type: 'email' }}
                />
                <InputField1
                    showDefault={false}
                    texts={{ text1: 'Password', placeholder1: '************' }}
                    icons={{ icon2: { icon: FaEye } }}
                    styles={{ input1: 'w-full !text-base placeholder:text-base' }}
                    extra={'w-full py-1 px-2 !ring-black/10'}
                    divStyle={{ width: '100%' }}
                    inputProps={{ type: 'password' }}
                />

                <div className='flex flex-row gap-1 justify-between items-center-safe font-medium'>
                    <CheckBoxWithText1
                        showDefault={false}
                        checkbox={<CheckBox1 extra={'!w-5 !h-5 !border-black/20'} />}
                        texts={{ text1: 'Remember for 30 days' }}
                        extra={'items-center-safe !text-[clamp(10px,3vw,1rem)]'}
                    />
                    <p className='text-purple-500 text-[clamp(10px,3vw,0.94rem)]'>Forget password</p>
                </div>

                <Button1
                    showDefault={false}
                    texts={{ text1: 'Sign in' }}
                    styles={{ text1: 'font-medium' }}
                    extra={'w-full py-2 justify-center'}
                />
            </div>

            <div className='flex flex-col py-4'>
                <GmailButton1
                    extra={'bg-transparent w-full justify-center-safe'}
                />

            </div>
            <div className='py-3'>
                <p className='text-black/60 text-sm text-center'>Don't have an account? <a className='text-indigo-600 font-medium'>signup</a></p>
            </div>
        </section>
    )
}

export function LoginPage3() {
    return (
        <article className='flex h-screen'>
            <section className='flex-1 flex justify-center-safe items-center-safe'>
                <section className='flex-1 max-w-90 my-5 mx-auto'>
                    <div className='flex flex-col gap-3 my-6'>
                        <Avatar3
                            showDefault={false}
                            icons={{ icon1: FcWiFiLogo }}
                            extra={'bg-transparent w-15 h-15'}
                        />
                        <div className='leading-10'>
                            <h1 className='text-2xl font-boldy'>Log in</h1>
                            <p className='text-black/60 font-medium'>Welcome back! Please enter your details.</p>
                        </div>
                    </div>



                    <div className=' flex flex-col gap-4 w-auto'>
                        <InputField1
                            showDefault={false}
                            texts={{ text1: 'Email', placeholder1: 'Enter your email' }}
                            styles={{ input1: 'w-full !text-base placeholder:text-base' }}
                            extra={'w-full py-1 px-2 !ring-black/10'}
                            divStyle={{ width: '100%' }}
                            inputProps={{ type: 'email' }}
                        />
                        <InputField1
                            showDefault={false}
                            texts={{ text1: 'Password', placeholder1: '************' }}
                            icons={{ icon2: { icon: FaEye } }}
                            styles={{ input1: 'w-full !text-base placeholder:text-base' }}
                            extra={'w-full py-1 px-2 !ring-black/10'}
                            divStyle={{ width: '100%' }}
                            inputProps={{ type: 'password' }}
                        />

                        <div className='flex flex-row gap-1 justify-between items-center-safe font-medium'>
                            <CheckBoxWithText1
                                showDefault={false}
                                checkbox={<CheckBox1 extra={'!w-4 !h-4 !border-black/20 rounded-sm'} />}
                                texts={{ text1: 'Remember for 30 days' }}
                                extra={'items-center-safe !text-[clamp(10px,3vw,0.92rem)]'}
                            />
                            <p className='text-purple-500 text-[clamp(10px,3vw,0.9rem)]'>Forget password</p>
                        </div>

                        <Button1
                            showDefault={false}
                            texts={{ text1: 'Sign in' }}
                            styles={{ text1: 'font-medium' }}
                            extra={'w-full py-2 justify-center'}
                        />
                    </div>

                    <div className='flex flex-col py-4'>
                        <GmailButton1
                            extra={'bg-transparent w-full justify-center-safe'}
                        />

                    </div>
                    <div className='py-3'>
                        <p className='text-black/60 text-sm text-center'>Don't have an account? <a className='text-indigo-600 font-medium'>signup</a></p>
                    </div>
                </section>
            </section>
            <section className='flex-1 bg-purple-800 flex justify-center-safe items-center-safe'>
                <section>
                    <Avatar1
                        images={{image1: 'vite.svg'}}
                        extra={'!rounded-none w-70 h-auto'}
                    />
                    <div className='text-center text-white'>
                        <h2 className='font-semibold  text-xl'>Welcome to your new dashboard</h2>
                        <p className='font-medium text-white/70'>Sign in to explore changes we've made.</p>
                    </div>
                    <div>
                        
                    </div>
                </section>
            </section>
        </article>
    )
}
import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import logo from "public/Logo.webp"
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr'

const Footer = () => {
    return (   
        <footer className='text-gray-500 '>
            <div className='justify-between mb-28 px-4 md:px-28 sm:px-1'>
                <div className='px-5 py-24 mx-auto flex  md:items-start text-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
                    <div className="space-y-6 w-64 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left">
                        <Link href={"/"} className="flex title-font font-medium items-start md:justify-start justify-start text-gray-900">
                            <Image src={logo} alt="Logo" />
                        </Link>
                        <p className="mt-2">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                        <div className='flex gap-6 '>
                            <Link href="https://twitter.com/" className="p-4 bg-[#F1F1F1] cursor-pointer rounded-lg"><GrTwitter size={20} color='black' /></Link>
                            <Link href="https://www.facebook.com/" className="p-4 bg-[#F1F1F1] cursor-pointer rounded-lg"><GrFacebookOption size={20} color='black' /></Link>
                            <Link href="https://www.linkedin.com/" className="p-4 bg-[#F1F1F1] cursor-pointer rounded-lg"><GrLinkedinOption size={20} color='black' /></Link>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">Company</h2>
                            <nav className="list-none mb-10 space-y-4">
                                <li className="text-gray-600 hover:text-gray-800">About</li>
                                <li className="text-gray-600 hover:text-gray-800">Terms of Use</li>
                                <li className="text-gray-600 hover:text-gray-800">Privacy Policy</li>
                                <li className="text-gray-600 hover:text-gray-800" >How it Works</li>
                                <li className="text-gray-600 hover:text-gray-800">Contact Us</li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">Support</h2>
                            <nav className="list-none mb-10 space-y-4">
                                <li className="text-gray-600 hover:text-gray-800">Support Carrer</li>
                                <li className="text-gray-600 hover:text-gray-800">24h Service</li>
                                <li className="text-gray-600 hover:text-gray-800">Quick Chat</li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">Contact</h2>
                            <nav className="list-none mb-10 space-y-4">
                                <li className="text-gray-600 hover:text-gray-800">Whatsapp</li>
                                <li className="text-gray-600 hover:text-gray-800">Support 24h</li>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-t-black py-3'>
                <div className="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-around ">
                    <p className="font-medium text-md text-gray-500  text-center sm:text-left mt-6 border-t-[#666666] grid grid-cols-auto items-center">Copyright © 2023 Dine Market</p>
                    <p className='font-medium text-md text-gray-500 text-center sm:text-left mt-6 border-t-[#666666]'>Design by. <span>Weird Design Studio</span></p>
                    <p className='font-medium text-md text-gray-500  text-center sm:text-left mt-6 border-t-[#666666] '>Code by. <Link href={"https://github.com/mishal-aslam"}><span className='text-slate-900'>mishal-aslam</span> on github</Link></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import { Badge } from '@/components/ui/badge'
import heroImage from "/public/hero-poster.webp"
import Image1 from "/public/img1.webp"
import Image2 from "/public/img2.webp"
import Image3 from "/public/img3.webp"
import Image4 from "/public/img4.webp"
import Image from 'next/image'
import { BsCart2 } from "react-icons/bs"

const Hero = () => {
    const btnText = "Start\n shopping";
    return (
        <section className='flex flex-col lg:flex-row gap-y-10 justify-between items-center py-8  px-4 md:px-28 sm:px-1'>
            {/* Left Div */}
            <div className="space-y-6 max-w-sm">
                <Badge className='py-3 px-6 rounded-lg bg-blue-100 text-blue-700 font-extrabold text-lg'>Sale 70%</Badge>
                <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">An Industrial Take on Streetwear</h1>
            <p className="text-gray-700">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <a
    href={"/allproducts"}
    aria-label="redirect the user to sale page"
    className="block"
>
    <button
        aria-label="redirect the user to sale page"
        className="flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-gray-800 text-white font-semibold py-3 px-5"
    >
        <BsCart2 />
        <p className="whitespace-pre leading-4">
            {btnText}
        </p>
    </button>
</a>

                <div className='grid grid-cols-4 h-12  mt-10 gap-4 '>
                    <Image src={Image1} alt='image' />
                    <Image src={Image2} alt='image' />
                    <Image src={Image3} alt='image' />
                    <Image src={Image4} alt='image' />
                </div>
            </div>

            {/* Right Div */}
            <div className="hidden md:flex bg-primaryWhite rounded-full ">
                <Image src={heroImage} alt="heroimg" />
            </div>
        </section>
    )
}

export default Hero


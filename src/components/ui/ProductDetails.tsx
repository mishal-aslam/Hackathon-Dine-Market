/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { BsCart2 } from "react-icons/bs";
// import { useAuth } from "@clerk/nextjs";

export default function ProductDetails({
    filteredData,
}: {
    filteredData: any;        
}) {
    const [quantity, setQuantity] = useState(1);
    function handleIncrement() {
        setQuantity(quantity + 1);
    }
    function handleDecrement() {
        setQuantity(quantity - 1);
    }
    async function handleAddToCart() {
        try {
          const res = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
            //   user_id: userId,
              product_id: filteredData._id,
              product_title: filteredData.title,
              product_price: filteredData.price * quantity,
              product_quantity: quantity,
              image_url: urlForImage(filteredData.image).url(),
            }),
          });
        } catch (error) {
          console.log("error", error);
        }
      }
    return (
        <div className="bg-white">
            <div className="pb-16 pt-6 sm:pb-24">
                <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-center items-center py-7">

                        {/* left */}
                        <div className="flex gap-x-4 md:gap-x-8">
                            {/* left */}
                            <div className="space-y-4">
                                <img
                                    width={100}
                                    height={100}
                                    src={urlForImage(filteredData.image).width(100).height(100).url()}
                                    alt=""
                                />
                            </div>

                            {/* right */}
                            <div className="w-[17rem] md:w-[33rem] flex flex-wrap-0">
                                <img
                                    width={1000}
                                    height={1000}
                                    src={urlForImage(filteredData.image).width(1000).height(1000).url()}
                                    alt=""
                                />
                            </div>

                        </div>
                        {/* right */}
                        <div className="p-6 space-y-8 px-4 md:px-28 sm:px-1">
                            <div>
                                <h1 className="text-3xl text-gray-700">{filteredData.title}</h1>
                                {/* <p className="text-pink-600 text-xl font-medium">{item.productTypes[1]}</p> */}
                            </div>
                            <div className="space-y-2">
                                <p className="text-lg font-semibold text-gray-800">Select Size</p>
                                <div className="flex gap-2 text-pink-600">
                                    <ul className='flex font-bold cursor-pointer text-gray-600 gap-5 mt-3 '>
                                        <li className='select-none cursor-pointer flex justify-center items-center w-9 h-9  rounded-full bg-white hover:bg-slate-200'>XS</li>
                                        <li className='select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-white hover:bg-slate-200'>S</li>
                                        <li className='select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-white hover:bg-slate-200'>M</li>
                                        <li className='select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-white hover:bg-slate-200'>L</li>
                                        <li className='select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-white hover:bg-slate-200'>XL</li>
                                    </ul>
                                </div>
                            </div>




                            <div className="mt-5 lg:col-span-6 items-center flex space-x-7" >
                            <p className="font-semibold text-xl text-gray-800 text-center py-5 ">Quantity:</p>
                                <div className="flex  w-fit mt-5">
                                    <button onClick={() => handleDecrement()} disabled={quantity === 1} className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-200"> - </button>
                                    <div className="text-black py-4 px-4 items-center">{quantity}</div>
                                    <button onClick={() => handleIncrement()} className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800"> + </button>
                                </div>


                            </div>
                            <div className="flex gap-x-8 items-center">
                                <button
                                    onClick={() => handleAddToCart()} className="flex items-center text-white bg-gray-900 border border-gray-500 px-4 py-2"
                                >
                                    <BsCart2 />
                                    &nbsp;
                                    &nbsp;
                                    Add to Cart
                                </button>
                                <p className="text-2xl font-semibold">${filteredData.price}{".00"}</p>
                            </div>
                        </div>

                    </div>





                    <div className=" px-4 md:px-28 sm:px-1 ">
                        <div className="relative py-14 px-2 border-b border-gray-400 ">
                            <h2 className="top-0 absolute text-6xl md:text-[9rem] font-bold text-gray-100 text-center mx-auto -z-50 ">Overview</h2>
                            <p className="font-semibold text-xl">Product Information</p>
                        </div>
                        <div className="text-gray-600 ">
                            <div className="md:flex px-2 py-4 grid grid-cols-1 md:grid-cols-2 ">
                                <div className="w-80">
                                    <h3 className="font-semibold mt-5 mb-5">PRODUCT DETAILS</h3>
                                </div>
                                <div className="md:pl-52 md:pr-9 ">
                                    <p className="md:pl-3 list-disc font-medium text-lg text-gray-900">
                                        {/* <PortableText content={filteredData.description} /> */}
                                        {filteredData.description}
                                    </p>
                                </div>
                            </div>

                            <div className=" md:flex px-2 py-4 grid grid-cols-1 md:grid-cols-2">
                                <div className="w-80 ">
                                    <h3 className="font-semibold mt-5 mb-5">PRODUCT CARE</h3>
                                </div>
                                <ul className="pl-3 list-disc font-semibold text-gray-900 ">
                                    <li>Hand wash using cold water.</li>
                                    <li>Do not using bleach.</li>
                                    <li>Hang it to dry.</li>
                                    <li>Iron on low temperature.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}








{/* <div className="mt-5 lg:col-span-6">
<div className="flex border w-fit mt-5">
    <button
        onClick={() => handleDecrement()}
        disabled={quantity === 1}
        className={`select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-200`}
    >
        -
    </button>
    <div className="text-black py-4 px-4 items-center">{quantity}</div>
    <button
        onClick={() => handleIncrement()}
        className={`px-3 py-1 text-center hover:bg-gray-200`}
    >
        +
    </button>
</div>
<div>
    <button
        onClick={handleAddToCart}
        className={`w-full overflow-hidden group text-center border border-black py-3 mt-5 text-lg font-bold flex items-center`}
    >
        <p className="flex-grow">Add to Cart</p>
    </button>
    <button className="w-full text-center text-white bg-black py-3 text-lg font-bold mt-3">
        Buy it now
    </button>
</div>

</div> */}


//  mishal aslam         
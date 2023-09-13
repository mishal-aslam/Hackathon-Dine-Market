/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import FetchData from "../../../../sanity/FetchData";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default async function page() {
  const data = await FetchData();
  return (
    <>
      <div className="text-center space-y-3 ">
        <p className="text-blue-800 text-sm font-bold">PRODUCTS</p>
        <h3 className="text-4xl text-gray-800 font-bold">Check What We Have</h3>
      </div>

      <section className="lg:max-auto md:mx-10 p-20 flex md:flex-row flex-col justify-center  px-4 md:px-20 sm:px-1">
        <Swiper
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

            {data.map((product: any, index: number) => (
          <SwiperSlide className="flex select-none hover:scale-110 duration-300 ">
              <Link
                href={`/product/${product.slug.current}`}
                key={index}
              >

                <div className="  ">
                  <img src={urlForImage(product.image).url()} alt="" className="w-96 h-[390px] object-cover object-top bg-slate-300" />
                  <h1 className="text-xl font-medium mt-2">{product.title}</h1>
                  <h1 className="text-xl font-normal">${product.price}.00</h1>
                </div>
              </Link>
          </SwiperSlide>
            ))}


        </Swiper>
      </section>
    </>
  )
}



// /* eslint-disable @next/next/no-async-client-component */
// /* eslint-disable react/jsx-key */
// /* eslint-disable @next/next/no-img-element */
// "use client"
// import React from "react";
// import FetchData from "../../../../sanity/FetchData";
// import { urlForImage } from "../../../../sanity/lib/image";
// import Link from "next/link";
// import Slider from "react-slick"; // Import Slick Carousel
// import "slick-carousel/slick/slick.css"; // Import Slick Carousel styles
// import "slick-carousel/slick/slick-theme.css"; // Import Slick Carousel theme


// export default async function Page() {
//     const data = await FetchData();
  
//     const settings = {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       infinite: true,
//       speed: 500,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//           },
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//       ],
//     };
  
//     return (
//       <>
//         <div className="text-center space-y-3">
//           <p className="text-blue-800 text-sm font-bold">PRODUCTS</p>
//           <h3 className="text-4xl text-gray-800 font-bold">Check What We Have</h3>
//         </div>
  
//         <section className="lg:max-auto md:mx-10 p-20 flex md:flex-row flex-col justify-center px-4 md:px-20 sm:px-1">
//           <Slider {...settings}>
//             {data.map((product: any, index: number) => (
//               <div key={index} className="flex select-none hover:scale-110 duration-300">
//                 <Link href={`/product/${product.slug.current}`}>
//                   <div className="  ">
//                     <img
//                       src={urlForImage(product.image).url()}
//                       alt=""
//                       className="w-96 h-[390px] object-cover object-top bg-slate-300"
//                     />
//                     <h1 className="text-xl font-medium mt-2">{product.title}</h1>
//                     <h1 className="text-xl font-normal">${product.price}.00</h1>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </Slider>
//         </section>
//       </>
//     );
//   }
  

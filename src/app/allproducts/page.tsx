/* eslint-disable @next/next/no-img-element */
import React from "react";
import FetchData from "../../../sanity/FetchData";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

export default async function Card() {
  const data = await FetchData();

  // Divide the data into groups based on screen size
  const groupedData = [];
  for (let i = 0; i < data.length; i += 4) { // Show 2 products per row on medium screens
    groupedData.push(data.slice(i, i + 4));
  }

  return (
    <div className="space-y-3 mt-8 ">
      {groupedData.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4"
        >
          {group.map((product: any, index: number) => (
            <Link href={`/product/${product.slug.current}`} key={index}>
              <div className="flex flex-col ">
                <img
                  src={urlForImage(product.image).url()}
                  alt=""
                  className="w-[250px] h-[270px] object-cover object-top bg-slate-300"
                />
                <div className="space-y-1 text-black font-semibold text-lg select-none">
                  <h1 className="text-xl font-medium mt-2">{product.title}</h1>
                  <h1 className="text-lg font-semibold text-slate-600">
                    Category: {product.category}
                  </h1>
                  <h1 className="text-xl font-midium">${product.price}.00</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

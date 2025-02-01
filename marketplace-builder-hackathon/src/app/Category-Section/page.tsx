"use client";
import React from "react";
import Image from "next/image";
import "./style.css";

function Category() {
  return (
    <section className="bg-black px-4 md:px-16 flex flex-col justify-between md:flex-col md:items-center py-12">
     
      <div className="text-center text-white w-full md:w-[50%]">
   
        <h1 className="text-[24px] md:text-[32px] text-[#FF9F0D] font-greatVibes">
          Food Category
        </h1>
        <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold mt-2">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h2>
      </div>

     
      <div className="mt-12 md:mt-0 w-full flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      
          {[
            { src: "/images/category4.jpeg", alt: "Sub Dish 1" },
            { src: "/images/category2.jpeg", alt: "Sub Dish 2" },
            { src: "/images/category3.jpeg", alt: "Sub Dish 3" },
            { src: "/images/category1.jpeg", alt: "Sub Dish 4" },
          ].map((image, index) => (
            <div key={index} className="w-full h-[200px]">
              <Image
                src={image.src}
                width={362}
                height={200}
                alt={image.alt}
                className="rounded w-full h-full object-cover fadeIn"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;

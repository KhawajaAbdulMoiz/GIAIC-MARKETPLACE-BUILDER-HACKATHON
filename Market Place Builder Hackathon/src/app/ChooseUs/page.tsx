import React from "react";
import Image from "next/image";
import "./style.css";
import { FaPizzaSlice, FaHamburger, FaIceCream } from "react-icons/fa";

const images = [
  { src: "/images/category4.jpeg", alt: "Dish 1" },
  { src: "/images/category2.jpeg", alt: "Dish 2" },
  { src: "/images/category3.jpeg", alt: "Dish 3" },
  { src: "/images/category1.jpeg", alt: "Dish 4" },
];

function ChooseUS() {
  return (
    <section className="bg-black px-4 md:px-16 flex flex-col-reverse md:flex-row justify-between md:items-center py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {images.map((image, index) => (
          <div key={index} className="w-full h-auto fadeInAnimation">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={300}
              height={300}
              className="rounded object-cover"
            />
          </div>
        ))}
      </div>

    
      <div className="ml-[30px] text-center md:text-left text-white w-full md:w-[50%] mb-6 md:mb-0">
        <h1 className="text-[24px] md:text-[32px] text-[#FF9F0D] font-greatVibes">
          Why Choose Us
        </h1>
        <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold mt-2">
          <span className="text-[#FF9F0D]">Ex</span>traordinary Taste and Experience
        </h2>
        <p className="text-[14px] md:text-[16px] mt-4 leading-relaxed">
          Discover the finest flavors crafted with passion. From fast food to
          desserts, our menu is a journey of extraordinary taste and delight.
        </p>
        <div className="flex flex-row gap-[20px] text-center ml-6">
          {[{ icon: FaHamburger, label: "Fast Food" }, { icon: FaPizzaSlice, label: "Lunch" }, { icon: FaIceCream, label: "Desserts" }].map(
            ({ icon: Icon, label }, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-yellow-500 text-white w-14 h-14 rounded-full">
                  <Icon size={28} />
                </div>
                <p className="text-white mt-2 text-sm">{label}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default ChooseUS;


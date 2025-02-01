import React from "react";
import Image from "next/image";

function MeetOurChefs() {
  return (
    <section className="bg-black py-12">

      <div className="text-center mb-12">
        <h1 className="text-[24px] md:text-[32px] text-[#FF9F0D] font-greatVibes">
          Chefs
        </h1>
        <h2 className="text-[24px] md:text-[40px] text-white lg:text-[50px] font-bold mt-2">
          <span className="text-[#FF9F0D]">Me</span>et our Chefs
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">

 
        <div className="bg-black border-4 border-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-80 md:w-96 rounded-lg overflow-hidden font-[sans-serif] transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="h-[256px]">
            <Image
              src="/images/chef1.jpeg"
              alt="Blog Image"
              width={400}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-sm text-white leading-relaxed text-[16px]">
              D.Estwood
            </h1>
            <h3 className="mt-6 px-0 py-2.5 rounded-lg text-[#FF9F0D] text-sm tracking-wider border-none outline-none bg-black hover:bg-grey-100">
              Chief Chef
            </h3>
          </div>
        </div>
        <div className="bg-black border-4 border-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-80 md:w-96 rounded-lg overflow-hidden font-[sans-serif] transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="h-[256px]">
            <Image
              src="/images/chef2.jpeg"
              alt="Blog Image"
              width={400}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-sm text-white leading-relaxed text-[16px]">
              D.Scoriesh
            </h1>
            <h3 className="px-0 py-2.5 rounded-lg text-[#FF9F0D] text-sm tracking-wider border-none outline-none bg-black hover:bg-grey-100">
              Assistant Chef
            </h3>
          </div>
        </div>
        <div className="bg-black border-4 border-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-80 md:w-96 rounded-lg overflow-hidden font-[sans-serif] transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="h-[256px]">
            <Image
              src="/images/chef3.jpeg"
              alt="Blog Image"
              width={400}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-sm text-white leading-relaxed text-[16px]">
              D.William
            </h1>
            <h3 className="px-0 py-2.5 rounded-lg text-[#FF9F0D] text-sm tracking-wider border-none outline-none bg-black hover:bg-grey-100">
              Advertising Chef
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetOurChefs;

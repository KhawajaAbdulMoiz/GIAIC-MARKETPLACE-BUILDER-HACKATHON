
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function NavbarTop() {
  return (
    <div className='bg-black h-[48px]'>


    <div className="max-w-7xl mx-auto h-[48px] text-white bg-black flex items-center justify-between px-4 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-sm md:text-base">
       
        <Link href="/">
        <Image
          src="/images/Foodtuck-logo.png"
          alt="hero"
          width={90}
          height={32}
          className="sm:w-[100px] mt-[20px]"
        />
        </Link>
      </div>
    </div>
    </div>
  );
}

export default NavbarTop;

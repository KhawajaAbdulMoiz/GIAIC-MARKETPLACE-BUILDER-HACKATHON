import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Menu } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';



function Navbar() {
  return (
    <div className="bg-black">
      <header className=" max-w-7xl mx-auto body-font">
        <div className="flex  items-center justify-between h-20 mx-5">
          <nav className=" hidden lg:flex gap-[40px] ml-6">
            <Link href="/" className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]">
              Home
            </Link>
            <Link
              href="/MenuPage"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Menu
            </Link>
            <Link
              href="/BlogsPage"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Blogs
            </Link>
            <Link
              href="/OurChef"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Our Chef
            </Link>
        
            <Link
              href="/ShoppingCart"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Checkout
            </Link>
            <Link
              href="/Contact"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Contact
            </Link>

          </nav>




          <div className='flex items-center mt-0'>
            <input type="text" placeholder='Search...' className='hidden sm:block md:block w-[263px] h-[40px] ml-[20px] border-[1px] border-[#FF9F0D] rounded-[20px] bg-black text-[white] placeholder:pl-2 pl-6 focus:outline-none'></input>

            <IoSearchOutline className='hidden sm:block w-6 h-6 relative right-8 text-white' />
            <div className='hidden md:flex gap-3'>
              <Link href={"/ShoppingCart"}>
              <MdOutlineShoppingCart className='w-6 h-6 text-white' />
              </Link>
            </div>



            <Sheet>
              <SheetTrigger className='lg:hidden'>
                <Menu className="text-white gap-[3px]" />
              </SheetTrigger>
              <SheetContent className='bg-white'>
                <SheetHeader>
                  <SheetTitle>MENU</SheetTitle>
                  <SheetDescription>Click outside to close</SheetDescription>
                </SheetHeader>
                <ul className='flex flex-col gap-5 mt-6'>
                  <li>
                    <Link href="/" className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Home</Link>
                  </li>
                  <li>
                    <Link href="/MenuPage" className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Menu</Link>
                  </li>
                  <li>
                    <Link href='/BlogsPage' className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Blog</Link>
                  </li>
 
                  <li>
                    <Link href="/OurChef" className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Our Chef</Link>
                  </li>
                  
                  <li>
                    <Link href="/ShoppingCart" className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Checkout</Link>
                  </li>
                  <li>
                    <Link href="/Contact" className="mr-5  hover:text-gray-900 hover:cursor-pointer hover:underline">Contact</Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>

        </div>

      </header>
    


    </div>
  )
}

export default Navbar
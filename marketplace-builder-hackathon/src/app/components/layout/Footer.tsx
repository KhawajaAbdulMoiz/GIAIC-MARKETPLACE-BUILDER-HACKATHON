import React from "react";
import Image from "next/image";


import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-black">

      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-[135px] py-[50px]">
        <div className="text-white md:w-[50%] w-[100%]">
          <h2 className="text-[20px] md:text-[32px] font-semibold"><span className="text-[#FF9F0D]">St</span>ill Need Our Support?</h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">Don&#39;t wait make a smart & logical quote here. Its pretty easy.</p>
        </div>

        <div className="flex md:mt-0 mt-[20px]">
          <input type="text" placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2 placeholder:text-white"
          />
          <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">Subscribe Now</button>
        </div>


      </div>

      <hr className="my-4 border-[#FF9F0D] mx-[135px]" />

      <div className="mx-auto w-full max-w-screen-xl">
        <div className="text-center grid grid-cols-1 md:gap-[50px] md:text-left px-0 md:grid-cols-2 md:px-[135px] py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-[24px] font-semibold text-white">
              Blog List
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  Corporate clients and leisure travelers has been relying on
                  Groundlink for dependab safe, and professional chauffeured car
                  service in major cities across World.
                </p>
              </li>
              <li className="gap-[0px] flex sm:gap-[16.5px]">
                <div className="ml-[30%] md:ml-0 bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>

                <div className="ml-[5%] sm:ml-0 sm:mb-[2px] mb-[60px]">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">
                    Opening Houres
                  </h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Mon - Sat(8.00 - 6.00)
                  </h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Sunday -_- Closed
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-[24px] font-semibold text-white">
              Useful Links
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4">
                <a href="/MenuPage" className="hover:underline  decoration-[#FF9F0D]">
                  Menu
                </a>
              </li>
              <li className="mb-4">
                <a href="/BlogsPage" className="hover:underline  decoration-[#FF9F0D]">
                  Blogs
                </a>
              </li>
              <li className="mb-4">
                <a href="/BlogList" className="hover:underline  decoration-[#FF9F0D]">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="/ShoppingCart" className="hover:underline  decoration-[#FF9F0D]">
                  Checkout
                </a>
              </li>

              <li className="mb-4">
                <a href="/Contact" className="hover:underline  decoration-[#FF9F0D]">
                  Contact
                </a>
              </li>

             
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold text-white">
              Help?
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline  decoration-[#FF9F0D]">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline  decoration-[#FF9F0D]">
                  Term & conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline  decoration-[#FF9F0D]">
                  Reporting
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline  decoration-[#FF9F0D]">
                  Documentation
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline  decoration-[#FF9F0D]">
                  Support Policy
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline  decoration-[#FF9F0D]">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold text-white">
              Recent Post
            </h2>
            <ul className="ml-[30%] md:ml-0 text-gray-500 dark:text-gray-400 font-medium space-y-[14px]">
            
              <li className="flex gap-[16.5px]">
                <Image
                  src="/images/footer1.png"
                  alt="Food"

                  width={50}
                  height={30}
                  className="rounded"
                />
                <div className="ml-1">
                  <h2
                    className="
                      text-[16px] 
                      text-[#FFFFFF] 
                      font-inter 
                      font-normal 
                      leading-[24px] 
                      opacity-[.49] 
                      w-[96px] 
                      h-[24px] 
                      ml-[75px]
                      "
                  >
                    20 Feb 2022
                  </h2>
                  <h3 className="font-inter 
                      text-[18px] 
                      font-normal 
                      leading-[26px] 
                      text-left 
                      decoration-skip-ink-none text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>

       
              <li className="flex gap-[16.5px] ">
                <Image
                  src="/images/footer2.png"
                  alt="Food"
                  width={50}
                  height={30}
                  className="rounded"
                />
                <div className="ml-1">
                  <h2
                    className="
                      text-[16px] 
                      text-[#FFFFFF] 
                      font-inter 
                      font-normal 
                      leading-[24px] 
                      opacity-[.49] 
                      w-[96px] 
                      h-[24px] 
                      ml-[75px]
                    "
                  >
                    20 Feb 2022
                  </h2>
                  <h3 className="font-inter 
                      text-[18px] 
                      font-normal 
                      leading-[26px] 
                      text-left 
                      decoration-skip-ink-none text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>

            
              <li className="flex gap-[16.5px]">
                <Image
                  src="/images/footer3.png"
                  alt="Food"
                  width={50}
                  height={30}
                  className="rounded"
                />
                <div className="ml-1">
                  <h2
                    className="
                      text-[16px] 
                      text-[#FFFFFF] 
                      font-inter 
                      font-normal 
                      leading-[24px] 
                      opacity-[.49] 
                      w-[96px] 
                      h-[24px] 
                      ml-[75px]
                    "
                  >
                    20 Feb 2022
                  </h2>
                  <h3 className="t    font-inter 
                      text-[18px] 
                      font-normal 
                      leading-[26px] 
                      text-left 
                      decoration-skip-ink-none text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>
            </ul>

          </div>
        </div>
        <div className="px-4 py-6 bg-[#FF9F0D] md:flex md:items-center md:justify-between rounded-[20px]">
          <span className="text-sm text-white text-center md:text-left block">
            Copyright &copy; 2024 by Khawaja Abdul Moiz. All Rights Reserved.
          </span>

          <div className="flex justify-center gap-4 mt-4 md:mt-0">
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded">
              <FaFacebookF className="text-[#4F4F4F] text-lg" />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded">
              <FaTwitter className="text-[#4F4F4F] text-lg" />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded">
              <FaInstagram className="text-[#4F4F4F] text-lg" />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded">
              <FaYoutube className="text-[#4F4F4F] text-lg" />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded">
              <FaPinterest className="text-[#4F4F4F] text-lg" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
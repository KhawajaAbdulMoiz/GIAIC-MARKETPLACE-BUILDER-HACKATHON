"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import "./style.css";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-5 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/images/heroimage.jpg)',
                    opacity: 0.1,
                }}
            ></div>
        
            <div
                className="hidden md:flex flex-col justify-center gap-12"
                style={{ animation: 'slideInLeft 1s ease-out forwards' }}
            >
                <FaFacebookF className="text-white text-[20px] hover:text-[#FF9F0D] transform hover:scale-110 transition-all duration-300 ease-in-out " />
                <FaTwitter className="text-white text-[20px] hover:text-[#FF9F0D] transform hover:scale-110 transition-all duration-300 ease-in-out" />
                <FaPinterest className="text-white text-[20px] hover:text-[#FF9F0D] transform hover:scale-110 transition-all duration-300 ease-in-out" />
            </div>

            <div className="ml-[20px] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-6" style={{ animation: 'fadeInUp 1.5s ease-out forwards' }}>
                    <p className="font-[32px] font-greatVibes text-yellow-400 text-[32px] animate-pulse">
                        It&apos;s Quick & Amusing!
                    </p>
                    <h1 className="text-5xl font-bold leading-tight">
                        <span className="text-yellow-400">T</span>he Art of speed <br />
                        food <span className="text-yellow-400">Quality</span>
                    </h1>
                    <p className="text-gray-300">
                    Indulge in a World of Flavor: Fresh, Delicious, and Crafted to Satisfy Every Craving!
                    </p>
                    <Link href = "/MenuPage">
                    <button className="mt-4 bg-[#FF9F0D] text-white font-semibold py-3 px-6 shadow-lg rounded-[20px] hover:bg-yellow-500 transition transform hover:scale-105">
                        See Menu
                    </button>
                    </Link>
                </div>
                <div className="relative flex justify-center">
                    <Image
                        src="/images/hero-section.png"
                        alt="hero"
                        width={624.15}
                        height={633.51}
                        className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[624.15px] lg:h-[633.51px] transition-transform duration-700 ease-in-out transform hover:scale-110"
                        style={{ animation: 'fadeIn 2s ease-in forwards' }}
                    />
                </div>
            </div>
        </section>
    );
}

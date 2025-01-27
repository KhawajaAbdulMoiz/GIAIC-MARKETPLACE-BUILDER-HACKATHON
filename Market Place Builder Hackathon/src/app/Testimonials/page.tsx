import React from "react";
import Image from "next/image";

function Testimonial() {
  return (
    <section className="bg-black text-white">
      <div className="py-16 px-4 md:px-16 text-center">
        <h3 className="text-yellow-500 text-xl italic mb-2 font-greatVibes">Testimonials</h3>
        <h2 className="text-4xl font-bold mb-12">What Our Clients Are Saying</h2>

        <div className="relative bg-gray-900 p-8 rounded-lg shadow-lg mx-auto max-w-3xl hover:scale-105 transition-all duration-300">
          <Image
            src="/images/client.jpg"
            alt="Client testimonial"
            width={80}
            height={80}
            className="rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 border-4 border-gray-900"
          />
          <p className="text-gray-400 text-sm italic mb-4">
            <span className="text-yellow-500 text-2xl">&quot;</span> FoodHub has truly transformed how we manage our menu. Their service is seamless, reliable, and always on point. Its a game changer for our business{" "}
            <span className="text-yellow-500 text-2xl">&quot;</span>
          </p>
          <div className="flex justify-center mb-4">
            <span className="text-yellow-500 text-lg">★★★★★</span>
          </div>
          <h4 className="font-bold">Alamin Hasan</h4>
          <p className="text-sm text-gray-500">Food Specialist</p>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/images/banner.jpg"
          alt="Food Process"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-16">
          <h3 className="text-yellow-500 text-xl italic mb-2 font-greatVibes">
            Restaurant Active Process
          </h3>
          <h2 className="text-4xl font-bold text-white mb-6">
            We Document Every Food <br /> Bean Process Until It Is Saved
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Capturing Every Detail of the Beans Life Cycle, Every Step of the Way
          </p>
          <div className="flex space-x-4">
            <button className="bg-transparent text-white px-6 py-3 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] bg-black text-[white] placeholder:pl-2 pl-6 focus:outline-none transition hover:bg-yellow-500 hover:text-black">
              Read More
            </button>
            <button className="flex items-center bg-transparent text-yellow-500 border border-yellow-500 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 hover:text-black transition">
              <span>Play Video</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6 ml-2"
              >
                <path d="M6.79 10.481L11.315 8 6.79 5.519v4.962z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

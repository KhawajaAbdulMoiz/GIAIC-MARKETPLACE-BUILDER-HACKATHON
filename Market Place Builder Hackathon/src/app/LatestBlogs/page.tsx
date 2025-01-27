import React from "react";
import Image from "next/image";

const blogs = [
  {
    date: "10 February 2025",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    image: "/images/category2.jpeg",
  },
  {
    date: "12 February 2025",
    title: "Curabitur Etiam Fermentum Nullam Risus",
    image: "/images/menu6.jpeg",
  },
  {
    date: "15 February 2025",
    title: "Viverra Orci Pellentesque Pretium Quisque",
    image: "/images/rool.jpeg",
  },
];

export default function LatestBlogs() {
  return (
    <section className="bg-black py-12 animate__fadeIn">
      <div className="text-center mb-12 animate__fadeIn animate__delay-1s">
        <h1 className="text-[24px] md:text-[32px] text-[#FF9F0D] font-greatVibes">
          Blog Post
        </h1>
        <h2 className="text-[24px] md:text-[40px] text-white lg:text-[50px] font-bold mt-2">
          <span className="text-[#FF9F0D]">La</span>test News And Blogs
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-black border-[1px] border-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full sm:w-80 md:w-96 rounded-lg overflow-hidden font-[sans-serif] transform transition-transform duration-300 hover:scale-105 animate__cardAnimation animate__delay-2s"
          >
            <div className="h-[256px]">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mt-6 px-0 py-2.5 rounded-lg text-[#FF9F0D] text-sm tracking-wider border-none outline-none bg-black hover:bg-grey-100">
                {blog.date}
              </h3>
              <h1 className="mt-4 text-sm text-white leading-relaxed text-[30px]">
                {blog.title}
              </h1>
              <button className="bg-transparent text-white px-3 py-3 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] bg-black text-[white] placeholder:pl-2 pl-6 focus:outline-none transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

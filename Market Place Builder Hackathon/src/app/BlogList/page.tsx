import Image from 'next/image';
import { IoChevronForwardOutline } from 'react-icons/io5';

export default function BlogList() {
    return (
        <>

            <header className="relative bg-black">
                <div
                    className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/mostused.jpg')" }}
                >

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 animate-fade-in">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-bounce">Blog List</h1>
                        <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2 animate-slide-in-up">
                            <span>Home</span>
                            <IoChevronForwardOutline />
                            <span className="text-[#FF9F0D]">Blog List</span>
                        </p>
                    </div>
                </div>
            </header>

            <div className='relative w-full bg-white'>

                <div className='w-full flex flex-col md:flex-row bg-white py-12'>
                    {/* Left Side */}
                    <div className='w-full md:w-[60%] px-4'>
                        <Image
                            src='/images/category2.jpeg'
                            alt='Blog Image'
                            width={872}
                            height={520}
                            className='mb-4'
                        />
                        <h1 className='font-bold text-2xl mb-6 text-[#333333]'>10 Reasons To Do A Digital Detox Challenge</h1>
                        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>
                            Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.
                        </p>
                        <br />
                        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>
                            Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.
                        </p>


                        <button className="mt-[20px] mb-[20px] bg-[#FF9F0D] text-white px-6 py-3 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] text-[white] placeholder:pl-2 pl-6 focus:outline-none transition">
                            Read More
                        </button>

                        <Image
                            src='/images/menu6.jpeg'
                            alt='Blog Image'
                            width={872}
                            height={520}
                            className='mb-4'
                        />
                        <h1 className='font-bold text-2xl mb-6 text-[#333333]'>Traditional Soft Pretzals with Sweet Beer Cheese</h1>
                        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>
                            Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.
                        </p>
                        <br />
                        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>
                            Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.
                        </p>

                        <button className="mt-[20px] mb-[20px] bg-[#FF9F0D] text-white px-6 py-3 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] text-[white] placeholder:pl-2 pl-6 focus:outline-none transition">
                            Read More
                        </button>

                        <Image
                            src='/images/menu7.jpeg'
                            alt='Blog Image'
                            width={872}
                            height={520}
                            className='mb-4'
                        />
                        <h1 className='font-bold text-2xl mb-6 text-[#333333]'>The Ultimate Hangover Burger</h1>
                        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>
                            Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.
                        </p>
                        <br />
                        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>
                            Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.
                        </p>

                        <button className="mt-[20px] mb-[20px] bg-[#FF9F0D] text-white px-6 py-3 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] text-[white] placeholder:pl-2 pl-6 focus:outline-none transition">
                            Read More
                        </button>
                        <div className='mt-12'>
                            <h1 className='text-2xl font-bold'>Comments - 03</h1>
                            <div className='mt-10'>
                                <h2 className='text-xl border-b-[1px] pb-4 font-bold'>Post a Comment</h2>
                                <div className='flex gap-4 mt-5'>
                                    <input
                                        placeholder='Name'
                                        type='text'
                                        className='w-full md:w-[48%] px-4 py-3 border border-gray-300'
                                    />
                                    <input
                                        placeholder='Email'
                                        type='email'
                                        className='w-full md:w-[48%] px-4 py-3 border border-gray-300'
                                    />
                                </div>
                                <textarea
                                    placeholder='Write a Comment'
                                    className='w-full mt-4 p-4 border border-gray-300 h-32'
                                />
                                <button className="mt-[20px] mb-[20px] bg-[#FF9F0D] text-white px-6 py-3 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] text-[white] placeholder:pl-2 pl-6 focus:outline-none transition">
                                    Post a Comment
                                </button>
                            </div>
                        </div>
                    </div>

         
                    <div className='w-full md:w-[40%] px-4'>
                      
                        <div className='flex items-center mb-8'>
                            <input
                                placeholder='Search Your Keyword'
                                type="text"
                                className='w-full px-4 py-3 bg-zinc-100 border border-gray-300'
                            />
                        </div>


                        <div className='bg-gray-100 p-4 mb-8'>
                            <h2 className='font-bold text-lg'>Recent Posts</h2>
                            <div className='space-y-4'>
                                <Image
                                    src='/images/menu5.jpeg'
                                    alt='Recent Post 1'
                                    width={323}
                                    height={107}
                                    className='cursor-pointer'
                                />
                                <Image
                                    src='/images/menu6.jpeg'
                                    alt='Recent Post 2'
                                    width={323}
                                    height={107}
                                    className='cursor-pointer'
                                />
                            </div>
                        </div>

                        <div className='bg-gray-100 p-4'>
                            <Image
                                src='/images/menu3.jpeg'
                                alt='Filter Menu'
                                width={323}
                                height={62}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className='bg-gray-100 p-4'>
                            <Image
                                src='/images/menu10.jpeg'
                                alt='Filter Menu'
                                width={323}
                                height={62}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className='bg-gray-100 p-4'>
                            <Image
                                src='/images/menu9.jpeg'
                                alt='Filter Menu'
                                width={323}
                                height={62}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className='bg-gray-100 p-4'>
                            <Image
                                src='/images/menu19.jpeg'
                                alt='Filter Menu'
                                width={323}
                                height={62}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className='bg-gray-100 p-4'>
                            <Image
                                src='/images/category4.jpeg'
                                alt='Filter Menu'
                                width={323}
                                height={62}
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

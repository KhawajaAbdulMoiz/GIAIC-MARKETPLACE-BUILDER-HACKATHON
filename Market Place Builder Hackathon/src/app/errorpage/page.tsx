import { IoChevronForwardOutline } from "react-icons/io5";


export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white">
    
      <header className="relative bg-black">
      <div
        className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/mostused.jpg')"}}>
  
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">404 Error</h1>
          <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
            <span className="text-white ">Home</span>
            <IoChevronForwardOutline />
            <span  className="text-[#FF9F0D]">404</span>
          </p>
        </div>
      </div>
    </header>

      {/* Error Form */}
      <section className="py-16">
  <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8 flex flex-col justify-center items-center text-center">
    <h1 className="text-5xl md:text-8xl font-bold text-[#FF9F0D] mb-4">
      404
    </h1>
    <h3 className="text-black text-base md:text-3xl mb-4 font-bold">
    OOPS!Looks like Something Going Wrong
    </h3>
    <p className="text-xl md:text-1xl font-semibold text-gray-400">
    Page Cannot be found! we&apos;ll have it figured out in no time.
    Menwhile, cheek out these fresh ideas:
    </p>
  </div>
  
  <div className="flex items-center justify-center">
  <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] text-[white] placeholder:pl-2 pl-6 focus:outline-none transition">
    Read More
  </button>
</div>

</section>


     
    </div>
  );
}
"use client";

import React, { useEffect, useState } from "react";
import { sanityClient } from "../../sanity-nextjs/src/sanity/lib/client";
import { urlFor } from "../../sanity-nextjs/src/sanity/lib/image";
import { chefs } from "../../sanity-nextjs/src/sanity/lib/queries";
import { Chef } from "../../sanity-nextjs/types/chef";
import { IoChevronForwardOutline } from "react-icons/io5";

const ChefListing = () => {
  const [chef, setChef] = useState<Chef[]>([]);
  const [filteredChefs, setFilteredChefs] = useState<Chef[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchChefs() {
      try {
        const fetchedchef: Chef[] = await sanityClient.fetch(chefs);
        setChef(fetchedchef);
        setFilteredChefs(fetchedchef); // Initialize the filtered chefs
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    }
    fetchChefs();
  }, []);

  useEffect(() => {
    // Filter chefs based on the search query
    const results = chef.filter((c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredChefs(results);
  }, [searchQuery, chef]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-black">
        <div
          className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mostused.jpg')" }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-bounce">
              Our Chef
            </h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2 animate-slide-in-up">
              <span>Home</span>
              <IoChevronForwardOutline />
              <span className="text-[#FF9F0D]">Our Chef</span>
            </p>
          </div>
        </div>
      </header>

      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search chefs..."
          className="w-3/4 md:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <main className="flex flex-wrap justify-center gap-6 p-6">
        {filteredChefs.length > 0 ? (
          filteredChefs.map((chef) => (
            <div
              key={chef._id}
              className="bg-black border-4 border-white shadow-lg w-full sm:w-80 md:w-96 rounded-lg overflow-hidden font-[sans-serif] transform transition-all duration-300 ease-in-out hover:scale-105 chef-card"
            >
              <div className="h-[256px] chef-img-container">
                <img
                  src={urlFor(chef.image).url()}
                  alt={`Image of ${chef.name}`}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out transform chef-img"
                />
              </div>
              <div className="p-6 text-center">
                <h1 className="text-white text-lg font-semibold chef-name">
                  {chef.name}
                </h1>
                <h3 className="text-[#FF9F0D] text-sm mt-2">
                  {chef.position}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{chef.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-6">
            No chefs found matching your search.
          </p>
        )}
      </main>
    </div>
  );
};

export default ChefListing;

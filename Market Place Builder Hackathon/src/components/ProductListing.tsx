"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "./Cart";
import { foods } from "../../sanity-nextjs/src/sanity/lib/queries";
import { Food } from "../../sanity-nextjs/types/food";
import { sanityClient } from "../../sanity-nextjs/src/sanity/lib/client";
import { urlFor } from "../../sanity-nextjs/src/sanity/lib/image";
import CartPopup from "./CartPopup";

const ProductListing = () => {
  const [food, setFood] = useState<Food[]>([]);
  const [filteredFood, setFilteredFood] = useState<Food[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupItem, setPopupItem] = useState<Food | null>(null);
  const [wishlist, setWishlist] = useState<Food[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchFoodItems() {
      try {
        const fetchedFood: Food[] = await sanityClient.fetch(foods);
        setFood(fetchedFood);
        setFilteredFood(fetchedFood);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    }
    fetchFoodItems();
  }, []);

  useEffect(() => {
    let updatedFood = food;
    if (searchTerm) {
      updatedFood = updatedFood.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (categoryFilter !== "All") {
      updatedFood = updatedFood.filter(
        (item) => item.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    setFilteredFood(updatedFood);
  }, [searchTerm, categoryFilter, food]);

  const handleAddToCart = (item: Food) => {
    addToCart({
      name: item.name,
      price: item.price,
      quantity: 1,
      image: urlFor(item.image).url(),
      id: 0,
    });
    setPopupItem(item);
    setIsPopupOpen(true);
    setTimeout(() => setIsPopupOpen(false), 3000);
  };

  const handleWishlistToggle = (item: Food) => {
    const isAlreadyInWishlist = wishlist.some((wishlistItem) => wishlistItem._id === item._id);

    if (!isAlreadyInWishlist) {
      setWishlist([...wishlist, item]);
    } else {
      setWishlist(wishlist.filter((wishlistItem) => wishlistItem._id !== item._id));
    }
  };

  const handleRemoveFromWishlist = (item: Food) => {
    setWishlist(wishlist.filter((wishlistItem) => wishlistItem._id !== item._id));
  };

  return (
    <div className="p-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3"
        >
          <option value="All">All Categories</option>
          {Array.from(new Set(food.map((item) => item.category))).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFood.map((item) => (
          <div key={item._id} className="border p-4 rounded-md shadow-lg">
            {item.image?.asset._ref && (
              <img
                src={urlFor(item.image).url()}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.category}</p>
            <div className="text-xl font-bold mt-2">Rs{item.price.toFixed(2)}</div>
            <p className={`mt-4 ${item.available ? "text-green-600" : "text-red-600"}`}>
              {item.available ? "In Stock" : "Out of Stock"}
            </p>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-transparent text-black px-6 py-2 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] bg-black text-[white] placeholder:pl-2 pl-6 focus:outline-none transition hover:bg-yellow-500"
              disabled={!item.available}
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleWishlistToggle(item)}
              className={`mt-2 text-xl px-4 ${wishlist.some((wishlistItem) => wishlistItem._id === item._id) ? "text-red-500" : "text-gray-500"} hover:text-red-600`}
            >
              {wishlist.some((wishlistItem) => wishlistItem._id === item._id) ? "Remove from Wishlist" : "Wishlist"}
            </button>
          </div>
        ))}
      </div>

     
      {wishlist.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Your Wishlist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div key={item._id} className="border p-4 rounded-md shadow-lg">
                {item.image?.asset._ref && (
                  <img
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.category}</p>
                <div className="text-xl font-bold mt-2">Rs{item.price.toFixed(2)}</div>
                <button
                  onClick={() => handleRemoveFromWishlist(item)}
                  className="mt-2 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <CartPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} item={popupItem} />
    </div>
  );
};

export default ProductListing;

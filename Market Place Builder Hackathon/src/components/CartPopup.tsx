"use client"
import React from "react";
import { Food } from "../../sanity-nextjs/types/food"; 
import { urlFor } from "../../sanity-nextjs/src/sanity/lib/image";
interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  item: Food | null; 
}

const CartPopup: React.FC<CartPopupProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold">Item Added to Cart!</h2>
        <div className="mt-4">
          {item.image?.asset._ref && (
            <img
              src={urlFor(item.image).url()} 
              alt={item.name}
              className="w-16 h-16 object-cover rounded mb-2"
            />
          )}
          <p className="text-lg">{item.name}</p>
          <p className="text-sm text-gray-600">Rs{item.price.toFixed(2)}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartPopup;

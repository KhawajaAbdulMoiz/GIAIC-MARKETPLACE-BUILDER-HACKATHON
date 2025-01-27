"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCart, CartItem } from "@/components/Cart"; 
import OrderSuccessPopup from "@/components/OrderSuccessPopup"; 

const Checkout = () => {
  const { cartItems, clearCart } = useCart(); 
  const [isClient, setIsClient] = useState(false);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [area, setArea] = useState("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePlaceOrder = () => {
    if (!fullName || !address || !phone || !region || !streetNumber || !area) {
      alert("Please fill in all the details before placing the order.");
      return;
    }

    
    setIsOrderPlaced(true);

 
    setTimeout(() => {

      clearCart();
      setIsOrderPlaced(false);
    }, 2000);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Checkout</h2>

 
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-red-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item: CartItem, index: number) => (
              <div key={index} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div className="flex-1">
                    <h4 className="text-lg font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-lg font-semibold">Rs{(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
      </div>

   
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h3 className="text-2xl font-semibold mb-4">Enter Your Details</h3>

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-lg font-medium mb-2">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-lg font-medium mb-2">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-medium mb-2">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="region" className="block text-lg font-medium mb-2">Region</label>
          <input
            type="text"
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="Enter your region"
            className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="streetNumber" className="block text-lg font-medium mb-2">Street Number</label>
          <input
            type="text"
            id="streetNumber"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
            placeholder="Enter your street number"
            className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="area" className="block text-lg font-medium mb-2">Area</label>
          <input
            type="text"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Enter your area"
            className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handlePlaceOrder}
          className={`bg-transparent text-black px-6 py-2 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] bg-black text-[white] placeholder:pl-2 pl-6 focus:outline-none transition hover:bg-yellow-500 ${
            !fullName || !address || !phone || !region || !streetNumber || !area
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          disabled={!fullName || !address || !phone || !region || !streetNumber || !area}
        >
          Order Now
        </button>
      </div>

 
      {isOrderPlaced && <OrderSuccessPopup />}

    
      {isOrderPlaced && (
        <div className="mt-4 text-center">
          <Link href="/" passHref>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
              Go Back to Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;

"use client";
import React, { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useCart } from "@/components/Cart";
import Link from "next/link";

const ShoppingCart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1);
      setCouponMessage("Coupon applied successfully!");
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 2.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <header className="relative bg-black">
        <div
          className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mostused.jpg')" }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-bounce">Checkout</h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2 animate-slide-in-up">
              <span>Home</span>
              <IoChevronForwardOutline />
              <span className="text-[#FF9F0D]">Checkout</span>
            </p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="py-12 px-6 md:px-16 lg:px-28">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Table */}
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-4 font-semibold">Product</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Quantity</th>
                  <th className="p-4 font-semibold">Total</th>
                  <th className="p-4 font-semibold">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4 flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-4">Rs{item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                        className="w-16 border rounded px-2 py-1 text-center"
                        min="1"
                      />
                    </td>
                    <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-4 text-red-500 cursor-pointer" onClick={() => removeFromCart(item.id)}>
                      &times;
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Coupon and Summary */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">
              {/* Coupon Section */}
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter your code"
                    className="flex-grow border rounded-l px-4 py-2"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-orange-500 text-white px-6 py-2 rounded-r font-semibold"
                    disabled={!couponCode}
                  >
                    Apply
                  </button>
                </div>
                {couponMessage && <p className="mt-2 text-sm text-green-500">{couponMessage}</p>}
              </div>

              {/* Summary Section */}
              <div className="w-full lg:w-1/3">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex justify-between mb-4">
                    <span>Cart Subtotal</span>
                    <span>Rs{cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span>Discount</span>
                    <span>Rs{(cartSubtotal * discount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span>Shipping Charges</span>
                    <span>Rs{shippingCharges.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Amount</span>
                    <span>Rs{totalAmount.toFixed(2)}</span>
                  </div>
                  <Link href="/Checkout">
                  <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    Proceed to Checkout
                  </button>
                </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ShoppingCart;

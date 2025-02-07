"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCart, CartItem } from "@/components/Cart";
import OrderSuccessPopup from "@/components/OrderSuccessPopup";
import { sanityClient } from "sanity-nextjs/src/sanity/lib/client";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [formValues, setFormValues] = useState({
    fullname: "",
    phone: "",
    address: "",
    region: "",
    streetnumber: "",
    area: "",
    email: "",
  });
  const [foodItems, setFoodItems] = useState<{ [key: string]: any }>({}); // Store multiple food items by ID
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

 
  useEffect(() => {
    const fetchFoodItems = async () => {
      if (cartItems.length > 0) {
        const foodIds = cartItems.map((item) => item.id); // Gather food ids from cart items
        const fetchedFoodItems = await sanityClient.fetch(
          `*[_type == "food" && _id in $foodIds] { _id, name, price, image }`,
          { foodIds }
        );
        const foodItemsMap = fetchedFoodItems.reduce((acc: any, food: any) => {
          acc[food._id] = food;
          return acc;
        }, {});
        setFoodItems(foodItemsMap);
      }
    };

    fetchFoodItems();
    setIsClient(true);
  }, [cartItems]); // Run whenever cartItems change

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    
    const validCartItems = [];
    for (const item of cartItems) {
      if (!item.id) {
        console.error(`Invalid food item ID: ${item.id}`);
        continue;
      }

      if (!foodItems[item.id]) {
        console.error(`Food item with ID ${item.id} does not exist in Sanity`);
        return;
      }

      validCartItems.push({
        _type: "food",
        _ref: item.id,
        // quantity: item.quantity,
      });
    }

    if (validCartItems.length === 0) {
      alert("All items in your cart are invalid.");
      return;
    }

    const orderData = {
      _type: "order",
      fullname: formValues.fullname,
      address: formValues.address,
      phone: formValues.phone,
      region: formValues.region,
      streetnumber: formValues.streetnumber,
      area: formValues.area,
      email: formValues.email,
      cartItems: validCartItems,
      orderDate: new Date().toISOString(),
    };

    try {
      await sanityClient.create(orderData); 
      localStorage.removeItem("applied discount");
      setIsOrderPlaced(true);

      setTimeout(() => {
        clearCart();
        setIsOrderPlaced(false);
      }, 6000);
    } catch (error) {
      console.error("Error Occurred:", error);
      alert("Something went wrong with your order. Please try again.");
    }
  };

  if (!isClient) return null;

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Checkout</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-red-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item: CartItem, index: number) => {
              const food = foodItems[item.id];
              return (
                food && (
                  <div key={index} className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover mr-4"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-lg font-semibold">
                      Rs{(food.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                )
              );
            })
          )}
        </div>
      </div>

      {/* Checkout Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h3 className="text-2xl font-semibold mb-4">Enter Your Details</h3>

        {[{ id: "fullname", label: "Full Name" },
          { id: "address", label: "Address" },
          { id: "phone", label: "Phone Number" },
          { id: "region", label: "Region" },
          { id: "streetnumber", label: "Street Number" },
          { id: "area", label: "Area" },
          { id: "email", label: "Email", type: "email" }].map(({ id, label, type = "text" }) => (
            <div key={id} className="mb-4">
              <label htmlFor={id} className="block text-lg font-medium mb-2">{label}</label>
              <input
                type={type}
                id={id}
                value={formValues[id as keyof typeof formValues]}
                onChange={handleInputChange}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="border p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
        ))}

        <button
          onClick={handlePlaceOrder}
          aria-label="Place your order"
          className="bg-black text-white px-6 py-2 rounded-full border border-yellow-500 transition hover:bg-yellow-500"
        >
          Order Now
        </button>
      </div>

      {isOrderPlaced && <OrderSuccessPopup />}

      {isOrderPlaced && (
        <div className="mt-4 text-center">
          <Link href="/" passHref>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
              Go Back to Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;

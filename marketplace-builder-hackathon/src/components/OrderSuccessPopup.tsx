import React from "react";

const OrderSuccessPopup = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold">Your order has been placed successfully!</h2>
        <p className="mt-4">Thank you for your purchase. You will receive an email confirmation shortly.</p>
      </div>
    </div>
  );
};

export default OrderSuccessPopup;

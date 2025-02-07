import { Link } from "lucide-react";

const OrderSuccessPopup = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Order Placed Successfully!</h2>
      <p className="text-lg mb-6">Thank you for your order. We will process it shortly.</p>
      <Link href="/">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md">Back to Home</button>
      </Link>
    </div>
  </div>
);

export default OrderSuccessPopup;

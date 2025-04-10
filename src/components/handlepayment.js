import React, { useState } from "react";
import axios from "axios";

export default function PaymentComponent({ productId }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:5000/create-order", {
        amount: 1000, // Amount in INR (1000 = ₹10.00)
        productId: productId,
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: "Your Company Name",
        description: "Product Description",
        image: "https://yourcompany.com/logo.png",
        handler: function (response) {
          alert(`Payment Successful: ${response.razorpay_payment_id}`);
          // You can also send it to the backend here
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "+919876543210",
        },
        notes: {
          address: "Customer address",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error creating Razorpay order", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}

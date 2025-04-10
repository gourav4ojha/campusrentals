import React, { useState } from "react";
import axios from "axios";

export default function PaymentComponent ({ productId }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:5000/create-order", {
        amount: 1000,  // Amount in INR (1000 = 10 INR)
        productId: productId,  // Pass the product ID here
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay key ID
        amount: data.amount, // Amount in paise
        currency: data.currency,
        order_id: data.orderId,
        name: "Your Company Name",
        description: "Product Description",
        image: "https://yourcompany.com/logo.png",
        handler: function (response) {
          alert("Payment Successful");
          // Handle success and send the payment details to your backend to verify
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
      setLoading(false);
    } catch (error) {
      console.error("Error creating Razorpay order", error);
      setLoading(false);
    }
  }
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

if (!keyId || !keySecret) {
  throw new Error("Missing Razorpay credentials. Ensure environment variables are set.");
}

const razorpay = new Razorpay({
  key_id: keyId,
  key_secret: keySecret,
});

export async function POST(request) {
  try {
    const order = await razorpay.orders.create({
      amount: 100 * 100, // Amount in paise (₹1 = 100 paise)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error("Error creating order:", error.message || error);
    return NextResponse.json(
      { error: "Error creating order", details: error.message || error },
      { status: 500 }
    );
  }
}

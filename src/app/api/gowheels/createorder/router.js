import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, currency } = req.body;

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID, // Add in .env file
      key_secret: process.env.RAZORPAY_SECRET, // Add in .env file
    });

    try {
      const order = await razorpay.orders.create({
        amount: amount * 100, // Amount in paisa (1 INR = 100 paisa)
        currency: currency || "INR",
      });
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

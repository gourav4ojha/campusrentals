import Users from "@/lib/model/users"; // Your Mongoose model
import bcrypt from "bcrypt";

const saltRounds = 10;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {s
      const { name, email, phone, password } = req.body;
      const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
      if (existingUser) {
        return res.status(400).json({ error: "User with this email or phone already exists" });
      }s
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = new User({ name, email, phone, password: hashedPassword });
      const userData = await user.save();
      res.status(201).json(userData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

import { Users } from "@/lib/model/users";
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "zedrftgyuhnkmnbvcxzsdfghj2345tyhjsdtyu";

export async function POST(req) {
    await connectToDB();
    try {
        const payload = await req.json();
        const user = await Users.findOne({ email: payload.email });

        if (!user) {
            return NextResponse.json({ success: false, error: "User not found" }, { status: 400 });
        }

        const isMatch = await bcrypt.compare(payload.password, user.password);
        if (!isMatch) {
            return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: "2h" }
        );

        return NextResponse.json({
            success: true,
            message: "Login successful",
            token,
            user: { id: user._id, email: user.email, name: user.name },
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}


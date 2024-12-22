import { Users } from "@/lib/model/users";
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req) {
    await connectToDB();
    try {
        const payload = await req.json();
        const existingUser = await Users.findOne({ email: payload.email });

        if (existingUser) {
            return NextResponse.json({ success: false, error: "Email already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(payload.password, 10);
        const newUser = new Users({ ...payload, password: hashedPassword });
        const result = await newUser.save();

        return NextResponse.json({ success: true, message: "User registered successfully", result });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

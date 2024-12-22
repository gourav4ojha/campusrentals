import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/utils/auth";
import { Users } from "@/lib/model/users";
import { connectToDB } from "@/lib/db";

export async function GET(req) {
    await connectToDB();
    try {
        // Get the token from headers (assuming Bearer token)
        const authHeader = req.headers.get("authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return NextResponse.json({ success: false, error: "No token provided" }, { status: 401 });
        }

        const token = authHeader.split(" ")[1]; // Extract token
        const { success, user, error } = verifyToken(token); // Verify token

        if (!success) {
            return NextResponse.json({ success: false, error }, { status: 401 });
        }

        // Fetch user details using the decoded token's user ID
        const userDetails = await Users.findById(user.id).select("-password"); // Exclude password field

        if (!userDetails) {
            return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: "User details retrieved successfully",
            user: userDetails,
        });
    } catch (error) {
        console.error("Error in fetching user details:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

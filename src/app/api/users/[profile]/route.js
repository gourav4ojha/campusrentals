import mongoose from "mongoose";
import { connectToDB } from "@/lib/db";
import { Users } from "@/lib/model/users";
import { NextResponse } from "next/server";

export async function GET(req, context) {
    try {
        await connectToDB();
        const { userid } = context.params; 
        const result = await Users.findById(userid);

        if (!result) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

export async function PUT(req, context) {
    try {
        await connectToDB();

        const { userid } = context.params;  // Ensure `userid` is properly passed in the route
        const body = await req.json();      // Parse the request body

        // Find the user by ID and update their details
        const updatedUser = await Users.findByIdAndUpdate(
            userid,
            { $set: body },  // Update fields from the request body
            { new: true, runValidators: true } // Return the updated document and run validations
        );

        if (!updatedUser) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, result: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}



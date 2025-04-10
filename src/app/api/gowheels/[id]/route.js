import mongoose from "mongoose";
import Gowheels from "@/lib/model/gowheels";
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";

export async function GET(req, { params }) {
    await connectToDB();

    try {
        const { id } = params; 

        // Validate ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ success: false, error: "Invalid or missing ID" });
        }

        // Find the vehicle by ID
        const vehicle = await Gowheels.findById(id);

        if (!vehicle) {
            return NextResponse.json({ success: false, error: "Vehicle not found" });
        }

        return NextResponse.json({ result: vehicle, success: true });
    } catch (error) {
        console.error("Error fetching vehicle by ID:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}

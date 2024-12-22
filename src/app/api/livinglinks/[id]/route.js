// import { Livinglinks } from "@/lib/model/livinglinks";
// import { NextResponse } from "next/server";
// import { connectToDB } from "@/lib/db";
// import { Types } from "mongoose";

// export async function GET(req, context) {
//     try {
//         await connectToDB();
//         const { propertyid } = context.params;

//         console.log("Property ID:", propertyid);

//         if (!Types.ObjectId.isValid(propertyid)) {
//             return NextResponse.json({ success: false, message: "Invalid Property ID format" }, { status: 400 });
//         }

//         const data = await Livinglinks.findById(Types.ObjectId(propertyid));

//         if (!data) {
//             return NextResponse.json({ success: false, message: "Property not found" }, { status: 404 });
//         }

//         return NextResponse.json({ result: data, success: true });
//     } catch (error) {
//         console.error("Error fetching properties:", error);
//         return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//     }
// }

import mongoose from "mongoose";
import { Livinglinks } from "@/lib/model/livinglinks";
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";

export async function GET(req, { params }) {
    await connectToDB();

    try {
        const { id } = params; // Extract ID from route parameters

        // Validate ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ success: false, error: "Invalid or missing ID" });
        }

        // Find the property by ID
        const property = await Livinglinks.findById(id);

        if (!property) {
            return NextResponse.json({ success: false, error: "property not found" });
        }

        return NextResponse.json({ result: property, success: true });
    } catch (error) {
        console.error("Error fetching property by ID:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}

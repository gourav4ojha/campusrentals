import { Livinglinks } from "@/lib/model/livinglinks";
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db"; // Assuming this contains your DB connection logic

export async function GET() {
    await connectToDB();
    try {
        const data = await Livinglinks.find();
        return NextResponse.json({ result: data, success: true });
    } catch (error) {
        console.error("Error fetching properties:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function POST(req) {
    await connectToDB();
    try {
        const payload = await req.json();
        const property = new Livinglinks(payload);
        const result = await property.save();
        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error("Error saving property:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}


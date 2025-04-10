import { Gowheels } from "@/lib/model/gowheels";
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";

export async function GET() {
    await connectToDB();
    try {
        const data = await Gowheels.find();
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
        const vehicle = new Gowheels(payload);
        const result = await vehicle.save();
        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error("Error saving property:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}

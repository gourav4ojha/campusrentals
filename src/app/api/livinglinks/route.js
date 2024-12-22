import mongoose from "mongoose";
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



// import mongoose from "mongoose";
// import { Livinglinks } from "@/lib/model/livinglinks";
// import { NextResponse } from "next/server";
// import { connectionstr } from "@/lib/db";

// // Function to connect to MongoDB
// async function connectToDB() {
//     if (!mongoose.connection.readyState) {
//         await mongoose.connect(connectionstr, { useNewUrlParser: true, useUnifiedTopology: true });
//     }
// }

// export async function GET() {
//     await connectToDB();
//     const data = await Livinglinks.find();
//     return NextResponse.json({ result: data,success: true});
// } 

// export async function POST(req) {
//     const payload = await req.json();
//   await connectToDB();
//       try {
//       const property = new Livinglinks(payload);
//       const result = await property.save();
//       return NextResponse.json({ result, success: true });
//           } catch (error) {
//               console.error("Error saving product:", error);
//               return NextResponse.json({ success: false, error: error.message });
//           }
//         }


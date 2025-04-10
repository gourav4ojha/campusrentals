import mongoose from "mongoose";
import { connectToDB } from "@/lib/db";
import { Users } from "@/lib/model/users";
import { NextResponse } from "next/server";
import multer from "multer";
import fs from "fs"; 
import path from "path";

export async function GET(req, { params }) {
    try {
        await connectToDB();

        const { id } = params; // Destructuring the `id` correctly
        console.log('User ID:', id);

        // Convert `id` to a valid ObjectId
        const userId = new mongoose.Types.ObjectId(id);

        const result = await Users.findById(userId);

        if (!result) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        const uploadPath = path.join(process.cwd(), "public/uploads");
        if (!fs.existsSync(uploadPath)) {
          fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
      },
    }),
  });
  
  // Disable bodyParser for file uploads
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  // PUT method to update user data
  export async function PUT(req, context) {
    try {
      await connectToDB();
  
      const { params } = context;
      const { id } = params;
  
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ success: false, message: "Invalid User ID" }, { status: 400 });
      }
  
      // Handle file upload using Multer
      const form = new Promise((resolve, reject) => {
        upload.single("profile")(req, {}, (err) => {
          if (err) reject(err);
          else resolve(req);
        });
      });
  
      const parsedRequest = await form;
      const updates = JSON.parse(parsedRequest.body?.data || "{}"); // Parse JSON body
      const file = parsedRequest.file;
  
      // Prepare data for update
      const updateData = { ...updates };
      if (file) {
        updateData.profile = `/uploads/${file.filename}`;
      }
  
      // Update user in database
      const updatedUser = await Users.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
      }
  
      return NextResponse.json({ success: true, result: updatedUser });
    } catch (error) {
      console.error("Error updating user:", error);
      return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
  }


// export async function PUT(req, {params}) {
//     try {
//         await connectToDB();

//         const {id }=  params;  // Ensure `userid` is properly passed in the route
//         const body = await req.json();      // Parse the request body

//         // Find the user by ID and update their details
//         const updatedUser = await Users.findByIdAndUpdate(
//             id,
//             { $set: body },  // Update fields from the request body
//             { new: true, runValidators: true } // Return the updated document and run validations
//         );

//         if (!updatedUser) {
//             return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
//         }

//         return NextResponse.json({ success: true, result: updatedUser });
//     } catch (error) {
//         console.error('Error updating user:', error);
//         return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
//     }
// }
import 'dotenv/config';

import mongoose from "mongoose";

// MongoDB connection string
export const connectionstr = `mongodb+srv://gouravojha:${process.env.MONGO_PASSWORD}@cluster0.twwiy.mongodb.net/campusrentalsdb?retryWrites=true&w=majority&appName=Cluster0`;

// Function to connect to MongoDB
export async function connectToDB() {
    if (!mongoose.connection.readyState) {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(connectionstr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection successful");
    }
}

// export const connectionstr = `mongodb+srv://gouravojha:${provess.env.MONGO_PASSWORD}@cluster0.twwiy.mongodb.net/campusrentalsdb?retryWrites=true&w=majority&appName=Cluster0`
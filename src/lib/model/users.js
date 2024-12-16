import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    profile: { type: String },
    gender: { type: String },
    address: { type: String },
});

export const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

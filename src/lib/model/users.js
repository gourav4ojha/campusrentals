import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String},
    lastname: { type: String},
    phone: { type: String },
    profile: { type: String },
    gender: { type: String },
    address: { type: String },
    location: { type: String }, 
    sailer: { type: Boolean, default: false },  
    Dateofbirth: { type: Date },  
    about: { type: String },  
});

export const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

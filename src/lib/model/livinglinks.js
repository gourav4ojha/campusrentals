const mongoose = require ('mongoose');

// Define the schema for the property
const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  appartment: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  security: {
    type: Number,
    required: true,
    min: 0
  },
  inStock: {
    type: Boolean,
    default: true
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  wifi: {
    type: Boolean,
    default: false
  },
  ac: {
    type: Boolean,
    default: false
  },
  fridge: {
    type: Boolean,
    default: false
  },
  furniture: {
    type: Boolean,
    default: false
  },
  avilable: {
    type: Boolean,
    default: false
  },
  images: [{
    type: String // Assuming image URLs are stored as strings
  }],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  postedOn: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  bhk:{
    type: String, // You can use '1BHK', '2BHK', etc., as a string or a custom enum
    required: true
  },
});

// Create and export the model
export const Livinglinks = mongoose.models.Livinglinks || mongoose.model("Livinglinks", propertySchema);

// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  modelName: {
    type: String,
    required: true,
    trim: true
  },
  registrationNo: {
    type: String,
    required: true,
    trim: true
  },
  lastService: {
    type: Date,
    required: true
  },
  pricePerHour: {
    type: Number,
    required: true,
    min: 0
  },
  pricePerDay: {
    type: Number,
    required: true,
    min: 0
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  images: [{
    type: String
  }],
  fuelType: {
    type: String,
    required: true,
    enum: ['Petrol', 'Diesel', 'Electric', 'CNG'],
    default: 'Petrol'
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
});

// Export the model
const Gowheels = mongoose.models.Gowheels || mongoose.model("Gowheels", vehicleSchema);
export default Gowheels;

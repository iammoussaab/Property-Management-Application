// models/Property.js
const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: { type: String, required: [true, "Property name is required."] },
  address: { type: String, required: [true, "Address is required."] },
  type: {
    type: String,
    enum: ["Apartment", "House", "Commercial", "Other"],
    required: [true, "Property type is required."],
  },
  units: {
    type: Number,
    required: [true, "Number of units is required."],
    min: [1, "There must be at least one unit."],
  },
  rentalCost: {
    type: Number,
    required: [true, "Rental cost is required."],
    min: [0, "Rental cost cannot be negative."],
  },
});

module.exports = mongoose.model("Property", propertySchema);

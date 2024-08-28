const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: String,
  address: String,
  type: String,
  units: Number,
  rentalCost: Number,
});

module.exports = mongoose.model('Property', propertySchema);

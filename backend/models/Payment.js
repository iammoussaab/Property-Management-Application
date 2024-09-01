const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tenant",
    required: [true, "Tenant reference is required."],
  },
  date: { type: Date, required: [true, "Payment date is required."] },
  amount: {
    type: Number,
    required: [true, "Amount is required."],
    min: [0, "Amount cannot be negative."],
  },
  settled: {
    type: Boolean,
    required: [true, "Settlement status is required."],
  },
});

module.exports = mongoose.model("Payment", paymentSchema);

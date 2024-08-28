const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
  date: Date,
  amount: Number,
  settled: Boolean,
});

module.exports = mongoose.model('Payment', paymentSchema);

// controllers/paymentController.js
const Payment = require('../models/Payment');
const Tenant = require('../models/Tenant');

// Record a new payment
exports.recordPayment = async (req, res, next) => {
  try {
    const { tenant, date, amount, settled } = req.body;

    // Validation
    if (!tenant || !date || !amount || settled === undefined) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Check if tenant exists
    const existingTenant = await Tenant.findById(tenant);
    if (!existingTenant) {
      return res.status(404).json({ success: false, message: 'Tenant not found.' });
    }

    const payment = new Payment({ tenant, date, amount, settled });
    await payment.save();
    res.status(201).json({ success: true, data: payment });
  } catch (error) {
    next(error);
  }
};

// Get all payments with tenant details
exports.getPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find().populate({
      path: 'tenant',
      populate: { path: 'property' },
    });
    res.status(200).json({ success: true, data: payments });
  } catch (error) {
    next(error);
  }
};

// Get a single payment by ID
exports.getPaymentById = async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.id).populate({
      path: 'tenant',
      populate: { path: 'property' },
    });
    if (!payment) {
      return res.status(404).json({ success: false, message: 'Payment not found.' });
    }
    res.status(200).json({ success: true, data: payment });
  } catch (error) {
    next(error);
  }
};

// Update a payment
exports.updatePayment = async (req, res, next) => {
  try {
    const updates = req.body;

    // If tenant is being updated, verify it exists
    if (updates.tenant) {
      const existingTenant = await Tenant.findById(updates.tenant);
      if (!existingTenant) {
        return res.status(404).json({ success: false, message: 'Tenant not found.' });
      }
    }

    const payment = await Payment.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    }).populate({
      path: 'tenant',
      populate: { path: 'property' },
    });

    if (!payment) {
      return res.status(404).json({ success: false, message: 'Payment not found.' });
    }

    res.status(200).json({ success: true, data: payment });
  } catch (error) {
    next(error);
  }
};

// Delete a payment
exports.deletePayment = async (req, res, next) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ success: false, message: 'Payment not found.' });
    }
    res.status(200).json({ success: true, message: 'Payment deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

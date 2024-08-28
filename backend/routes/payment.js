const express = require('express');
const Payment = require('../models/Payment');
const router = express.Router();

// Add payment
router.post('/', async (req, res) => {
	const payment = new Payment(req.body);
	await payment.save();
	res.status(201).send(payment);
});

// Get all payments
router.get('/', async (req, res) => {
	const payments = await Payment.find().populate('tenant');
	res.send(payments);
});

module.exports = router;

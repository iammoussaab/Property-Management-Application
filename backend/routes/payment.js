const express = require('express');
const {
	recordPayment,
	getPayments,
	getPaymentById,
	updatePayment,
	deletePayment,
} = require('../controllers/paymentController');
const router = express.Router();

// CRUD Routes
router.post('/', recordPayment);
router.get('/', getPayments);
router.get('/:id', getPaymentById);
router.put('/:id', updatePayment);
router.delete('/:id', deletePayment);

module.exports = router;

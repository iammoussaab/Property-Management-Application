const express = require('express');
const {
  addProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require('../controllers/propertyController');
const router = express.Router();

// CRUD Routes
router.post('/', addProperty);
router.get('/', getProperties);
router.get('/:id', getPropertyById);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);

module.exports = router;

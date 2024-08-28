const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

// Add property
router.post('/', async (req, res) => {
  const property = new Property(req.body);
  await property.save();
  res.status(201).send(property);
});

// Get all properties
router.get('/', async (req, res) => {
  const properties = await Property.find();
  res.send(properties);
});

module.exports = router;

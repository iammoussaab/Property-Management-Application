const express = require('express');
const Tenant = require('../models/Tenant');
const router = express.Router();

// Add tenant
router.post('/', async (req, res) => {
  const tenant = new Tenant(req.body);
  await tenant.save();
  res.status(201).send(tenant);
});

// Get all tenants
router.get('/', async (req, res) => {
  const tenants = await Tenant.find().populate('property');
  res.send(tenants);
});

module.exports = router;

// controllers/tenantController.js
const Tenant = require('../models/Tenant');
const Property = require('../models/Property');

// Add a new tenant
exports.addTenant = async (req, res, next) => {
  try {
    const { name, contactDetails, section, property } = req.body;

    // Validation
    if (!name || !contactDetails || !section || !property) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Check if property exists
    const existingProperty = await Property.findById(property);
    if (!existingProperty) {
      return res.status(404).json({ success: false, message: 'Property not found.' });
    }

    const tenant = new Tenant({ name, contactDetails, section, property });
    await tenant.save();
    res.status(201).json({ success: true, data: tenant });
  } catch (error) {
    next(error);
  }
};

// Get all tenants with property details
exports.getTenants = async (req, res, next) => {
  try {
    const tenants = await Tenant.find().populate('property');
    res.status(200).json({ success: true, data: tenants });
  } catch (error) {
    next(error);
  }
};

// Get a single tenant by ID
exports.getTenantById = async (req, res, next) => {
  try {
    const tenant = await Tenant.findById(req.params.id).populate('property');
    if (!tenant) {
      return res.status(404).json({ success: false, message: 'Tenant not found.' });
    }
    res.status(200).json({ success: true, data: tenant });
  } catch (error) {
    next(error);
  }
};

// Update a tenant
exports.updateTenant = async (req, res, next) => {
  try {
    const updates = req.body;

    // If property is being updated, verify it exists
    if (updates.property) {
      const existingProperty = await Property.findById(updates.property);
      if (!existingProperty) {
        return res.status(404).json({ success: false, message: 'Property not found.' });
      }
    }

    const tenant = await Tenant.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    }).populate('property');

    if (!tenant) {
      return res.status(404).json({ success: false, message: 'Tenant not found.' });
    }

    res.status(200).json({ success: true, data: tenant });
  } catch (error) {
    next(error);
  }
};

// Delete a tenant
exports.deleteTenant = async (req, res, next) => {
  try {
    const tenant = await Tenant.findByIdAndDelete(req.params.id);
    if (!tenant) {
      return res.status(404).json({ success: false, message: 'Tenant not found.' });
    }
    res.status(200).json({ success: true, message: 'Tenant deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

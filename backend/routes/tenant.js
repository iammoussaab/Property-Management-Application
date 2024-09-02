const express = require('express');
const {
  addTenant,
  getTenants,
  getTenantById,
  updateTenant,
  deleteTenant,
} = require('../controllers/tenantController');
const router = express.Router();

// CRUD Routes
router.post('/', addTenant);
router.get('/', getTenants);
router.get('/:id', getTenantById);
router.put('/:id', updateTenant);
router.delete('/:id', deleteTenant);

module.exports = router;

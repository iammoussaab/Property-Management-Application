const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: String,
  contactDetails: String,
  section: String,
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
});

module.exports = mongoose.model('Tenant', tenantSchema);

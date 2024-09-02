const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Tenant name is required."] },
  contactDetails: {
    type: String,
    required: [true, "Contact details are required."],
  },
  section: { type: String, required: [true, "Section is required."] },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: [true, "Property reference is required."],
  },
});

module.exports = mongoose.model("Tenant", tenantSchema);

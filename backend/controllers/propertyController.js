const Property = require("../models/Property");

// Add a new property
exports.addProperty = async (req, res, next) => {
  try {
    const { name, address, type, units, rentalCost } = req.body;

    // Validation
    if (!name || !address || !type || !units || !rentalCost) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const property = new Property({ name, address, type, units, rentalCost });
    await property.save();
    res.status(201).json({ success: true, data: property });
  } catch (error) {
    next(error);
  }
};

// Get all properties with optional filtering and sorting
exports.getProperties = async (req, res, next) => {
  try {
    const { type, minRental, maxRental, sortBy, order } = req.query;
    let filter = {};
    let sort = {};

    if (type) {
      filter.type = type;
    }

    if (minRental || maxRental) {
      filter.rentalCost = {};
      if (minRental) filter.rentalCost.$gte = Number(minRental);
      if (maxRental) filter.rentalCost.$lte = Number(maxRental);
    }

    if (sortBy) {
      sort[sortBy] = order === "desc" ? -1 : 1;
    }

    const properties = await Property.find(filter).sort(sort);
    res.status(200).json({ success: true, data: properties });
  } catch (error) {
    next(error);
  }
};

// Get a single property by ID
exports.getPropertyById = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res
        .status(404)
        .json({ success: false, message: "Property not found." });
    }
    res.status(200).json({ success: true, data: property });
  } catch (error) {
    next(error);
  }
};

// Update a property
exports.updateProperty = async (req, res, next) => {
  try {
    const updates = req.body;
    const property = await Property.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!property) {
      return res
        .status(404)
        .json({ success: false, message: "Property not found." });
    }

    res.status(200).json({ success: true, data: property });
  } catch (error) {
    next(error);
  }
};

// Delete a property
exports.deleteProperty = async (req, res, next) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res
        .status(404)
        .json({ success: false, message: "Property not found." });
    }
    res
      .status(200)
      .json({ success: true, message: "Property deleted successfully." });
  } catch (error) {
    next(error);
  }
};

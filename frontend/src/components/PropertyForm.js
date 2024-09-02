import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import propertyService from "../services/propertyService";
import "../styles/PropertyForm.css"; // Import CSS for styling

const PropertyForm = ({ property }) => {
  const [formData, setFormData] = useState(
    property || {
      name: "",
      address: "",
      type: "",
      units: 0,
      rentalCost: 0,
    }
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (property) {
        await propertyService.updateProperty(property._id, formData);
      } else {
        await propertyService.addProperty(formData);
      }
      navigate("/properties");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert(
        "An error occurred while saving the property. Please check the console for details."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="property-form">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="form-input"
      />
      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        required
        className="form-input"
      />
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
        className="form-select"
      >
        <option value="">Choose a type</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Commercial">Commercial</option>
        <option value="Other">Other</option>
      </select>
      <input
        name="units"
        type="number"
        value={formData.units}
        onChange={handleChange}
        placeholder="Units"
        required
        className="form-input"
      />
      <input
        name="rentalCost"
        type="number"
        value={formData.rentalCost}
        onChange={handleChange}
        placeholder="Rental Cost"
        required
        className="form-input"
      />
      <button type="submit" className="form-button">
        Save
      </button>
    </form>
  );
};

export default PropertyForm;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tenantService from "../services/tenantService";
import propertyService from "../services/propertyService";
import "../styles/TenantForm.css"; // Import CSS for styling

const TenantForm = ({ tenant }) => {
  const [formData, setFormData] = useState(
    tenant || {
      name: "",
      contactDetails: "",
      section: "",
      property: "",
    }
  );
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await propertyService.getProperties();
      setProperties(data.data);
    };
    fetchProperties();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tenant) {
      await tenantService.updateTenant(tenant._id, formData);
    } else {
      await tenantService.addTenant(formData);
    }
    navigate("/tenants");
  };

  return (
    <form onSubmit={handleSubmit} className="tenant-form">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="form-input"
      />
      <input
        name="contactDetails"
        value={formData.contactDetails}
        onChange={handleChange}
        placeholder="Contact Details"
        required
        className="form-input"
      />
      <input
        name="section"
        value={formData.section}
        onChange={handleChange}
        placeholder="Section"
        required
        className="form-input"
      />
      <select
        name="property"
        value={formData.property}
        onChange={handleChange}
        required
        className="form-select"
      >
        <option value="">Select Property</option>
        {Array.isArray(properties)
          ? properties.map((property) => (
              <option key={property._id} value={property._id}>
                {property.name}
              </option>
            ))
          : null}
      </select>
      <button type="submit" className="form-button">
        {tenant ? "Update Tenants" : "Add Property"}
      </button>
    </form>
  );
};

export default TenantForm;

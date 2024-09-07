import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import propertyService from "../services/propertyService";
import "../styles/PropertyList.css"; // Import CSS for styling

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await propertyService.deleteProperty(id);
      setProperties(properties.filter((property) => property._id !== id));
      console.log("Property deleted successfully");
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await propertyService.getProperties();
        setProperties(data.data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          navigate("/auth"); // Redirect to login page
        } else {
          console.error("Error fetching properties:", error);
        }
      }
    };
    fetchProperties();
  }, [navigate]);

  return (
    <div className="property-list">
      <h2>Properties</h2>
      <Link to="/properties/new" className="add-property-link">
        Add New Property
      </Link>
      <ul className="property-items">
        {Array.isArray(properties) &&
          properties.map((property) => (
            <li key={property._id} className="property-item">
              <span className="property-details">
                {property.name} - {property.type} - ${property.rentalCost}
              </span>
              <div className="property-actions">
                <Link
                  to={`/properties/${property._id}/edit`}
                  className="edit-link"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(property._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PropertyList;

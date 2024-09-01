import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProperty, setNewProperty] = useState({
    name: "",
    address: "",
    type: "",
    units: "",
    rentalCost: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/properties",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data && Array.isArray(response.data.data)) {
          setProperties(response.data.data);
        } else {
          console.error(
            "API response does not contain a properties array",
            response.data
          );
        }
      } catch (error) {
        setError("Error fetching properties");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleChange = (e) => {
    setNewProperty({ ...newProperty, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/properties",
        newProperty,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProperties([...properties, response.data]); // Ensure _id is included
      setShowForm(false);
      setNewProperty({
        name: "",
        address: "",
        type: "",
        units: "",
        rentalCost: "",
      });
      setSuccess("Property added successfully!");
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Error adding new property");
      console.error(error);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          {showForm ? (
            <div>
              <form onSubmit={handleSubmit}>
                <h2>Add New Property</h2>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={newProperty.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={newProperty.address}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Type:
                  <select
                    name="type"
                    value={newProperty.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <br />
                <label>
                  Units:
                  <input
                    type="number"
                    name="units"
                    value={newProperty.units}
                    onChange={handleChange}
                    min="1"
                    required
                  />
                </label>
                <br />
                <label>
                  Rental Cost:
                  <input
                    type="number"
                    name="rentalCost"
                    value={newProperty.rentalCost}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </label>
                <br />
                <button type="submit">Add Property</button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Back to List
                </button>
                {success && <div>{success}</div>}
              </form>
            </div>
          ) : (
            <div>
              <h1>Property List</h1>
              <ul>
                {properties.map((property) => (
                  <li key={property._id}>
                    <Link to={`/properties/${property._id}`}>
                      {property.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <button onClick={() => setShowForm(true)}>
                Add New Property
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PropertyList;

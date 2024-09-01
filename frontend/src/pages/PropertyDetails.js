import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    type: "",
    units: "",
    rentalCost: "",
  });
  const [previousFormData, setPreviousFormData] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/api/properties/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProperty(response.data);
        setFormData(response.data.data);
      } catch (error) {
        console.error("Error fetching property details", error);
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5000/api/properties/${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProperty(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating property", error);
    }
  };

  const handleCancel = () => {
    setFormData(previousFormData);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/properties/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      window.location.href = "/";
    } catch (error) {
      console.error("Error deleting property", error);
    }
  };

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      {!isEditing ? (
        <>
          <h1>{property.data.name}</h1>
          <p>Address: {property.data.address}</p>
          <p>Type: {property.data.type}</p>
          <p>Units: {property.data.units}</p>
          <p>Rental Cost: {property.data.rentalCost}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <div>
          <h2>Edit Property</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Type:
              <input
                type="text"
                name="type"
                value={formData.type || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Units:
              <input
                type="number"
                name="units"
                value={formData.units}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Rental Cost:
              <input
                type="number"
                name="rentalCost"
                value={formData.rentalCost || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Update</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;

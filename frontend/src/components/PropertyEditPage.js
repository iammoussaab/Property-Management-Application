import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropertyForm from "./PropertyForm";
import propertyService from "../services/propertyService";

const PropertyEditPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const { data } = await propertyService.getPropertyById(id);
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return <PropertyForm property={property} />;
};

export default PropertyEditPage;

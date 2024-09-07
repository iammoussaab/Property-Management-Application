import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TenantForm from "./TenantForm";
import tenantService from "../services/tenantService";

const TenantEditPage = () => {
  const { id } = useParams(); 
  const [tenant, setTenant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTenant = async () => {
      try {
        const { data } = await tenantService.getTenantById(id);
        setTenant(data.data);
      } catch (error) {
        console.error("Error fetching tenant:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTenant();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return <TenantForm tenant={tenant} />;
};

export default TenantEditPage;

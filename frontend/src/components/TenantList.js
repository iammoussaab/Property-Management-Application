import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import tenantService from "../services/tenantService";
import "../styles/TenantList.css"; // Import CSS for styling

const TenantList = () => {
  const [tenants, setTenants] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await tenantService.deleteTenant(id);
      setTenants(tenants.filter((tenant) => tenant._id !== id));
      console.log("Tenant deleted successfully");
    } catch (error) {
      console.error("Error deleting tenant:", error);
    }
  };

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const { data } = await tenantService.getTenants();
        setTenants(data.data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          navigate("/auth"); // Redirect to login page
        } else {
          console.error("Error fetching tenants:", error);
        }
      }
    };
    fetchTenants();
  }, [navigate]);

  return (
    <div className="tenant-list">
      <h2>Tenants</h2>
      <Link to="/tenants/new" className="add-tenant-link">
        Add New Tenant
      </Link>
      <ul className="tenant-items">
        {Array.isArray(tenants) &&
          tenants.map((tenant) => (
            <li key={tenant._id} className="tenant-item">
              <span className="tenant-details">
                {tenant.name} - {tenant.email} - {tenant.phone}
              </span>
              <div className="tenant-actions">
                <Link to={`/tenants/${tenant._id}/edit`} className="edit-link">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(tenant._id)}
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

export default TenantList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tenantService from "../services/tenantService";
import "../styles/TenantList.css"; // Import CSS for styling

const TenantList = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchTenants = async () => {
      const { data } = await tenantService.getTenants();
      setTenants(data.data);
    };
    fetchTenants();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this tenant?")) {
      await tenantService.deleteTenant(id);
      setTenants(tenants.filter((tenant) => tenant._id !== id));
    }
  };

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
                {tenant.name} - {tenant.section}
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
        ;
      </ul>
    </div>
  );
};

export default TenantList;

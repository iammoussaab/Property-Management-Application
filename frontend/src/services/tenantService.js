import axios from "axios";

const API_URL = "http://localhost:5000/api/tenants/";

const getToken = () => localStorage.getItem("token");

const getTenants = () => {
  const token = getToken();
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getTenantById = (id) => {
  const token = getToken();
  return axios.get(`${API_URL}${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const addTenant = (tenant) => {
  const token = getToken();
  return axios.post(API_URL, tenant, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const updateTenant = (id, tenant) => {
  const token = getToken();
  return axios.put(`${API_URL}${id}`, tenant, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteTenant = (id) => {
  const token = getToken();
  return axios.delete(`${API_URL}${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const tenantService = {
  getTenants,
  getTenantById,
  addTenant,
  updateTenant,
  deleteTenant,
};

export default tenantService;

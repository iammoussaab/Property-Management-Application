import axios from "axios";

const API_URL = "http://localhost:5000/api/tenants/";

const getTenants = () => axios.get(API_URL);

const getTenantById = (id) => axios.get(`${API_URL}${id}`);

const addTenant = (tenant) => axios.post(API_URL, tenant);

const updateTenant = (id, tenant) => axios.put(`${API_URL}${id}`, tenant);

const deleteTenant = (id) => axios.delete(`${API_URL}${id}`);

const tenantService = {
  getTenants,
  getTenantById,
  addTenant,
  updateTenant,
  deleteTenant,
};

export default tenantService;

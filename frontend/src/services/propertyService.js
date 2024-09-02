import axios from "axios";

const API_URL = "http://localhost:5000/api/properties";

const getProperties = () => axios.get(API_URL);

const getPropertyById = (id) => axios.get(`${API_URL}/${id}`);

const addProperty = (property) => axios.post(API_URL, property);

const updateProperty = (id, property) =>
  axios.put(`${API_URL}/${id}`, property);

const deleteProperty = (id) => axios.delete(`${API_URL}/${id}`);

const propertyService = {
  getProperties,
  getPropertyById,
  addProperty,
  updateProperty,
  deleteProperty,
};

export default propertyService;

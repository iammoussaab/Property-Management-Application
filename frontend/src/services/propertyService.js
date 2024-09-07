import axios from "axios";

const API_URL = "http://localhost:5000/api/properties";

const getToken = () => localStorage.getItem("token");

const handleUnauthorized = (error) => {
  if (error.response && error.response.status === 400) {
    window.location.href = "/auth"; 
  }
  return Promise.reject(error);
};

const getProperties = () => {
  const token = getToken();
  return axios
    .get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(handleUnauthorized);
};

const getPropertyById = (id) => {
  const token = getToken();
  return axios
    .get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(handleUnauthorized);
};

const addProperty = (property) => {
  const token = getToken();
  return axios
    .post(API_URL, property, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(handleUnauthorized);
};

const updateProperty = (id, property) => {
  const token = getToken();
  return axios
    .put(`${API_URL}/${id}`, property, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(handleUnauthorized);
};

const deleteProperty = (id) => {
  const token = getToken();
  return axios
    .delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(handleUnauthorized);
};

const propertyService = {
  getProperties,
  getPropertyById,
  addProperty,
  updateProperty,
  deleteProperty,
};

export default propertyService;

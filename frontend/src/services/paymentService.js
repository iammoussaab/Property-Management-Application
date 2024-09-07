import axios from "axios";

const API_URL = "http://localhost:5000/api/payments";

const getToken = () => localStorage.getItem("token");

const getPayments = () => {
  const token = getToken();
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getPaymentById = (id) => {
  const token = getToken();
  return axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const addPayment = (payment) => {
  const token = getToken();
  return axios.post(API_URL, payment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const updatePayment = (id, payment) => {
  const token = getToken();
  return axios.put(`${API_URL}/${id}`, payment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const deletePayment = (id) => {
  const token = getToken();
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const paymentService = {
  getPayments,
  getPaymentById,
  addPayment,
  updatePayment,
  deletePayment,
};

export default paymentService;

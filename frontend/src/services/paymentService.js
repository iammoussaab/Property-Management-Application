import axios from "axios";

const API_URL = "http://localhost:5000/api/payments";

const getPayments = () => axios.get(API_URL);

const getPaymentById = (id) => axios.get(`${API_URL}/${id}`);

const addPayment = (payment) => axios.post(API_URL, payment);

const updatePayment = (id, payment) => axios.put(`${API_URL}/${id}`, payment);

const deletePayment = (id) => axios.delete(`${API_URL}/${id}`);

const paymentService = {
  getPayments,
  getPaymentById,
  addPayment,
  updatePayment,
  deletePayment,
};

export default paymentService;

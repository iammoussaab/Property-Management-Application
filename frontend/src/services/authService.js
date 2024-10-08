import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}login`, credentials);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

const register = async (credentials) => {
  const response = await axios.post(`${API_URL}register`, credentials);
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const authService = {
  login,
  register,
  logout,
};

export default authService;

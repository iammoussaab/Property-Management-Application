import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}login`, credentials);
  localStorage.setItem("token", response.data.token);
  return response.data.data;
};

const register = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}register`, credentials);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      if (error.response.data.includes("duplicate key error")) {
        throw new Error(
          "This email is already registered. Please use a different email."
        );
      }
    }
    throw error;
  }
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

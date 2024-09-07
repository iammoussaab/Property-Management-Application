import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { AuthContext } from "../AuthContext";
import "../styles/Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await authService.login(credentials);
        login();
        navigate("/");
      } else {
        await authService.register(credentials);
        setIsLogin(true);
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-header">{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <input
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="auth-input"
          />
        )}
        <input
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="auth-input"
        />
        <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="auth-input"
        />
        <button type="submit" className="auth-button">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
        {isLogin ? "Switch to Register" : "Switch to Login"}
      </button>
    </div>
  );
};

export default Auth;

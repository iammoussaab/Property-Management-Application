import React, { useState } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css"; // Import CSS for styling

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting credentials:", credentials);
    try {
      if (isLogin) {
        await authService.login(credentials);
      } else {
        await authService.register(credentials);
      }
      navigate("/");
    } catch (error) {
      console.error("Error during authentication:", error);
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

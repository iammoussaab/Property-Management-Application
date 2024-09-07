import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Property Management</Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/properties" className="navbar-link">
              Properties
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/tenants" className="navbar-link">
              Tenants
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/payments" className="navbar-link">
              Payments
            </Link>
          </li>
          {isAuthenticated ? (
            <li className="navbar-item">
              <button onClick={handleLogout} className="navbar-link">
                Logout
              </button>
            </li>
          ) : (
            <li className="navbar-item">
              <Link to="/auth" className="navbar-link">
                Login/Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

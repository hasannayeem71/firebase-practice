import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="nav-container">
      <Link to="/home">Home</Link>
      <Link to="/shopping">Shopping</Link>
      <Link to="/contact">Contact</Link>
      {/* {user ? "" : <Link to="/register">Register</Link>} */}
      {user ? (
        <span>
          Hi {user.displayName.slice(0, 7)}...
          <button onClick={logOut}>Logout</button>
        </span>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Header;

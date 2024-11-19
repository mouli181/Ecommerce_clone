import React from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/Logo.png';
import './Homepage.css';

function HomePage() {
  return (
    <nav className="navbar">

    <div className="navbar-logo">
      <img src={Logo} alt="logo" ></img>
    </div>

    <div className="navbar-search">
    <input type="text" placeholder="search for products..." />
    <button>Search</button>
    </div>

    <ul className="navbar-links">
        <li className="login"><Link to="/login">Login</Link></li>
        <li className="login"><Link to="/signup">Signup</Link></li>
    </ul> 

    </nav>
  );
}

export default HomePage;

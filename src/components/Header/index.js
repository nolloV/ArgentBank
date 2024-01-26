import "./header.css";
import React from "react";
import logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/Login" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;

import "./header.css";
import React from "react";
import logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { setDisconnected } from "../../store/userReducer";

function Header() {
  const isConnected = useSelector((state) => state.user.isConnected);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName); // Récupère le firstName
  const lastName = useSelector((state) => state.user.lastName); // Récupère le lastName
  const userName = useSelector((state) => state.user.userName); // Récupère l'userName'

  const handleSignOut = () => {
    dispatch(setDisconnected());
  };

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
        {isConnected ? (
          <div>
            <NavLink className="main-nav-item" href="./user.html">
              <FontAwesomeIcon className="fa-icon" icon={faUserCircle} />
              {userName ? userName : `${firstName} ${lastName}`}{" "}
              {/* Si userName disponible, alors affichez userName sinon firstName et lastName */}
            </NavLink>
            <NavLink to="/" className="main-nav-item" onClick={handleSignOut}>
              <FontAwesomeIcon className="fa-icon" icon={faSignOut} />
              Sign Out
            </NavLink>
          </div>
        ) : (
          <NavLink to="/Login" className="main-nav-item">
            <FontAwesomeIcon className="fa-icon" icon={faUserCircle} />
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;

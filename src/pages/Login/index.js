import "./login.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/userActions";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState(""); // Variable pour stocker l'email
  const [password, setPassword] = useState(""); // Variable pour stocker le mot de passe
  const [rememberMe, setRememberMe] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false); // Variable pour la gestion du message d'erreur

  //Fonction asynchrone pour la gestion du formulaire de connexion
  const handleLogin = async (event) => {
    event.preventDefault();
    const userData = await dispatch(loginUser(email, password)); // Dispatch de l'email et mot de passe vers loginUser (userActions.js)
    if (userData) {
      // Si ok, alors authentification réussite
      navigate("/Users"); //Redirige vers la pages Users.js
    } else {
      setLoginFailed(true); // Sinon, affiche le message d'erreur
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email} // valeur remonté à l'état
              onChange={(e) => setEmail(e.target.value)} // Mise à jour de value
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {/* Message d'erreur caché par défaut par la class CSS hidden si l'état est à false */}
          <p className={`error-message ${loginFailed ? "" : "hidden"}`}>
            Email ou mot de passe incorrect
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;

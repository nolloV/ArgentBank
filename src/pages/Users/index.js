import React, { useState, useEffect } from "react";
import "./users.css";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Account from "../../components/Account";
import { fetchUserProfile, updateUsername } from "../../store/userActions";

function Users() {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false); //Gestion du mode Edit pour faire apparaitre et fermer le formulaire
  const [newUsername, setNewUsername] = useState(""); // Récupère le nouveau username
  const token = useSelector((state) => state.user.token); // Récupère le token
  const firstName = useSelector((state) => state.user.firstName); // Récupère le firstName
  const lastName = useSelector((state) => state.user.lastName); // Récupère le lastName
  const userName = useSelector((state) => state.user.userName); // Récupère l'userName

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile()); // Dispatch l'action lorsque le composant est monté
    }
  }, [dispatch, token]);

  // Gestion du bouton Edit pour ouverture et fermeture des champs de modification
  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  // Gestion du changement de valeur du champ d'entrée pour setNewUsername
  const handleInputChange = (event) => {
    setNewUsername(event.target.value);
  };
  // Gestion soumission du fomulaire avec nouveau username vers l'API avec updateUsername avec en argument newUsername puis setEdit mode false
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUsername(newUsername));
    setEditMode(false);
  };

  if (!token) {
    return <Navigate to="/login" />; // Si aucun token, redirige vers la page login
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userName ? userName : `${firstName} ${lastName}`}!{" "}
          {/* Si userName disponible, alors affichez userName sinon firstName et lastName */}
        </h1>

        {/* Formulaire de modification par défaut sur False avec uniquement edit-button de visible*/}
        {editMode ? (
          <form onSubmit={handleFormSubmit} className="form-edit">
            <div className="edit-block">
              <p>Username: </p>
              <input
                type="text"
                value={newUsername}
                onChange={handleInputChange}
                className="input-style"
              />
            </div>

            {/* Case en read Only non modifiable*/}
            <div className="edit-block">
              <p>Firstname: </p>
              <input
                type="text"
                value={firstName}
                readOnly
                className="readonly-input input-style"
              />
            </div>
            <div className="edit-block">
              <p>Lastname: </p>
              <input
                type="text"
                value={lastName}
                readOnly
                className="readonly-input input-style"
              />
            </div>
            {/* Bouton Save et Cancel */}
            <div className="button-edit">
              <button type="submit" className="button-style">
                Save
              </button>
              {/* Bouton Cancel qui remet setEditMode à False*/}
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="button-style"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button className="edit-button" onClick={handleEditButtonClick}>
            {" "}
            {/* Bouton Edit qui apparait si l'on n'est pas en edit-mode */}
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>

      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
        buttonText="View transactions"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
        buttonText="View transactions"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
        buttonText="View transactions"
      />
    </main>
  );
}

export default Users;

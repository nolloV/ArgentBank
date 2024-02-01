import "./users.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Account from "../../components/Account";

function Users() {
  const token = useSelector((state) => state.user.token); // Récupère le token

  if (!token) {
    return <Navigate to="/login" />; // Si aucun token, redirige vers la page login
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
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

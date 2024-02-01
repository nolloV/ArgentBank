import { setConnected } from "./userReducer";

// Utilisation du thunk pour la requête POST à API
export const loginUser = (email, password) => async (dispatch) => {
  // Fonction qui prend deux arguments email et password
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      // Requête HTTP POST à l'API
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const { token } = data.body; // Extrait la propriété token de data.body

      if (token) {
        dispatch(setConnected(token)); // Envoie l'action setConnected au store avec le token en payload
        return { token };
      } else {
        console.error("Echec, pas de token");
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

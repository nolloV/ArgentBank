import {
  setConnected,
  setFirstName,
  setLastName,
  setUserName,
} from "./userReducer";

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

// Récupération du profil utilisateur
export const fetchUserProfile = () => async (dispatch, getState) => {
  const token = getState().user.token; // Récupère le token du state

  if (token) {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const { firstName, lastName } = data.body; // Extrait firstName et lastName de data.body
        dispatch(setFirstName(firstName)); // Stocke le firstName dans le state userReducer
        dispatch(setLastName(lastName)); // Stocke le lastName dans le state userReducer
      } else {
        console.error("Erreur");
      }
    } catch (error) {
      return null;
    }
  }
};

// Mise à jour du nom d'utilisateur
export const updateUsername = (newUsername) => async (dispatch, getState) => {
  const token = getState().user.token; // Récupère le token du state

  if (token) {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ username: newUsername }), // Elle envoie le nouvel username à l'API via PUT
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(setUserName(newUsername)); // Met à jour le userName dans le state
      } else {
        console.error("Erreur lors de la mise à jour du username");
      }
    } catch (error) {
      console.error(error);
    }
  }
};

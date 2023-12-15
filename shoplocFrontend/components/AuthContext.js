import React, { createContext, useState } from 'react';

// Création du contexte
export const AuthContext = createContext();

// Création du Provider pour le contexte
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Fonction pour mettre à jour le token
  const updateToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

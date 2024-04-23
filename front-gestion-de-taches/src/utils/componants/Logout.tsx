import React, { useContext } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext); // Utilisez le hook useContext pour accéder à la fonction de déconnexion du contexte d'authentification

  const handleLogout = () => {
    logout(); // Appelez la fonction de déconnexion lorsque le bouton est cliqué
  };

  return (
    <button onClick={handleLogout}>Déconnexion</button> // Associez la fonction handleLogout à l'événement onClick du bouton de déconnexion
  );
};

export default LogoutButton;

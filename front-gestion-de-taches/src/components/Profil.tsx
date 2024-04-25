import React, { useContext, useState } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import axios from 'axios';
import '../style/Profil.css';

const Profil = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const [pseudo, setPseudo] = useState(user.pseudo);
  const [age, setAge] = useState(user.age);
  const [sexe, setSexe] = useState(user.sexe);
  const [metier, setMetier] = useState(user.metier);

  const handleSaveChanges = async () => {
    try {
      const updatedUser = { ...user, pseudo, age, sexe, metier };
      const response = await axios.put('/api/user', updatedUser); // Assurez-vous d'ajuster l'URL en fonction de votre backend
      console.log(response.data); // Affichez la réponse du serveur dans la console
      setUser(updatedUser); // Mettez à jour l'utilisateur dans le contexte d'authentification avec les nouvelles données
    } catch (error) {
      console.error('Error updating user:', error);
      // Affichez un message d'erreur à l'utilisateur ou gérez l'erreur de manière appropriée
    }
  };

  return (
    <div>
      <h1>Profil</h1>
      <p>Nom d'utilisateur : {user.username}</p>
      <p>Email : {user.email}</p>
      <label htmlFor="pseudo">Pseudo :</label>
      <input type="text" id="pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
      <label htmlFor="age">Âge :</label>
      <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      <label htmlFor="sexe">Sexe :</label>
      <select id="sexe" value={sexe} onChange={(e) => setSexe(e.target.value)}>
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
        <option value="autre">Autre</option>
      </select>
      <label htmlFor="metier">Métier :</label>
      <input type="text" id="metier" value={metier} onChange={(e) => setMetier(e.target.value)} />
      <button onClick={handleSaveChanges}>Enregistrer les modifications</button>
      <button onClick={logout}>Déconnexion</button>
    </div>
  );
}

export default Profil;

import React from 'react'; // Importation du module React
import { useState } from 'react'; // Importation du Hook useState pour gérer l'état du composant
import axios from 'axios'; // Importation du module Axios pour effectuer des requêtes HTTP
import { URL } from "../../utils/constants/URL"; // Importation de l'URL de l'API

const SignUp = () => {
    const [user, setUser] = useState({}); // Utilisation du Hook useState pour gérer l'état de l'utilisateur

    // Fonction de gestion des changements dans les champs de saisie
    const handleChange = (e) => {
        const { name, value } = e.target; // Extraction du nom et de la valeur de l'élément déclencheur de l'événement
        setUser((user) => ({ ...user, [name]: value })); // Mise à jour de l'état de l'utilisateur avec les nouvelles valeurs
    };

    // Fonction de soumission du formulaire d'inscription
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
        try {
            const response = await axios.post(URL.USER_SIGNUP, user); // Envoi de la requête POST avec les données de l'utilisateur
            console.log(response); // Affichage de la réponse de l'API dans la console
        } catch (e) {
            console.log(e); // Affichage des erreurs éventuelles dans la console
        }
    };

    // Rendu du composant SignUp avec le formulaire d'inscription
    return (
        <div>
            <form onSubmit={handleSubmit}> {/* Formulaire d'inscription avec gestion de l'événement de soumission */}
                <input onChange={handleChange} type="email" placeholder='email' name="email" /> {/* Champ de saisie de l'email avec gestion de l'événement de changement */}
                <input onChange={handleChange} type="password" placeholder='password' name="password" /> {/* Champ de saisie du mot de passe avec gestion de l'événement de changement */}
                {/* <input onChange={handleChange} type="text" placeholder='role' name="role"/> */} {/* Champ de saisie du rôle (commenté pour l'instant) */}
                <button type='submit'>S'inscrire</button> {/* Bouton de soumission du formulaire d'inscription */}
            </form>
        </div>
    );
}

export default SignUp; // Exportation du composant SignUp

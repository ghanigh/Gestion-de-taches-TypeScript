import React, { useContext, useState } from 'react'; // Importation des modules nécessaires
import { AuthContext } from '../../utils/context/AuthContext'; // Importation du contexte d'authentification
import '../../style/Sign.css'; // Importation du fichier de style CSS

const Sign = () => {
    const [user, setUser] = useState({}); // Utilisation du Hook useState pour gérer l'état de l'utilisateur
    const { login } = useContext(AuthContext); // Récupération de la fonction login depuis le contexte d'authentification
   
    // Fonction de gestion des changements dans les champs de saisie
    const handleChange = (event) => {
        console.log("Entree dans le handleChange()"); // Affichage d'un message dans la console
        const { name, value } = event.target; // Extraction du nom et de la valeur de l'élément déclencheur de l'événement
        setUser((user) => ({ ...user, [name]: value })); // Mise à jour de l'état de l'utilisateur avec les nouvelles valeurs
    };

    // Fonction de soumission du formulaire de connexion
    const handleSubmit = (e) => {
        console.log("Entree dans le handleSubmit()"); // Affichage d'un message dans la console
        e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
        login(user); // Appel de la fonction de connexion avec les données de l'utilisateur
    };

    // Rendu du composant Sign avec le formulaire de connexion
    return (
        <div>
            <form onSubmit={handleSubmit}> {/* Formulaire de connexion avec gestion de l'événement de soumission */}
                <input
                    type='email'
                    placeholder='email'
                    name='email'
                    onChange={handleChange} // Appel de la fonction de gestion des changements lors de la saisie
                />
                <input
                    type='password'
                    placeholder='password'
                    name='password'
                    onChange={handleChange} // Appel de la fonction de gestion des changements lors de la saisie
                />
                <button>Connexion</button> {/* Bouton de connexion avec gestion de l'événement de clic */}
            </form>
        </div>
    );
}

export default Sign; // Exportation du composant Sign

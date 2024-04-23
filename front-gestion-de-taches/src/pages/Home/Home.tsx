import React, { useContext } from 'react'; // Importation du module React et du Hook useContext
import { AuthContext } from '../../utils/context/AuthContext'; // Importation du contexte d'authentification
import Logo from '../../assets/GYF_logo.png';

const Home = () => {
    const { user } = useContext(AuthContext); // Utilisation du Hook useContext pour accéder au contexte d'authentification
    console.log(user); // Affichage de l'utilisateur dans la console

    // Vérification de la présence de données dans le localStorage
    if (localStorage.length > 0) {
        console.log("Entrée dans le if de Home");
        console.log(user); // Affichage de l'utilisateur dans la console si des données sont présentes dans le localStorage
    } else {
        console.log("Problème dans la vérification"); // Affichage d'un message en cas de problème dans la vérification du localStorage
    }

    // Rendu du composant Home
    return (
        <div>
            {/* Affichage du titre "Gestion de tâches" si des données sont présentes dans le localStorage */}
            {localStorage.length > 0 && (
                <h1>Gestion de tâches</h1>
                //   Les taches etc 
            )}
        </div>
    );
}

export default Home; // Exportation du composant Home

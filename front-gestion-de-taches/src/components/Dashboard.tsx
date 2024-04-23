import React, { useContext } from 'react';
import { AuthContext } from '..//utils/context/AuthContext';
import '../style/Dashboard.css'

const Dashboard = () => {
    // Utilisation du contexte d'authentification
    const { user } = useContext(AuthContext);

    return (
        <div>
            {/* Affichage du nom de l'utilisateur */}
            <h1>Bienvenue {user.username} sur le tableau de bord !</h1>
            {/* Ajoutez ici le contenu du tableau de bord */}
        </div>
    );
}

export default Dashboard;

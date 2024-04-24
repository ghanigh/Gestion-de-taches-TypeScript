import React, { useContext } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';
import Logo from '../../assets/GYF_logo.png';
import '../../style/Home.css'

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    // Affichage du texte explicatif pour les utilisateurs
    return (
        <div>
            <h1>Bienvenue sur notre plateforme de gestion de tâches !</h1>
            <p>Ici, vous pouvez organiser vos tâches quotidiennes de manière efficace et intuitive.</p>
            <p>Connectez-vous pour accéder à votre compte et commencer à utiliser nos fonctionnalités.</p>
            <p>Si vous n'avez pas encore de compte, vous pouvez vous inscrire gratuitement.</p>
        </div>
    );
}

export default Home;

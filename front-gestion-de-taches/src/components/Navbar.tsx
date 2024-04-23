import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
import Logo from '../../assets/GYF_logo.png';
import Logout from '../utils/componants/Logout';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/profil">Profil</Link>
        </li>
        <li>
          <Link to="/dashboard">Tâches</Link>
        </li>
        <li>
          <Link to="/signin">Connexion</Link> {/* Lien vers la page de connexion */}
        </li>
        <li>
          <Link to="/signup">Inscription</Link> {/* Lien vers la page d'inscription */}
        </li>
        <li>
          <Logout />
        </li>
        {/* Ajoutez d'autres liens ici selon votre besoin */}
      </ul>
    </nav>
  );
};

export default Navbar;

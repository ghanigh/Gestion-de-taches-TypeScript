import React from 'react'
import { NavLink, Link } from "react-router-dom";
import Logout from "./Logout"


const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/">
          <button>Home</button>{" "}
        </NavLink>

        <NavLink to="/signin">
          <button>Connexion</button>{" "}
        </NavLink>

        <NavLink to="/signup">
          <button> S'inscrire </button>{" "}
        </NavLink>
        <Logout/>
      </nav>
    </header>
  )
}

export default Header

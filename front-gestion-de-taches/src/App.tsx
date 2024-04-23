import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Sign from './pages/Auth/Sign.js';
import SignUp from './pages/Auth/SignUp.js';

import Dashboard from './components/Dashboard.js';
import Navbar from './components/Navbar.tsx';
import Profil from './components/Profil.tsx';
import './style/App.css';
import Logo from '../../assets/GYF_logo.png';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Navbar /> {/* Ajoutez la navbar ici */}
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Ajout de la route vers le tableau de bord */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home//Home.js';
import Sign from './pages/Auth/Sign.js';
import SignUp from './pages/Auth/SignUp.js';
import Dashboard from './components/Dashboard.js';
import Header from './utils/componants/Header.tsx';
import './style/App.css';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Ajout de la route vers le tableau de bord */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

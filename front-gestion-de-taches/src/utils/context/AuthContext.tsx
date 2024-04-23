import React, { createContext, useEffect, useState } from "react";
import { URL } from "../constants/URL"; // Importation de l'URL depuis un fichier de constantes
import axios from "axios"; // Importation de Axios pour effectuer des requêtes HTTP

export const AuthContext = createContext(); // Création du contexte d'authentification

export const AuthProvider = ({ children }) => {
    // Utilisation du Hook useState pour gérer l'état de chargement et de l'utilisateur
    const [isLoading, setIsLoading] = useState(false); // État de chargement initialisé à false
    const [user, setUser] = useState(null); // État de l'utilisateur initialisé à null

    // Fonction de connexion utilisateur
    const login = async (dataForm) => {
        console.log("Entre dans la fonction login sur AuthContext");
        console.log(dataForm);

        // API
        setIsLoading(true); // Activation de l'état de chargement

        try {
            console.log("Entree dans le try de AuthContext");
            // Requête POST vers l'URL d'authentification avec les données du formulaire
            const { data, status } = await axios.post(URL.USER_LOGIN, dataForm);
            if (status === 200) {
                setUser(data); // Mise à jour de l'état de l'utilisateur avec les données reçues
                console.log(data);
                localStorage.setItem("user", JSON.stringify(data)); // Stockage des données utilisateur dans le localStorage
                setIsLoading(false); // Désactivation de l'état de chargement
            }
        } catch (e) {
            console.log("erreur localStorage");
            console.log(e);
            setIsLoading(false); // Désactivation de l'état de chargement en cas d'erreur
        }
    };

    // Fonction de déconnexion utilisateur
    const logout = () => {
        console.log("entree dans logout()");
        localStorage.removeItem("user"); // Suppression des données utilisateur du localStorage
    };

    // Rendu de l'application avec le contexte d'authentification
    return (
        <AuthContext.Provider value={{ user, login, isLoading, logout }}>
            {children} {/* Rendu des composants enfants */}
        </AuthContext.Provider>
    );
};

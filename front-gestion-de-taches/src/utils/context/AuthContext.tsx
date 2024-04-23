import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../constants/URL";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (dataForm) => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.post(URL.USER_LOGIN, dataForm);
      if (status === 200) {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setIsLoading(false);
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    document.location.href = "./signin";
  };

  return (
    <AuthContext.Provider value={{ user, login, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

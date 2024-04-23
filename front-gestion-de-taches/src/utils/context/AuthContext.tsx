import React, { createContext , useEffect , useState} from "react";
import {URL} from "../constants/URL"
import axios from "axios";

export const AuthContext = createContext() 

export const AuthProvider = ({ children }) =>{

    const [ isLoading , setIsLoading ] = useState(false)

    const [ user , setUser ] = useState(null)

    const login = async(dataForm) =>{
        console.log("Entre dans function login sur AuthContext")
        console.log(dataForm)

        // API 
        setIsLoading(true)
        
        try{
            console.log("Entree dans le try de AuthContext")
            const { data , status} = await axios.post(URL.USER_LOGIN , dataForm)
            if(status === 200){
                setUser(data)
                console.log(data)
                localStorage.setItem("user" , JSON.stringify(data));
                
                // const recupUser = localStorage.getItem("user") ; 
                // JSON.parse(recupUser) ; 
                
                setIsLoading(false)
            }
        } catch(e){
            console.log("erreur localStorage")
            console.log(e)
            setIsLoading(false)
        }
    }    
    const logout = () => {
        console.log("entree dnas logout()")
        localStorage.removeItem("user")
    } 

    return(
        <AuthContext.Provider value={{user , login , isLoading , logout}}>
            {children}
        </AuthContext.Provider>
    )
}
import React, { useContext } from 'react'
import { AuthContext } from '../../utils/context/AuthContext'


const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
        if(localStorage.length > 0){
            console.log("entree dans le if de homeContext")
            console.log(user)
        }else{
            console.log("Probleme dans la verification")
        }

  return (
    <div>
      {localStorage.length > 0 && (
          <h1>Gestion de tâches</h1>

        //   Les taches etc 
      )}
    </div>
  )
}

export default Home

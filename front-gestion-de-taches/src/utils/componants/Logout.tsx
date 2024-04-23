import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Logout = () => {
    const {logout} = useContext(AuthContext)
  return (
    <>
      <button onClick={logout}>Déconnexion</button>
    </>
  )
}

export default Logout

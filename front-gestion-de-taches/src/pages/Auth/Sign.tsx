import React, { useContext, useState } from 'react'
import { AuthContext } from '../../utils/context/AuthContext'
import '../../style/Sign.css';

const Sign = () => {
    const [user , setUser] = useState({})
    const {login} = useContext(AuthContext)
   
    const handleChange = (event) =>{
        console.log("Entree dans le handleChange()")
        const { name, value } = event.target
        setUser((user) => ({ ...user, [name]: value }))    
    }


    const handleSubmit = (e) =>{
        console.log("Entree dans le handleSubmit()")
        e.preventDefault()
        login(user)
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button>Connexion</button>
        </form>
    </div>
  )
}

export default Sign

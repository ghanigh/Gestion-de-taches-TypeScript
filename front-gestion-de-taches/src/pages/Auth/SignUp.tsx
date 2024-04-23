import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { URL } from "../../utils/constants/URL"

const SignUp = () => {
    const [user , setUser] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target 
        setUser((user) => ({...user, [name]:value}))
        
    };

    const hundleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log(user)
            const response = await axios.post(URL.USER_SIGNUP , user)
            console.log(response)
            
        }catch(e){
            console.log(e);
        }
      }

  return (
    <div>
      <form onSubmit={hundleSubmit}>

        <input onChange={handleChange} type="email" placeholder='email' name="email"/>
        <input onChange={handleChange} type="password" placeholder='password' name="password"/>
        {/* <input onChange={handleChange} type="text" placeholder='role' name="role"/> */}
        <button type='submit'> S'incrire</button>

      </form>
    </div>
  )
}

export default SignUp

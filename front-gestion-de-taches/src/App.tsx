import { useState } from 'react'
import Home from './pages/Home/Home'
import Sign from './pages/Auth/Sign'
import SignUp from './pages/Auth/SignUp'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Header from "./utils/componants/Header.jsx"


import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='/signin' element={<Sign />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

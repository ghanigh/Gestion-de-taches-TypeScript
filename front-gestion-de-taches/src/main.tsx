import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Provider - Redux
// import { Provider } from "react-redux"
import { AuthProvider } from './utils/context/AuthContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    {/* <Provider store={store}/> */}
    <App />
    </AuthProvider>
  </React.StrictMode>,
)

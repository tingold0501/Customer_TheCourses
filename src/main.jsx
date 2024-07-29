import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='744901264071-3geolvr1o45dol70hclm6ru8ht8vudp0.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>
)

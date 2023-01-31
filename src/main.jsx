import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import FavoritesProvider from './context/FavoritesContext'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesProvider>
  </React.StrictMode>,
)

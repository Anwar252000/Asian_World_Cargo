import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)

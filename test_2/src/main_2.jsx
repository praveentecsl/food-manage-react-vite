import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ClassComponents from './components/ClassComponents.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    
        
        <ClassComponents />
    </BrowserRouter>
    
  </StrictMode>,
)

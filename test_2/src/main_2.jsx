import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ClassComponents from './components/ClassComponents.jsx'
import FunctionalComponents from './components/FunctionalComponents.jsx'
import Use_effects from './components/use_effects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    
        
        <Use_effects/>
    </BrowserRouter>
    
  </StrictMode>,
)

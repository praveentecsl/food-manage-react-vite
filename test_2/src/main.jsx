import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Button from './Button.jsx' 
import Praveen from './Praveenn.jsx'
import Cat from './cat.jsx'
import Foreign from './foreign.jsx'
import Tradi from './traditional.jsx'
import Inde from './source/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cat /> */}
    {/* <Button />
    <Praveen />
    <Foreign />
    <Tradi />
    <Inde /> */}
    <App />
  </StrictMode>,
)

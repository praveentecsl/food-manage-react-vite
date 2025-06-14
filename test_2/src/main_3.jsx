import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.jsx'
import New from './components/ClassState.jsx'
import Changebg from './components/changebg.jsx'
import Dynamic from './components/dynamicbg.jsx'
import Props from './components/props.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    
      <Props 
      age= {40000000000000}
      name={"chandeepa weerasinghe"}
      />  
        
    </BrowserRouter>
    
  </StrictMode>,
)

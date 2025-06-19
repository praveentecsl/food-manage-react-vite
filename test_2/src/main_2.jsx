import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ClassComponents from './components/ClassComponents.jsx'
import FunctionalComponents from './components/FunctionalComponents.jsx'
import Use_effects from './components/use_effects.jsx'
import Use_memo from './components/use_Memo.jsx'
import Use_callback from './components/use_callback.jsx'
import Layout from './components/layout.jsx'
import Children from './components/children.jsx'
import Use_callback_1 from './components/use_callback_1.jsx'
import Use_REf from './components/use_Ref.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >

      <Use_REf/>
        
    </BrowserRouter>
    
  </StrictMode>,
)

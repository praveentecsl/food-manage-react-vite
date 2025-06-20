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
import UseRef_1 from './components/useRef_1.jsx'
import Parent from './components/parent.jsx'
import Children_1 from './components/children_1.jsx'
import Axios from './components/axios.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >

     <Axios/>
        
    </BrowserRouter>
    
  </StrictMode>,
)

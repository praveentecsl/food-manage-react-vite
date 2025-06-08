import { Routes,Route } from "react-router-dom";
import Foreign from './new_comp/foreign.jsx'
import Tradi from './new_comp/traditional.jsx'
import Home from './new_comp/home.jsx'
import Navbar from './new_comp/navbar.jsx'
import Nutri from './new_comp/nutrition.jsx'
import Click from './new_comp/click_me.jsx'
import Bus from './new_comp/bus.jsx'
import Train from './new_comp/train.jsx'
import Jaffna from './new_comp/jaffna.jsx'
import Galle from './new_comp/galle.jsx'


import './style.css'


export default function App(){
  return(
    <>
      <Navbar />
      <Routes >
        <Route path= "/" element={<Home />} />
        <Route path= "/foreign/tourists" element= {<Foreign />} />
        <Route path= "/traditional" element= {<Tradi />} />
        <Route path= "/nutritional" element={<Nutri />} />
        <Route path= "/click" element={<Click />}>
          <Route path="bus" element={<Bus />} />
          <Route path= "train" element={<Train />}>
            <Route path= "jaffna" element = {<Jaffna />} />
            <Route path="galle" element={<Galle />} />
          
          </Route>
          
        </Route>



      </Routes>
    
    
    
    
    </>
  )
}
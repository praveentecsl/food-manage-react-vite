import { Routes,Route } from "react-router-dom";
import Foreign from './new_comp/foreign.jsx'
import Tradi from './new_comp/traditional.jsx'
import Home from './new_comp/home.jsx'
import Navbar from './new_comp/navbar.jsx'
import Nutri from './new_comp/nutrition.jsx'
import Click from './new_comp/click_me.jsx'

import './style.css'


export default function App(){
  return(
    <>
      <Navbar />
      <Routes >
        <Route path= "/" element={<Home />} />
        <Route path= "/foreign" element= {<Foreign />} />
        <Route path= "/traditional" element= {<Tradi />} />
        <Route path= "/nutritional" element={<Nutri />} />
        <Route path= "/click" element={<Click />} />



      </Routes>
    
    
    
    
    </>
  )
}
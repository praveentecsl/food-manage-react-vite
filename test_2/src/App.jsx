import { Routes,Route } from "react-router-dom";
import Foreign from './new_comp/foreign.jsx'
import Tradi from './new_comp/traditional.jsx'
import Home from './new_comp/home.jsx'
import Navbar from './new_comp/navbar.jsx'


export default function App(){
  return(
    <>
      <Navbar />
      <Routes >
        <Route path= "/" element={<Home />} />
        <Route path= "/foreign" element= {<Foreign />} />
        <Route path= "/traditional" element= {<Tradi />} />



      </Routes>
    
    
    
    
    </>
  )
}
import React from 'react'
import Ch from './children.jsx'
import {Routes,Route} from 'react-router-dom'


export const layout = () => {
  return (

    <>
     <div>layout of the future of the world</div>
     <Routes>
        <Route path='praveen' element={<Ch/>}/>
        {/* <Route path='chandu' element= {}/> */}


     </Routes>
     
    
    </>
  )
}
export default layout


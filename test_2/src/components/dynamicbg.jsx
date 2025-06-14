import React, {useState} from 'react'

function Dynamicbg() {
    const [bgcolor,setbgcolor] = useState()

  return (
    <>
    <div>Here i am</div>
    <label>Input your favourite color :    </label>
    <input
    type="color"
    value={bgcolor}
    onChange={(e)=>setbgcolor(e.target.value)}
    />
    <div style={{backgroundColor:bgcolor, padding:"20px", textAlign:"center" }}>
        
    <p>the color of the div is changed to {bgcolor} </p>

    </div>


    </>
  )
}

export default Dynamicbg
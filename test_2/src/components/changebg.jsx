import React,{useState} from 'react'

function changebg() {

    const [bgcolor,setbgcolor] = useState("pink")
  return (
    <>
    <div>changebg</div>
    <div style={{backgroundColor:bgcolor, padding:"20px", textAlign:"center"}}>
        This is a dynamic div with the color of {bgcolor}
    </div>

    <button onClick={()=>{setbgcolor("green")}}>Green</button>
    <button onClick={()=>{setbgcolor("red")}}>Red</button>
    <button onClick={()=>{setbgcolor("yellow")}}>Yellow</button>
    <button onClick={()=>{setbgcolor("silver")}}>silver</button>
    <button onClick={()=>{setbgcolor("orange")}}>Orange</button>
    
    </>
  )
}

export default changebg
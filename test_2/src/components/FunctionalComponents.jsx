import React ,{useState} from 'react'

function FunctionalComponents() {

    const [color,setcolor] = useState("red")

    const changecolor = ()=>{
        setcolor("blue")
    }
  return (
    <>
    
    <div>FunctionalComponents brand new {color}</div>
    <button onClick={changecolor}>change the color</button>
    </>
  )
}

export default FunctionalComponents

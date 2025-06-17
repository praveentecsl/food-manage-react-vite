import React,{useState} from 'react'

function use_callback() {

  const [val,setval] = useState(true)

  const state=() => {
      console.log("State is changed : ",val)
    }

  const fun=() => {
    console.log("This happen when the render phase")
  }
  fun()
  



  return (
    <>
      <div>use_callback</div>
      <button onClick={()=>setval(!val)}>click to change the state</button>
      <div>The real state of the val is :{val.toString()}</div>
      <div>{state()}</div>
    
    
    </>
  )
}

export default use_callback
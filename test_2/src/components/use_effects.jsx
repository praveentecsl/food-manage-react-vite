import React,{useState,useEffect} from 'react'

const Use_effects = () => {

  const [val,setval] = useState(true)

  useEffect(()=>{
    console.log("I am a useEffect function }",val);

    return()=>{
      console.log("return function of the useEffect");
    }

  })





  return (

    <>
    <div>use_effectsp</div>
    <button onClick={()=>{setval(!val)}}>Click to change the state</button>
    <div>this is the val : {val.toString()}</div>
    
    </>
    
  )
}

export default Use_effects

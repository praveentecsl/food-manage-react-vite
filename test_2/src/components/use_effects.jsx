import React,{useState,useEffect} from 'react'

const Use_effects = () => {

  const [val,setval] = useState(true)
  const [val_1,setval_1] = useState(false)

  useEffect(()=>{
    console.log("I am a useEffect function :",val_1);

    return()=>{
      console.log("return function of the useEffect");
    }

  },[val_1,val])





  return (

    <>
    <div>use_effectsp</div>
    <button onClick={()=>{setval(!val)}}>Click to change the state</button>
    <div>this is the val : {val.toString()}</div>
    <h1>hellllllooooooo</h1>
    <button onClick={()=>{setval_1(!val_1)}}>change the val_1 : {val_1.toString()}</button>
    
    </>
    
  )
}

export default Use_effects

import React,{useEffect,useRef,useState}from 'react'

const use_Ref = () => {

    useEffect(()=>{
        console.log("I'm useEffect");
    })

    const count = useRef(2)

    const [val,setval] = useState(true)
    
  return (
    <>
    <div>use_Ref</div>
    <button onClick={()=>{count.current += 10}}>update the count</button>
    <div>the value of the count : {count.current}</div>
    <br/><br/>

    <button onClick={()=>{setval(!val)}}>change the state</button>
    
    </>
  )
}

export default use_Ref
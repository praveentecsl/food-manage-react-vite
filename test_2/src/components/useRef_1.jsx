import React,{useRef} from 'react'

const useRef_1 = () => {

    const ref = useRef()

    const handle= ()=>{
        console.log("handle is clicked")
        console.log(ref.current)
        ref.current.focus()
        
    }

  return (
    <>
    <div>useRef_1</div>
    <input ref= {ref}/>
    <button onClick={()=>{handle()}}>submit</button>
    
    </>
  )
}

export default useRef_1
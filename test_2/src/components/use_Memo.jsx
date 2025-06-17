import React,{useState,useMemo} from 'react'

export const use_Memo = () => {

    const [val,setval] = useState(true)
    const [val_1,setval_1] = useState(false)

    const result = ()=>{
        console.log("This is a fuction without Memo")
        let sum = 0
        for(let i=0; i<300; ++i){
            sum += i

        }
        return sum
    }

    const result_1 =useMemo(()=>{
        console.log("USE MEMOOOOOO")
        let sum = 0
        for(let i=0; i<10; ++i){
            sum += i
        }
        return sum

    },[val_1,val]
    )

  return (

    <>
        <div>use_Memo</div>
        <button onClick={()=>setval(!val)}>
            submit without Memo
        </button>
        <div>This is the result : {result()}</div>

        <h1>useeeeee Memmmmmo</h1>
        <button 
        onClick={()=>{setval_1(!val_1)}}>
            With Memo
        </button>
        <div>Result is on the pageman : {result_1}</div>

    
    
    
    </>



  )
}

export default use_Memo

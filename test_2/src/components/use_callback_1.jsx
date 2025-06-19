import React,{useState ,useCallback} from 'react'

const Button = React.memo(({prop})=> {
    console.log("button is rendered")
        return <button onClick={prop}>click me</button>
    
})

const use_callback_1 = () => {

    const [val,setval] = useState(true);

    const handleclick = useCallback(() =>{
        console.log("Handel ckicked");
    },[])

  return (
    <>
    <div>use_callback_1</div>
    <button onClick={()=>{setval(!val)}} >change the state</button>
    <br/><br/>
    <Button prop={handleclick}>submit</Button>
    
    </>
  )
}

export default use_callback_1
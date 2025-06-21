import React ,{useState} from 'react'
import axios from 'axios'

const aaxios = () => {

    const [val,setVal] = useState()
    const [city,setCity] = useState()

    const handleEnter= (e) => {
        console.log(e.target.value)
    }

    axios.get("http://api.example.com/users")
    .then(response => {
        setVal(response?.data?.body)
        console.log(response)
    })
    .catch(error =>{
        console.error('error fetching user :',error)
    });

  return (
    <>
    
    <div>axios</div>
    <input onChange={handleEnter}/>
    
    </>
  )
}

export default aaxios
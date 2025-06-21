import React ,{useEffect, useState} from 'react'
import axios from 'axios'

const aaxios = () => {

    const [val,setVal] = useState()
    const [city,setCity] = useState()

    const handleEnter= (e) => {
        setCity(e.target.value)
    }

    useEffect(()=>{
      
          axios.get('http://api.weatherapi.com/v1/current.json?key=151miHt3Ay1FLgc8DzjeZFjXN5eiJvnmVh=&q-${city}'
)
          .then(response => {
              setVal(response?.data?.body)
              console.log(response)
          })
          .catch(error =>{
              console.error('error fetching user :',error)
          });

    },[city])

  return (
    <>
    
    <div>axios</div>
    <input onChange={handleEnter}/>
    
    </>
  )
}

export default aaxios
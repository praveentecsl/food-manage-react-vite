import React from 'react'
import X from './children_1.jsx'

const parent = ({children}) => {
  return (
    <>
    <div>parent</div>
    {children}
    <X val={200} name= {"praveen"}/>

    
    </>
  )
}

export default parent
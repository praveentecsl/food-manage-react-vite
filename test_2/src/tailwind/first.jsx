import '../index.css'

import React from 'react'

const first = () => {
  return (
    <>
    <div>first</div>

    <h1 className="text-3xl font-bold text-center text-blue-600">
        Hello Tailwind!
    </h1>

    <br/>

    <h1 className="text-3xl font-bold underline">
        Hello Tailwind!
    </h1>

        <div className="bg-blue-500 text-white p-4 rounded-md shadow-md">
            Welcome to Tailwind + React!
        </div>
    
    </>


  )
}

export default first
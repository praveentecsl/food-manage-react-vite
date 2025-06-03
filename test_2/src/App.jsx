// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(1000)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Route, Routes } from 'react-router-dom'
import Foreign from './source/pages/foreign.jsx'
import Nutri from './source/pages/nutrition.jsx'
import Tradi from './source/pages/traditional.jsx'

export default function app(){
  return(
    <Routes>
      <Route path = "/foreign" element={<Foreign/>}/>
      <Route path = "/tradi" element={<Tradi/>}/>
      <Route path = "/nutri" element={<Nutri/>}/>
      <Route path = "/" element={<Nutri/>}/>
    </Routes>
  )
}

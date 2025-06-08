import Second_nav from './second_nav.jsx'
import { Routes,Route } from "react-router-dom"
import Bus from './bus.jsx'

export default function clickme(){
    return(
        <>
            <div>
                <h1>what is your choice ?????</h1>
            </div>
            
            <Second_nav />

            <Routes>
                <Route path="bus" element= {<Bus />} />
            </Routes>


        </>
    )
}
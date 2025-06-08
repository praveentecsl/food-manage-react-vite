import Third_nav from './third_navbar.jsx'
import { Outlet } from 'react-router-dom'

export default function train(){
    return(
        <div>
            <h1>I'm a long train</h1>
            <Third_nav />
            <Outlet />



        </div>
    )
}
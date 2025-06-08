import Second_nav from './second_nav.jsx'
import { Outlet} from "react-router-dom"
import Bus from './bus.jsx'

export default function clickme(){
    return(
        <>
            <div>
                <h1>what is your choice ?????</h1>
                <Second_nav />
                <Outlet />
            </div>
            

            


        </>
    )
}
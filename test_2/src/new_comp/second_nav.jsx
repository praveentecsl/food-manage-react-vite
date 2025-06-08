import { Link } from "react-router-dom"

export default function second_nav(){
    return(
        <nav>
                <Link to="/click/bus">Bus</Link>
                <Link to="/click/train">Train</Link>    
        </nav>
    )
}
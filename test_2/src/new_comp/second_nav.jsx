import { Link } from "react-router-dom"

export default function second_nav(){
    return(
        <nav>
                <Link to="bus">Bus</Link>
                <Link to="train">Train</Link>    
        </nav>
    )
}
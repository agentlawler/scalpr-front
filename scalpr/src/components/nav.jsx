import { NavLink } from "react-router-dom"



export default function Nav () {



    return (
        <nav>
            <ul className="navbar-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/venues">Venues</NavLink></li>
                <li><NavLink to="/shows">Shows</NavLink></li>
                
            </ul>
        </nav>
    )
}
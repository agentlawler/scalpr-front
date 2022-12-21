import { NavLink } from "react-router-dom"



export default function Nav () {



    return (
        <nav>
            <ul className="navbar-links">
                <li><NavLink exact to="/" end>Home</NavLink></li>
                <li><NavLink exact to="/venues" end>Venues</NavLink></li>
                <li><NavLink exact to="/shows" end>Shows</NavLink></li>
                
            </ul>
        </nav>
    )
}
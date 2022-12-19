import { Link } from "react-router-dom"



export default function Nav () {



    return (
        <div className="nav">
            <div className="navbar-links">
                <Link to="/" className="link">Home</Link>
                <Link to="/mytickets" className="link">My Tickets</Link>
                <Link to="/shows" className="link">Shows</Link>
                <Link to="/venues" className="link">Venues</Link>
                <Link to="/affiliates" className="link">Affiliates</Link>
            </div>
        </div>
    )
}
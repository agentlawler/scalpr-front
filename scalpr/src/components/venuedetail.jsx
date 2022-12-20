import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export default function VenueDetail () {

    const { id } = useParams()
    const [venue, setVenue] = useState([])
    useEffect(() => {
        const getVenue = async () => {
            const response = await axios.get(`http://localhost:8000/api/venues/${id}`)
            setVenue(response.data)
            console.log(id)
            console.log(response.data)
        }
        getVenue()
    }, [])


    return (
        <div className="venuedetail">
            <div className="venuedetail-container">
                <div className="venuedetail-image">
                    <img src={venue.image} alt={venue.name} height="200px"/>
                    </div>
                    <div className="venuedetail-info">
                        <h1>{venue.name}</h1>
                        <h3>{venue.address}</h3>
                        <h3>{venue.phone_number}</h3>
                        <br></br>
                        <h3>{venue.description}</h3>
                        <br></br>
                        <h2><a href={venue.website}>Check out more on their website</a></h2>
                    </div>
                </div>
                <div className="venuedetail-shows">
                    <h1>Upcoming Shows</h1>
                    <div className="venuedetail-shows-container">
                        {venue.shows && venue.shows.map((show) => (
                            <div className="venuedetail-shows-show" key={show.id}>
                                <Link to={`/shows/${show.id}`}>
                                    <img src={show.image
                                    } alt={show.title} height="200px"/>
                                    <div className="info">
                                        <h3>{show.title}</h3>
                                        <h4>{show.month}-{show.day}-{show.year}</h4>
                                    </div>
                                </Link>
                                </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}
// updated files
import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"


export default function VenueDetail () {

    const [venue, setVenue] = useState([])
    useEffect(() => {
        const getVenue = async () => {
            const response = await axios.get(`http://localhost:8000/api/venues/${venue.id}`)
            setVenue(response.data)
        }
        getVenue()
    }, [])


    return (
        <div className="venuedetail">
            <div className="venuedetail-container">
                <div className="venuedetail-image">
                    <img src={venue.image} alt={venue.name} />
                    </div>
                    <div className="venuedetail-info">
                        <h1>{venue.name}</h1>
                        <h2>{venue.address}</h2>
                        <h2>{venue.phone}</h2>
                        <h2>{venue.website}</h2>
                        <h2>{venue.description}</h2>
                    </div>
                </div>
        </div>
    )
}
// updated files
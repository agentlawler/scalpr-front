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

// create a handleclick function that will sort the shows by name

    const handleNameClick = () => { 
        let localVenues = {...venue}
        localVenues.shows.sort((a,b)=>{
            let nameA = a.title.toUpperCase()
            let nameB = b.title.toUpperCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        })
        setVenue({...localVenues})
    }

    const handleDateClick = () => {
        let localVenues = {...venue}
        localVenues.shows.sort((a,b)=>{
            let dateA = new Date(a.year, a.month, a.day);
            let dateB = new Date(b.year, b.month, b.day);
            return dateA - dateB;
        })
        setVenue({...localVenues})
    }

    const handlePriceClick = () => {
        let localVenues = {...venue}
        localVenues.shows.sort((a,b)=>{
            let priceA = a.price_min
            let priceB = b.price_min
            return priceA - priceB;
        })
        setVenue({...localVenues})
    }


    return venue ? (
        <div className="venuedetail">
            <div className="sort-button">
                <button onClick={handleNameClick}>Sort by Name</button>
                <button onClick={handleDateClick}>Sort by Date</button>
                <button onClick={handlePriceClick}>Sort by Price</button>
            </div>
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
                                        <h4>{show.price_min}</h4>
                                    </div>
                                </Link>
                                </div>
                        ))}
                    </div>
                </div>
        </div>
    ) : ( <h1>Loading...</h1>)
}
// updated files
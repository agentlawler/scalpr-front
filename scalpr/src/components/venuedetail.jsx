import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import SingleShow from "./SingleShow"


export default function VenueDetail () {
    const { id } = useParams()
    const [venue, setVenue] = useState([])
    const [sortedBy, setSortedBy] = useState("date")
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

    const sortByTitle = () => { 
        setSortedBy("title");
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

    const sortByDate = () => {
        setSortedBy("date");
        let localVenues = {...venue}
        localVenues.shows.sort((a,b)=>{
            let dateA = new Date(a.year, a.month, a.day);
            let dateB = new Date(b.year, b.month, b.day);
            return dateA - dateB;
        })
        setVenue({...localVenues})
    }

    const sortByPrice = () => {
        setSortedBy("price");
        let localVenues = {...venue}
        localVenues.shows.sort((a,b)=>{
            let priceA = a.price_min
            let priceB = b.price_min
            return priceA - priceB;
        })
        setVenue({...localVenues})
    }


    return venue ? (
    <div className="container">
        <div className="venuedetail">
            {/* <div className="sort-button">
                <button onClick={handleNameClick}>Sort by Name</button>
                <button onClick={handleDateClick}>Sort by Date</button>
                <button onClick={handlePriceClick}>Sort by Price</button>
            </div> */}
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
                    <div className="sortContainer">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h12v3Zm0-10.5v-3h24v3ZM6 15v-3h36v3Z"/></svg>
      <button className={sortedBy === "title" ? "activeSort":undefined} onClick={sortByTitle}>Title</button>
      <button className={sortedBy === "date" ? "activeSort":undefined} onClick={sortByDate}>Date</button>
      <button className={sortedBy === "price" ? "activeSort":undefined}  onClick={sortByPrice}>Lowest Price</button>
      </div>
      <div className="shows">
                        {venue.shows && venue.shows.map((show) => (
                            <SingleShow show={show} venues={false} venue={venue}/>
                        ))}
                    </div>
                </div>
        </div>
        </div>
    ) : ( <h1>Loading...</h1>)
}
// updated files
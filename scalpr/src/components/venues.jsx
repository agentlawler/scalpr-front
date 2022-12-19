import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Venues() {
  const [venues, setVenues] = useState([])
  useEffect(() => {
    const getVenues = async () => {
      const response = await axios.get("http://localhost:8000/api/venues/")
      setVenues(response.data)
    }
    getVenues()
  }, [])

  return venues ? (
    <div className="container">
        <div className="Venues">
            {venues.map((venue) => (
                <div className="venue" key={venue.id}>
                    <Link to={`/venues/${venue.id}`}>
                        <img src={venue.image} alt={venue.name} height="200px"/>
                        <h3>{venue.name}</h3>
                        <h4>{venue.address}</h4>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  ) : (
    <h1> Loading Please Wait ... </h1>
  )
}
// updated files
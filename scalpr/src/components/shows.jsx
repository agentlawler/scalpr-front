import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Shows() {
  const [shows, setShows] = useState([])
  const [venues, setVenues] = useState([])
  useEffect(() => {
    const getShows = async () => {
      const response = await axios.get("http://localhost:8000/api/shows/")
      const responseVenues = await axios.get("http://localhost:8000/api/venues/")
      setShows(response.data)
      setVenues(responseVenues.data)

    }
    getShows()
  }, [])

shows.sort((a,b)=>{
    let dateA = new Date(a.year, a.month, a.day);
    let dateB = new Date(b.year, b.month, b.day);
    return dateA - dateB;
  })

  return shows ? (
    <div className="container">
        <div className="shows">
            {shows.map((show) => (
                <div className="show" key={show.id}>
                  <div className="showDate">
                    <h4>{show.month}-{show.day}-{show.year} at {venues.find(venue=>venue.id===show.venue).name}</h4>
                  </div>
                  <div className="showInfo">
                  <Link to={`/shows/${show.id}`}>
                    <div className="showThumbnail" style={{backgroundImage: `url(${show.image})`}}>
                    </div>
                    </Link>
                    <div className="infoBody">
                    <h3>
                    <Link to={`/shows/${show.id}`}>
                        {show.title}
                    </Link>
                    </h3>
                    <div className="btn-container">
                    <Link to={`/shows/${show.id}`} className="btn">More Info</Link>
                    </div>
                      </div>
                      
                  </div>
                    
                    
                </div>
            ))}
        </div>
    </div>
  ) : (
    <h1> Loading Please Wait ... </h1>
  )
}
// updated files
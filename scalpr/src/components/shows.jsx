import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Shows() {
  const [shows, setShows] = useState([])
  useEffect(() => {
    const getShows = async () => {
      const response = await axios.get("http://localhost:8000/api/shows/")
      setShows(response.data)
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
                    <Link to={`/shows/${show.id}`}>
                        <img src={show.image} alt={show.title} height="200px"/>
                        <h3>{show.title}</h3>
                        <h4> Live on: {show.month}-{show.day}-{show.year} at {show.door_time}</h4>
                    </Link>
                    <br></br>
                </div>
            ))}
        </div>
    </div>
  ) : (
    <h1> Loading Please Wait ... </h1>
  )
}
// updated files
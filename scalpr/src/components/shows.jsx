import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Shows() {
  const [shows, setShows] = useState([])
  useEffect(() => {
    const getShows = async () => {
      const response = await axios.get("")
      setShows(response.data)
    }
    getShows()
  }, [])

  return shows ? (
    <div className="container">
        <div className="shows">
            {shows.map((show) => (
                <div className="show" key={show.id}>
                    <Link to={`/shows/${show.id}`}>
                        <img src={show.image} alt={show.name} />
                        <h3>{show.name}</h3>
                    </Link>
                    </div>
            ))}

        </div>
    </div>
  ) : (
    <h1> Loading Please Wait ... </h1>
  )
}

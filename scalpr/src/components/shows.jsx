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
      shows.sort((a,b)=>{
        let dateA = new Date(a.year, a.month, a.day);
        let dateB = new Date(b.year, b.month, b.day);
        return dateA - dateB;
      })
    
      
    }
    getShows()
  }, [])


function sortByTitle(){
    let localshowsort = [...shows]
    localshowsort.sort((a,b)=>{
    let alphasortA = a.title.toUpperCase()
    let alphasortB = b.title.toUpperCase()
    if (alphasortA<alphasortB){
      return -1
    }if (alphasortA>alphasortB){
      return 1
    }
    return 0
  })
  setShows(localshowsort)
}

function sortByDate(){
    let localshowsort= [...shows]
    localshowsort.sort((a,b)=>{
    let dateA = new Date(a.year, a.month, a.day);
    let dateB = new Date(b.year, b.month, b.day);
    return dateA - dateB;
  })
  setShows(localshowsort)

}

function sortByPrice(){
  let localshowsort =[...shows]
  localshowsort.sort((a,b)=>{
  let priceA = a.price_min
  let priceB = b.price_min
  return priceA - priceB
  })
  setShows(localshowsort)
}




  return shows ? (
    <div className="container">
      <button onClick={sortByTitle}>Title</button>
      <button onClick={sortByDate}>Date</button>
      <button onClick={sortByPrice}>Lowest Price</button>


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

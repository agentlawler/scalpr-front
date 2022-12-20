import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import SingleShow from "./SingleShow"

export default function Shows() {
  const [shows, setShows] = useState([])
  const [venues, setVenues] = useState([])
  const [sortedBy, setSortedBy] = useState("date")
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
  setSortedBy("title")
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
  setSortedBy("date")
    let localshowsort= [...shows]
    localshowsort.sort((a,b)=>{
    let dateA = new Date(a.year, a.month, a.day);
    let dateB = new Date(b.year, b.month, b.day);
    return dateA - dateB;
  })
  setShows(localshowsort)

}

function sortByPrice(){
  setSortedBy("price")
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
      
      <div className="sortContainer">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h12v3Zm0-10.5v-3h24v3ZM6 15v-3h36v3Z"/></svg>
      <button className={sortedBy === "title" ? "activeSort":undefined} onClick={sortByTitle}>Title</button>
      <button className={sortedBy === "date" ? "activeSort":undefined} onClick={sortByDate}>Date</button>
      <button className={sortedBy === "price" ? "activeSort":undefined}  onClick={sortByPrice}>Lowest Price</button>
      </div>


        <div className="shows">
            {shows.map((show) => (
                <SingleShow show={show} venues={venues} venue={false}/>
                
            ))}
        </div>
    </div>
  ) : (
    <h1> Loading Please Wait ... </h1>
  )
}

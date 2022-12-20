import { Link } from "react-router-dom"

export default function SingleShow({show, venues, venue}){
  return(
    <div className="show" key={show.id}>
                  <div className="showDate">
                    <h4>{show.month}-{show.day}-{show.year} at {venues ? venues.find(venue=>venue.id===show.venue).name : venue ? venue.name : 'no venue data'} | {show.door_time} | {show.price_max ? `$${show.price_min}-$${show.price_max}`: `$${show.price_min}`}</h4>
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
  )
}
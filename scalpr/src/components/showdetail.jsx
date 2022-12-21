import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function ShowDetail () {

    const { id } = useParams()
    const [show, setShow] = useState([])
    const [venue, setVenue] = useState([])
    const [description, setDescription] = useState([])
    useEffect(() => {
        const getShow = async () => {
            const response = await axios.get(`http://localhost:8000/api/shows/${id}`)
            setShow(response.data)
            const responseVenue = await axios.get(`http://localhost:8000/api/venues/${response.data.venue}`)
            setVenue(responseVenue.data)
            let responseDescription = response.data.description.replace(/\r\n/g, "<br />").split("<br />");
            setDescription(responseDescription)
        }
        getShow()
    }, [])

    let navigate = useNavigate()
    const handleBackClick = (e)=>{
        e.preventDefault()
        navigate(-1);
    }

    console.log(show)
    console.log(venue)
    console.log(description)
    return (
        <>
        <div className="backContainer">
        <button onClick={handleBackClick}>Back</button>
        </div>
        <div className="showdetail container">
            
                <aside className="showdetail-image">
                    <img src={show.image} alt={show.name} height="200px"/>
                    <a href={show.tickets_url}>Get Tickets*</a>
                    <small>*This button will take you off app.</small>
                </aside>
                    <div className="info">
                        <h3>{show.month}-{show.day}-{show.year} at {venue.name} | {show.door_time} | ${show.price_min}</h3>
                        <h2>{show.title}</h2>
                        <h4>Additional information:</h4>
                        
                        {
                            description.length ? description.map(elem => (<p>{elem}</p>)) : (<p>loading</p>)
                        }
                       
                    </div>
               
        </div>
        </>
    )
}
// updated files
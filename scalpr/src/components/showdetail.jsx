import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export default function ShowDetail () {

    const { id } = useParams()
    const [show, setShow] = useState([])
    useEffect(() => {
        const getShow = async () => {
            const response = await axios.get(`http://localhost:8000/api/shows/${id}`)
            setShow(response.data)
        }
        getShow()
    }, [])


    return (
        <div className="showdetail">
            <div className="showdetail-container">
                <div className="showdetail-image">
                    <img src={show.image} alt={show.name} />
                    </div>
                    <div className="showdetail-info">
                        <h2>{show.title}</h2>
                        <br></br>
                        <h3>Available {show.month}-{show.day}-{show.year} beginning at {show.door_time}</h3>
                        <br></br>
                        <h4>{show.description}</h4>
                        <br></br>
                        <h2><a href={show.tickets_url}>Find tickets here!</a></h2>
                        <h3>Starting at ${show.price_min}</h3>
                    </div>
                </div>
        </div>
    )
}
// updated files
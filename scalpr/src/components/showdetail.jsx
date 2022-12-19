import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export default function ShowDetail () {

    const { id } = useParams()
    const [show, setShow] = useState([])
    useEffect(() => {
        const getShow = async () => {
            const response = await axios.get(`http://localhost:8000/api/venues/${show.id}`)
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
                        <h1>{show.name}</h1>
                        <h2>{show.address}</h2>
                        <h2>{show.phone}</h2>
                        <h2>{show.website}</h2>
                        <h2>{show.description}</h2>
                    </div>
                </div>
        </div>
    )
}
// updated files
import { Route, Routes } from 'react-router-dom'
import  Shows from './Shows'
import Home from './Home'
import Affiliates from './Affiliates'
import Venues from './Venues'
import MyTickets from './MyTickets'


export default function Main () {

    
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shows" element={<Shows/>}/>
                <Route path="/affiliates" element={<Affiliates/>}/>
                <Route path="/venues" element={<Venues/>}/>
                <Route path="/mytickets" element={<MyTickets/>}/>
            </Routes>
        </div>
    )
}
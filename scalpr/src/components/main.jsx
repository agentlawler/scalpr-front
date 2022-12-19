import { Route, Routes } from 'react-router-dom'
import  Shows from './Shows'
import Home from './Home'

import Venues from './Venues'
import MyTickets from './MyTickets'


export default function Main () {

    
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shows" element={<Shows/>}/>
                
                <Route path="/venues" element={<Venues/>}/>
                <Route path="/mytickets" element={<MyTickets/>}/>
            </Routes>
        </div>
    )
}
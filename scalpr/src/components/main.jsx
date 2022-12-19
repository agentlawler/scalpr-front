import { Route, Routes } from 'react-router-dom'
import  Shows from './Shows'
import Home from './Home'



export default function Main () {

    
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/shows" element={<Shows />}/>
                
            </Routes>
        </div>
    )
}
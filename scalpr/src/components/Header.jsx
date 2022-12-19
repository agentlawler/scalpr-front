import Nav from './Nav'
import ScalprLogo from "../assets/scalpr_logo.png"

export default function Header () {



    return (
        <header>
            <div >
                <img className="logo" alt="Scalpr Logo" src={ScalprLogo} />
            </div>
            <Nav/>
        </header>
    )
}
import ScalprLogo from "../assets/scalpr_logo.png"
export default function Footer () {



    return (
        <footer>
            <div className="affiliates">
                <div className="ticketmaster">
                <a href="https://www.ticketmaster.com/">
                    <img src="https://play-lh.googleusercontent.com/KmWVboPY-BCCfiflJ-AYCPGBv86QLMsXsSpvQksC0DVR8ENV0lh-lwHnXrekpHwbQA=s256-rw" alt="Ticket Master" /></a>
                    </div>
                    <div className="seatgeek">
                    <a href="https://seatgeek.com/"><img src="https://seatgeek.com/images/mobile-app/iosIcon-new.png" alt="seatgeekIcon"/></a>
                    </div>
                    <div className="Twitter">
                    <a href="https://www.twitter.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="twitterIcon"/></a>
                    </div>
                    <div className="facebook">
                    <a href="https://www.facebook.com"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="facebookIcon"/></a>
                    </div>
            </div>
            <div className="footerInfo">
         
                <small>&copy; Lindsey Lawyer, Matt Kiska, Andrew Zheng, &amp; Devon Jones</small>
            </div>
        </footer>
    )
}
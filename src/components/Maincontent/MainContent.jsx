import React from 'react'
import './MainContent.css'
import { Link } from 'react-router-dom'
import addVideo from "../../videos/add.mp4"
function mainContent() {
    return (
        <div  className="maincontent">
            <h2>Featured: Nike Running</h2>
            <Link to="Section2">
            <div className="maincontent__video">
                <div className="maincontent__videoinfo">
                    <h1>PROJECT: RUN FEARLESS</h1>
                   <p>Foem meets funtion for stablity and support for miles.</p>
                   <button className="video__calltoact">Explore</button>
                   <button className="video__calltoact">Shop</button>
                </div>
            <video  className="maincontent__videoSource"   controls autoPlay muted loop  src={addVideo}></video>
            <div className="videoFrema"></div>
            </div>
            </Link>
        </div>
    )
}

export default mainContent

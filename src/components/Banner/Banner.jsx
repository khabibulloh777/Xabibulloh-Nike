import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
function Banner() {
    return (
         
        <div className="banner">   
        <Link to="/products">
             <div className="main__bannerContent" > 
                <div className="mainBanner__Info">
                <h1>TEAM USA ESSENTIALS </h1>
              <p>Cheers on all our Athkets as  they Take on the world in 
                        Tokio</p>
                      <button className="shop__btn">Shop</button>  
                </div>           
            </div>
            <div className="contentSeparator">
                <span>MASTER THE  BASICS</span>
                <p>Start fresh this school year with new basics that are anything but basic.</p>
                <button className="shop__btn">Shop</button>
            </div>
            </Link>
        </div>

)
}

export default Banner

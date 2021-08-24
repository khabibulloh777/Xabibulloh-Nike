import React from 'react'
import './Trending.css'
function Trendinng() {
    return (
        <div className="trending">
         <h3>The Latest And Greastest </h3>
         <div className="Trending__conatiner">
             <div className="Trending__item first">
        <div className="trend">
             <p>The New One Top Collection</p>
             <button className="shop__btn">Shop</button> 
             </div>
             </div>


             <div className="Trending__item  second">
            <div className="trend">
            <p>Musr-Have Matching Sets </p>
             <button className="shop__btn">Shop</button> 
            </div>

             </div>
         </div>
        </div>
    )
}






export default Trendinng
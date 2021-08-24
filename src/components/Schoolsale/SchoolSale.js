import React from 'react'
import './SchoolSale.css'
function SchoolSale() {
    return (
        <div className="schoolsale">
            <div className="schoolsale__container">
           
            <div className="shoolsale__main">
            <span>New Basics for School Uniforms </span>
                <button className="shop__btn">Shop</button>  
            </div>
            <div className="schoolsale__double">
                <div className="schoolsale__item  primary">
                <span>New Backpacks & More  </span>
                <button className="shop__btn">Shop</button> 
                </div>

                <div className="schoolsale__item  secuntary">
                <span>New Kicks For Day one  </span>
                <button className="shop__btn">Shop</button> 
                </div>
            </div>
            </div>
      
        </div>
    )
}

export default SchoolSale

import React from 'react'
import './Carousel.css'
import CAROUSEL__DATA from '../../data/CAROUSEL_DATA.json'
function Carousel() {
    return (
        <div className="Carousel">
            <div className="carousel__btn">
                <button>prev</button>
                <button>Next</button>
            </div>
              <div className="carousel_wrapper">
                {
                    CAROUSEL__DATA.map((carouselItem) => (
                        <div className="carousel_item">
                            <img src={carouselItem?.image} alt="" />
                            <h3>{carouselItem?.productName}</h3>
                        </div>
                    ) )
                }

            </div>
        </div>
    )
}

export default Carousel

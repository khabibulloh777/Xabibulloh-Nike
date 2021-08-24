import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { FiChevronDown, FiInstagram } from 'react-icons/fi'
import {AiFillQuestionCircle  } from 'react-icons/ai'
import { RiFacebookBoxFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { FiMapPin  } from 'react-icons/fi'
import CAROUSEL__DATA from '../../data/CAROUSEL_DATA.json'
import './Cart.css'
function Cart() {
   const [activeOpenDive, setActiveOpenDiv] = useState(false)
   const [activeText, setActiveText] = useState(false)
   const [activeOpenText, setActiveOpenText] = useState(false)
   const [activeOxirgiText, setActiveOxirgiText] = useState(false) 
    return (
        <div  className="cart"> 
          <div className="cart__container">
                    <div className="cart__bag">
                         <div className="shipping__btn">
                          <p>Free Shipping for Menmbers</p>
                          <span> Become a Nike Member for fast and free shipping. <Link>Join us </Link>  or <Link>Sign-in </Link> </span>
                         </div>
                         <h3>Bag </h3>
                         <p>There are no items in your bag.</p>
                         <div className="nimadur">
                           <h3>Favorites</h3>
                           <p>Want to view your favorites? <Link>Join</Link> us or <Link> Sign-in </Link></p>
                         </div>
                    </div>
                    <div className="cart__summary">
                     <h2>Summary</h2>
                     <div className="promo" >
                       <div className="onclik" > 
                         <h3>Do you have a Promo Code?  
                            <div  className="openinput" onClick={() => setActiveOpenDiv(!activeOpenDive) }>
                              <FiChevronDown/> 
                       </div>
                       <div className={activeOpenDive ? "opendivee" : "NotOpenDive"}>
                            <div className="input">
                         <input type="text" className="inn" />
                         <button>Apply</button>
                       </div> 
                             </div> 
                         <span onClick={() => setActiveText(!activeText)} className="open"> 
                         <AiFillQuestionCircle /> 
                          </span>
                          <div className={activeText? "openTextActive" : "NotOpenText"}>
                            <div className="chiq">
                          <p>
                          If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking "See Details" where the promotion was found online or in the footer of the email or mail. Promo Codes cannot be used with customized products.
                          </p>
                          </div>
                          </div> 
                        </h3>
                    
                       </div>
                     </div>
                     <div className="Subtotal">
                       <h4> Subtotal <span  className="openDive2" onClick={() => setActiveOpenText(!activeOpenText)}><AiFillQuestionCircle/> </span>
                    
                       <div className={activeOpenText? "openText": "NotOpen"}>
                         <div className="hello">
                          <p>
                          The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.                          
                         </p>
                         </div>
                          </div> 
                                          
                         </h4>
                       <p>$0.00</p>
                     </div>
                     <div className="shipping">
                       <h4>Estimeted Shipping & Handling</h4>
                       <p>$0.00</p>
                     </div>
                     <div className="Estime">
                       <h4>Estimated Tax <span onClick={() => setActiveOxirgiText(!activeOxirgiText)} className="uchi"> <AiFillQuestionCircle/>
                               <div className={activeOxirgiText ? "oxirgiOpen" : "NotOxirgi"}>
                                 <div className="oxirgisi">
                               The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped. <Link>Learn More</Link>
                                 </div>                  
                                 </div>
                       </span>
                       </h4>
                       <p>--</p>
                     </div>
                     <div className="line"></div>
                     <div className="total">
                       <h4>Total</h4>
                       <p>$0.00</p>
                     </div>
                     <div className="linew2"></div>
                    </div>  
          </div>
          <div className="line10"></div>
          <div className="crusel">
            <h3>YOU MIGHT ALSO LIKE</h3>
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
          <div className="black">
           <div className="footerkatta">
            <div className="blok">
              <h3>GIFT CARDS</h3>
              <h3> PROMOTIONS</h3>
              <h3>FIND A STORE</h3>
              <h3>SIGN UP FOR EMAIL</h3>
              <h3>BECOME A MEMBER</h3>
              <h3>NIKE JOURNAL</h3>
              <h3>SEND US FEEDBACK</h3>
            </div>
            <div className="help">
              <h3>GET HELP</h3>
              <p>Order Status</p>
              <p>Shipping and Delivery</p>
              <p>Returns</p>
              <p>Payment Options</p>
              <p>Gift Card Balance</p>
              <p>Contact Us</p>
            </div>
            <div className="AboutNike">
              <h3>About Nike</h3>
              <p>News</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Purpose</p>
              <p>Sustainability</p>
            </div>
               <div className="icons">
                 <div className="icon"><RiTwitterFill/></div>
                 <div className="iconn"><RiFacebookBoxFill/> </div>
                 <div className="iconm"><RiYoutubeFill/></div>
                 <div className="iconb"><FiInstagram/></div>
               </div>
              
           </div>
           <div className="nikeInc">
                 <h4><FiMapPin/> <span>United States</span></h4>
                 <p>2021 Nike, Inc. All Rigths Reserved</p>
                 <p>Guides</p>
                 <p>Terms of Sale</p>
                 <p>Terms of Use</p>
                 <p>Nike Privacy Policy</p>
                 <p>CA Supply Chains Act </p>
             </div>
          </div>
        </div>
    )
}

export default Cart

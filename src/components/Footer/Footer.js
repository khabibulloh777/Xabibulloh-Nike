import React from 'react'
import './Footer.css'
import {RiTwitterFill, RiFacebookBoxFill , RiYoutubeFill} from 'react-icons/ri'
import {FiInstagram,FiMapPin } from 'react-icons/fi'
function Footer() {
    return (
        <div className="footer">
         <div className="footer__fff">
         <ul>
             <h3 className="li_collection">Featured</h3> <br />
               <li className="li_collection">Air Force 1 </li>                     
               <li className="li_collection"> Jordan 1 </li>                     
               <li className="li_collection">Air Max 2090 </li>                     
               <li className="li_collection">Air Max 270</li>                     
         </ul>
         <ul>
         <h3 className="li_collection">Shoes</h3> <br />
               <li className="li_collection">All Shoes </li>                     
               <li className="li_collection"> Jordan Shoes </li>                     
               <li className="li_collection">Running Shoes</li>                     
               <li className="li_collection">Basketball Shoes</li>  
         </ul>
         <ul>
             <h3 className="li_collection">Clothing</h3><br />
         <li className="li_collection">All Cloting </li>                     
               <li className="li_collection"> Tops & T-Shirts </li>                     
               <li className="li_collection">Shorts</li>                     
               <li className="li_collection">Hoodies & Pullovers</li> 
         </ul>
         <ul>
         <h3 className="li_collection">Kids'</h3><br />
         <li className="li_collection">Infant & Toddler Shoes </li>                     
               <li className="li_collection"> Kids' Shoes </li>                     
               <li className="li_collection">Kids' Basketball Shoes</li>                     
               <li className="li_collection">Kids' Running Shoes</li> 
         </ul>
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
                 <div className="icon"><RiFacebookBoxFill/> </div>
                 <div className="icon"><RiYoutubeFill/></div>
                 <div className="icon"><FiInstagram/></div>
               </div>
           </div>
             <div className="footer__lineuz"></div>
             <br />
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

export default Footer

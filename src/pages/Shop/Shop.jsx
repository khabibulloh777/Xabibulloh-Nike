// import React from 'react'
// import './Shop.css'
// import { FiSearch, FiHeart , FiX ,FiChevronDown } from "react-icons/fi";
// import  {  BsBag } from "react-icons/bs"
// import  {  AiFillQuestionCircle } from "react-icons/ai"
// import { Link } from 'react-router-dom'
// function Shop({callback, removeCakkback}) {
//     const  closeBag2 = (e)=>{
//         const  yoqol = document.querySelector('.bag2')
//         yoqol.classList.add('active')
//     }
//     return (
//         <div className="shop">
//  <div className="header__top">
//                 <div className="header__topLogoContainer">
//                 <img src="https://lh3.googleusercontent.com/proxy/PeQlgKrvndXmxJ_lQL7mFvc-opNVCj2IfvpAOhMLC3v8Zu6iEaUx4SDOTiUaFSjRveMKDk2hul0Krol7HgEKhqkuRNYVmW-BGV3Rr0WMhivGPZcbQjgWajY" alt="" className="header__topLogo" />
//                 </div>
                
//               <ul className="header__topColletion">
//                   <li className="header__topItem">Help  
//                   <ul className="help__options">
//                       <h3 > Help</h3>
//                       <li className="help__Itemss">Order Status </li>
//                       <li className="help__Itemss">Dispatch and Devlivery </li>
//                       <li className="help__Itemss"> Retums </li>
//                       <li className="help__Itemss">Size charts</li>
//                       <li className="help__Itemss">Contact us </li>
//                       <li className="help__Itemss">Privacy Policy </li>
//                       <li className="help__Itemss">Terms of Sale </li>
//                       <li className="help__Itemss">Terms of Use </li>
//                       <li className="help__Itemss">Send us feedback</li>                  
//                       </ul></li>
//                   <li className="header__topItem">Join us </li>
//                   <li className="header__topItem">Sign in </li>
//               </ul>
//             </div>
//             <div className="main__header">
//                 <div className="mainheader__container">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png" alt="" className="mainheader__logo" />
//                 <ul className="mainheader__collection">
//                     <li className="mainheader__Item">New Releases</li>
//                     <li className="">Men</li>
//                     <li className="mainheader__Item">Women</li>
//                     <li className="mainheader__Item">Kids</li>
//                     <li className="mainheader__Item">Sale</li>
//                     <li className="mainheader__Item">Collections </li>
//                 </ul>
//                 <div className="mainheader__options">
//                     <div className="searchbar" onClick={callback}>
//                         <FiSearch className="sor"/>
//                   <input type="text" placeholder="Search" className="searchbar__input" />
//                     </div>
//                     <FiHeart className="headermain__icons"/>
//                     <Link to="/cart"  ><BsBag className="headermain__icons"  /></Link>  
//                </div>
         
//                 <div className="close__searchActive" onClick={removeCakkback}>
//                 <FiX/>
//                 </div>
//               </div>
//             </div>
//             <div className="shop2">
//             <div className="block">
              
            
//             <div className="bag">
//                     <h2>Free Shipping for Members.</h2>
//                     <p>Become a Nike Member for fast and free shipping. <a href="#">Join Us</a> or <a href="#">Sign In</a></p>
//                 </div>
//                 <div className="bag2">
//                 <p>New styles added: Save up to 50%</p>
//                     <p>Start fresh this fall. Sale ends 8.7. SHOP</p>
//                     <div className="clos">
//                     <FiX onClick={closeBag2} className="close" />

//                     </div>
//                 </div>
//                 <div className="bag3">
//                     <h2>Bag</h2>
//                     <p>There are no items in your bag.</p>
//            </div>
//            </div>
//            <div className="left">
//                <div className="shop3">
//                    <h1>Summary</h1>
//                    <p>Do you have a Promo Code? <FiChevronDown/> <AiFillQuestionCircle/>  </p>
//                    <p>Subtotal<AiFillQuestionCircle/> </p>
//                    <p>Estimated Shipping & Handling  </p>
//                    <p>Estimated Tax <AiFillQuestionCircle/>| </p>
//                    <div className="BR"></div>
//                    <p>Total</p>
//                    <div className="BR"></div>
//                    <div className="btn">
//                    <button>Checkout</button>
//                    <button>PayPal</button>
//                    </div>
//                </div>
                
//             </div>
//             </div>
            
//         </div>
//     )
// }

// export default Shop

import React from 'react'
import './Header.css'
import { FiSearch, FiHeart , FiX  } from "react-icons/fi";
import { FiShoppingBag  } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom"
function Header({callback, removeCakkback}) {
    let location = useLocation();
    return (
        <div className="header">
            <div className="header__top">
                <div className="header__topLogoContainer">
                <img src="https://lh3.googleusercontent.com/proxy/PeQlgKrvndXmxJ_lQL7mFvc-opNVCj2IfvpAOhMLC3v8Zu6iEaUx4SDOTiUaFSjRveMKDk2hul0Krol7HgEKhqkuRNYVmW-BGV3Rr0WMhivGPZcbQjgWajY" alt="" className="header__topLogo" />
                </div>
                  <ul className="header__topColletion">
                  <li className="header__topItem">Help  
                  <ul className="help__options">
                      <h3 > Help</h3>
                      <li className="help__Itemss">Order Status </li>
                      <li className="help__Itemss">Dispatch and Devlivery </li>
                      <li className="help__Itemss"> Retums </li>
                      <li className="help__Itemss">Size charts</li>
                      <li className="help__Itemss">Contact us </li>
                      <li className="help__Itemss">Privacy Policy </li>
                      <li className="help__Itemss">Terms of Sale </li>
                      <li className="help__Itemss">Terms of Use </li>
                      <li className="help__Itemss">Send us feedback</li>                  
                      </ul></li>
                  <li className="header__topItem">Join us </li>
                  <li className="header__topItem">Sign in </li>
              </ul>
            </div>
            <div className="main__header">
                <div className="mainheader__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png" alt="" className="mainheader__logo" />
                <ul className="mainheader__collection">
                    <li className="mainheader__Item">New Releases</li>
                    <li className="">Men</li>
                    <li className="mainheader__Item">Women</li>
                    <li className="mainheader__Item">Kids</li>
                    <li className="mainheader__Item">Sale</li>
                    <li className="mainheader__Item">Collections </li>
                </ul>
                <div className="mainheader__options">
                    <div className="searchbar" onClick={callback}>
                        <FiSearch className="sor"/>
                  <input type="text" placeholder="Search" className="searchbar__input" />
                    </div>
                    <FiHeart className="headermain__icons"/>
                    <NavLink to="/cart"  ><FiShoppingBag className="headermain__icons"  /></NavLink>  
               </div>
         
                <div className="close__searchActive" onClick={removeCakkback}>
                <FiX/>
                </div>
              </div>
            </div>
          {location.pathname.match("/cart") ? "" :   <div className="header__sale">
                 <p>Free Shipping & 60-Day Free Returs 
                 </p>
                 <a href="https://www.google.com">Join Now</a>
            </div>
             }
          
        </div>
    )
}

export default Header

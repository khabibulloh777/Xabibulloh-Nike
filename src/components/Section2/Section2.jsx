import React, { useState } from 'react'
import './Section2.css'
import { HiAdjustments, HiOutlineChevronDown , HiOutlineChevronUp} from 'react-icons/hi'
import {  FiInstagram, FiMapPin  } from 'react-icons/fi'
import {RiFacebookBoxFill, RiYoutubeFill,  RiTwitterFill} from 'react-icons/ri'
import KIRASOVKA_DATA from '../../data/KIRASOVKA_DATA.json'
function Section2() {
  const [DiveNotOpen, setDiveNotOpen] = useState(true)
  const [ActiveWomen, setActiveWomen] = useState(false)
  const [ActiveKids,  setActiveKids] = useState(false)
  const [activeShopby, setActiveShopby] = useState(false)
  const [activeColorSection2, setActiveColorSection2] = useState(false)
  const [activeBrend, setActiveBrend ] = useState(false)
  const [activeSports, setActiveSports] = useState(false) 
  const [activeAthlets, setAthlts ] = useState(false)
  const [activeBestFor, setActiveBestFor] = useState(false)
     return (
        <div className="section2">
             <div className="uzun">
            <h2 className="firstt onew">Back to School (760)</h2>
            <h3 onClick={() => setDiveNotOpen(!DiveNotOpen)}>
              { DiveNotOpen ? "Hide" : "Show"  } Filters <HiAdjustments/></h3>
            <h3>Sort By<HiOutlineChevronDown/> </h3>
            </div>   
               <div className="kattasi">
           
           <div className={DiveNotOpen ? "activeopendive" : "NotactiveOpendive"}>
             <div className="seidbarr">
             <div className="pText">
               <p>Shoes</p>
               <p>Sports Bras</p>
               <p>Tops & T-Shirts</p>
               <p>Hoodies &Pullovers</p>
               <p>Jack & Tights </p>
               <p>Pants & Tights</p>
               <p>Shorts</p>
               <p>Compression & 
                  Baselyar
               </p>
               <p>Tracksuits</p>
               <p>Jumpsuits & Rompers</p>
               <p>Skirts & Dresses</p>
               <p>Socks</p>
               <p>Accessories & Equipment</p>
             </div>
             <div className="linepText"></div>
             <div className="genterSection2" onClick={() => setActiveWomen(!ActiveWomen)}>
                <div className="gentter">Genter <span>{ActiveWomen? <HiOutlineChevronDown/> : <HiOutlineChevronUp/> }</span></div>
             </div>
             <div className="yana">
             <div className={ActiveWomen? "activesdiv" : "notactivesdiv"}>
                  <ul  className="coleectionUl">
                      <li className="collectionLi"><input type="checkbox" /> <span>Men</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Women</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Unisex</span> </li>
                    </ul>        
                    </div>
             </div>
             <div className="ginterSection2line"></div><br />
                <div className="section2Kids" onClick={() => setActiveKids(!ActiveKids)}>
                  <div className="kidsSection2">Kids <span>{ActiveKids? <HiOutlineChevronDown/> :  <HiOutlineChevronUp/> }</span></div>
                </div>
                  <div className="yanae">
                  <div className={ActiveKids? "activeKids" : "NotActiveKids"}>
                  <ul className="ulli">
                  <li className="collectionLi"><input type="checkbox" /> <span>Boys</span> </li>
                  <li className="collectionLi"><input type="checkbox" /> <span>Girls</span> </li>
                  </ul>
                  </div>
                  </div>
                <div className="shopPrinciby"></div> <br />
                <div className="ShopPrinceSection2" onClick={() => setActiveShopby(!activeShopby)}>
                  <div className="ShopbyPrinci">Shop by prince <span>{activeShopby? <HiOutlineChevronDown/> :  <HiOutlineChevronUp/> } </span> </div>
                </div>
                <div className="yanaa">
                <div className={activeShopby? "activeshopby" : "notactiveshopby"}>
                    <ul>
                    <li className="collectionLi"><input type="checkbox" /> <span>$0-$25</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>$25-$50</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>$50-$100</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>$100-$150</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Over $150%</span> </li>
                    </ul>
                  </div>
                  </div> 
                  <div className="linedavay"></div> <br />
                  <div className="ColorSection2" onClick={() => setActiveColorSection2(!activeColorSection2)}>
                    <div className="colorSection2da">Color<span>{activeColorSection2 ? <HiOutlineChevronDown/> : <HiOutlineChevronUp/> } </span></div>
                  </div>
                
                     <div className={activeColorSection2 ? "activeColordive" : "notactivecolor"}>
                   <div className="rows">
                       <div className="kats">
                         <div className="purple"></div>
                         <p>Purple</p>
                         <div className="blue"></div>
                         <p>blue</p>
                         <div className="blackww"></div>
                         <p>Black</p>
                         </div> 
                       <div className="kats">
                         <div className="gren"></div>
                         <p>Gren</p>
                         <div className="red"></div>
                         <p>Red</p>
                         <div className="White"></div>
                         <p>White</p>
                         </div> 
                       <div className="kats">
                         <div className="Brown"></div>
                         <p>Brown</p>
                         <div className="orange"></div>
                         <p>Orange </p>
                         <div className="Yellow"></div>
                         <p>Yellow</p>
                         </div> 
                       <div className="kats">
                         <div className="Green"></div>
                         <p>Green</p>
                         <div className="Pink"></div>
                         <p>Pink</p>
                         <div className="purple"></div>
                         <p>Purple</p>
                         </div> 
                   </div>
                   </div>  

                 <div className="brendline"></div>
              <div className="brendSection2" onClick={() => setActiveBrend(!activeBrend)}>
                   <div className="brendSection">
                     Brand <span>{activeBrend?  <HiOutlineChevronDown/> : <HiOutlineChevronUp/> }</span>
                   </div>
              </div>
              <div className={activeBrend ? "activeBrend" : "NotActiveBrend"}>
                     <ul className="ulcollection">
                        <li className="collectionLi"><input type="checkbox" /> <span>Nike Sportswear</span> </li>
                        <li className="collectionLi"><input type="checkbox" /> <span>Jordan</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Nike Pro</span> </li>
                    </ul>

              </div>
              <div className="sportsline"></div> <br />
                <div className="sports" onClick={() => setActiveSports(!activeSports)}>
                  <div className="sportssection">Sports & Activities <span>{activeSports ?  <HiOutlineChevronDown/> : <HiOutlineChevronUp/> }</span>  </div>
                </div>
                
                <div className={activeSports ? "brendactive" : "notbrenactive"}>
                   <ul className="sport">
                      <li className="collectionLi"><input type="checkbox" /> <span>Lifestyles</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Running</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Training & GYM</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Basketball</span> </li>
                      <span>+More</span>
                   </ul>
                </div>
                <div className="athletsline"></div>  <br />
                <div className="athlets" onClick={() => setAthlts(!activeAthlets)}>
                  <div className="athletssection">Athletes <span>{activeAthlets ?<HiOutlineChevronDown/> : <HiOutlineChevronUp/> } </span></div>
                </div>
                <div className={activeAthlets ? "activeathlets" : "activenotathelets"}>
                  <ul className="athletscom">
                      <li className="collectionLi"><input type="checkbox" /> <span>Kyrie Irving</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Paul George</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Jason Day </span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Brooks </span> </li>
                      <span>+More</span>
                      </ul>
                </div>
               <div className="atshletslineee"></div> <br />
                  <div className="bestfor"onClick={() => setActiveBestFor(!activeBestFor)}>
                    <div className="bestforsection">Best For <span>{activeBestFor ?<HiOutlineChevronDown/> : <HiOutlineChevronUp/>  }</span></div>
                    </div>      
                 <div className={activeBestFor ? "activeFor" : "notActiveFor"}>
                 <ul className="athletscom">
                      <li className="collectionLi"><input type="checkbox" /> <span>Warm Weather </span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Wet Weather</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Conditions</span> </li>
                      <li className="collectionLi"><input type="checkbox" /> <span>Low-Impact Activities</span> </li>
                      <span>+More</span>
                      </ul>
                 </div>
             </div>
             </div>   
             <div className={DiveNotOpen ? "vhdive" : "vhnotopenddive"}>
                 <div className="collecti__wrapper">
                  {
                    KIRASOVKA_DATA.map((kirasovkaitem) => (

                      <div className="kirasovka_item">
                         <img src={kirasovkaitem?.img} alt="" /> 
                         <h3>{kirasovkaitem.name}</h3>                       
                            <p>{kirasovkaitem.namep}</p>
                            <p>{kirasovkaitem.color}</p>
                            <p>{kirasovkaitem.pul}</p>
                      </div>
                    ) )

                  }
                </div> 



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

export default Section2

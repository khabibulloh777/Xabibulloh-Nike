import React, {useState , useEffect , useRef} from 'react';
import "./Products.css";
import {HiAdjustments , HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi"
import {RiTwitterFill, RiFacebookBoxFill , RiYoutubeFill} from 'react-icons/ri'
import {FiInstagram,FiMapPin } from 'react-icons/fi'
function Products() { 
    const [activeShopPrince, setActiveShopPrince] = useState(false)
    const [activeGinter, setActiveGinter] = useState(false)
    const [activeColor, setActiveColor] = useState(false)
    const [activeIcon, setActiveIcon] = useState(false)
    const [activeTexno, setActiveTexno]= useState(false)
    const [ activeShoe, setActiveSheo] = useState(false)
    // const changeBoxActive =(e) => {
    //     const box = document.querySelector('.box')
    //     setActive(!active)
    //     !active ?box.classList.add('activeBox') : box.classList.remove('activeBox')
    // <div className={active ?  "box activeBox" : "box" }></div>
    //         <button onClick={()=> setActive(!active)}>Set active</button>
 
     const exampleDiv = useRef();
     useEffect(() => {  
      exampleDiv.current.style.backgroundColor = "none" 
              
    }, [])    

    return (
      
        <div className="products">
            <div className="uzun">
            <h2 className="firstt">Run Fearless Shoes(5)</h2>
            <h3>Hide Filters <HiAdjustments/> </h3>
            <h3>Sort By<HiOutlineChevronDown/> </h3>
            </div>
               
            <div ref={ exampleDiv } className="katasi">
                <div className="seidbar">
                <div className="one">
                    <h4>Running</h4>
                    <h4>Walking</h4>
                </div>
                <br />
                <div className="line__gender">
                </div>
                <div className="genter" onClick={() =>  setActiveGinter(!activeGinter)}>
                    <h3>Gender <span>{activeGinter ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/>}</span></h3>
                    <div className={activeGinter ? "activeDivee": "notActiveDive"}>
                        <div className="one__genter">
                        <input type="checkbox" />
                        <span>Men </span>
                        </div>
                        <div className="one__genter">
                        <input type="checkbox" />
                        <span>Women  </span>
                        </div>
                         </div>
                        <br />
                        <div className="line__gender2">
                </div>
                <div className="shopPrince" onClick={() =>  setActiveShopPrince(!activeShopPrince)}>
                        <div>
                        <h4>Shop by Prince <span >{activeShopPrince ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/>}</span></h4>
                        <div  className={activeShopPrince ? "activeDive": "notActiveDiv"}>
                        <input type="checkbox" />
                        <span>$100-$150  </span>
                        <div className="shop__input2">
                        <input type="checkbox" />
                        <span>Over $150  </span>
                        </div>
                        </div>
                        </div>
                </div>
                   <div className="line__Color"></div>
                     <div className="color__sed"  onClick={() =>  setActiveColor(!activeColor)}>
                         <h3>Color <span>{activeColor ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/>}</span></h3>
                        <div className={activeColor ? "activeDives": "notActiveDivv"}>
                         <div className="color__purple">
                          <div className="dive">
                          <div className="color_pur"></div>
                          <p>Purple</p>
                          </div>
                          <div className="dive">
                          <div className="color_pur"></div>
                          <p>Black</p>
                          </div>
                          <div className="dive">
                          <div className="color_pur"></div>
                           <p>Blue</p>
                          </div>
                         </div>
                         <div className="color__purple">
                          <div className="dive">
                          <div className="color_pur"></div>
                          <p>White</p>
                          </div>
                          <div className="dive">
                          <div className="color_pur"></div>
                          <p>Brown</p>
                          </div>
                          <div className="dive">
                          <div className="color_pur"></div>
                          <p>Yellow</p>
                          </div>
                         </div>
                         <div className="color__purple">
                          <div className="dive">
                          <div className="color_pur"></div>
                          <p>Grey</p>
                          </div>
                          <div className="dive">
                          <div className="color_pur"></div>
                          <p>Pink</p>
                          </div>
                         </div>
                         </div>
                     </div>
                     <div className="icon__line"></div>
                     <div className="icn" onClick={() =>  setActiveIcon(!activeIcon)}>
                         <h3>Icon <span> {activeGinter ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/>}</span></h3>
                         <div className={activeIcon ? "activeDives": "notActiveDivs"}>
                        <input type="checkbox" />
                        <span>Miller </span>
                        </div>
                     </div>
                     <div className="texno__line"></div>
                     <div className="Texnolgy" onClick={() =>  setActiveTexno(!activeTexno)}>
                         <h3>Technology <span>{activeGinter ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/>}</span></h3>
                    <div className={activeTexno ? "activeDivesz": "notActiveDivsz"}>
                     <div className="one__texnolo">
                        <input type="checkbox" />
                        <span>Nike Flyknit</span>
                        </div>
                        <div className="one__texnolo">
                        <input type="checkbox" />
                        <span>Nike Flywire</span>
                        </div>
                        <div className="one__texnolo">
                        <input type="checkbox" />
                        <span>Nike React </span>
                        </div>
                        <div className="one__texnolo">
                        <input type="checkbox" />
                        <span>Nike Zoom Air </span>
                        </div>
                           <p className="p__more">+More</p>
                     </div>

                     <div className="line__shoe">
                         <div className="shoe"  onClick={() =>  setActiveSheo(!activeShoe)}>
                             <h3>Shoe Height <span>{activeShoe ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/>}</span></h3>
                         <div className={activeShoe ?"activeDivesa": "notActiveDivsa" }>
                        <input type="checkbox" />
                        <span>Low Top</span>
                        </div>
                         </div>
                         <div className="width__line"></div>
                           <div className="width">
                               <h3>Width <span> <HiOutlineChevronUp/></span></h3>
                           <div className="width_input">
                        <input type="checkbox" />
                        <span>Stability</span> 
                            </div>
                           </div>
                         <div className="Feel__line"></div>
                         <div className="feel">
                             <h3>Shoe Feel <span><HiOutlineChevronUp/></span> </h3>
                             <div className="feel__input">
                        <input type="checkbox" />
                        <span>Stability</span>
                        </div>
                         </div>
                         <div className="best__line"></div>
                         <div className="best">
                         <h3>Best For <span><HiOutlineChevronUp/></span></h3>
                         <div className="best_in">
                        <input type="checkbox" />
                        <span>Cold Weather</span>
                        </div>
                     </div>
                         <div className="best__line"></div>
                         <div className="best">
                         <h3>Features<span><HiOutlineChevronUp/></span></h3>
                         <div className="best_in">
                        <input type="checkbox" />
                        <span>Spikeless</span>
                        </div>
                     </div>
                         <div className="best__line"></div>
                         <div className="best">
                         <h3>Benefits<span><HiOutlineChevronUp/></span></h3>
                         <div className="best_in">
                        <input type="checkbox" />
                        <span>Cushioning</span>
                        </div>
                     </div>
                     </div>
                     </div>
                </div>

                     
                </div>
                <div className="yarimi">
                     <div className="bosh">
                         <div className="boshi">
                           <img src="data:image/jpeg;base64,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" alt="" />
                           <h3>Nike Air Max 2021</h3>
                           <p>Women Shoes</p>
                           <p>Color 1</p>
                           <br />
                           <p>160$</p>
                         </div>
                         <div className="boshi">
                             <img src="data:image/jpeg;base64,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" alt="" />
                           <h3>Nike Air Max 2021</h3>
                           <p>Men's Shoes</p>
                           <p>2 Color</p>
                           <br />
                           <p>160$</p>
                         </div>
                         <div className="boshi">
                             <img src="data:image/jpeg;base64,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" alt="" />
                         <h3>Nike Air Max 2021</h3>
                         <p>Big Kid's Shoes</p>
                         <p>3 Color</p>
                         <br />
                         <p></p>
                         </div>
                     </div>
                     <div className="bosh">
                         <div className="boshi">
                           <img src="data:image/jpeg;base64,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" alt="" />
                           <h3>Nike Air Max 2021</h3>
                           <p>Women Shoes</p>
                           <p>Color 1</p>
                           <br />
                           <p>160$</p>
                         </div>
                         <div className="boshi">
                             <img src="data:image/jpeg;base64,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" alt="" />
                           <h3>Nike Air Max 2021</h3>
                           <p>Men's Shoes</p>
                           <p>2 Color</p>
                           <br />
                           <p>160$</p>
                         </div>
                         <div className="boshi">
                             <img src="data:image/jpeg;base64,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" alt="" />
                         <h3>Nike Air Max 2021</h3>
                         <p>Big Kid's Shoes</p>
                         <p>3 Color</p>
                         <br />
                         <p></p>
                         </div>
                     </div>
                     <div className="bosh">
                         <div className="boshi">
                           <img src="data:image/jpeg;base64,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" alt="" />
                           <h3>Nike Air Max 2021</h3>
                           <p>Women Shoes</p>
                           <p>Color 1</p>
                           <br />
                           <p>160$</p>
                         </div>
                         <div className="boshi">
                             <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQERIQEBIVExIXEhYRFhESFhUSExARFxUXFxURExMbKCgsGBolJxMVITEhJS0rLi4uFx81ODMtNyotLisBCgoKDg0OFxAQGi0dHR0tLS0tLS0tKy0tLS0tLS0tNy0tKystKysrLS0tLS0tLSsrLS0tLTUtLSstLTYtNzctLf/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EADkQAAICAAMFBQYGAgAHAAAAAAABAhEDITEEEkFRYQUicYGhBhMUUpGSMkKxwdHwM/EWI0NicoKi/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABsRAQEBAAMBAQAAAAAAAAAAAAABEQIhMRJh/9oADAMBAAIRAxEAPwD7UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVe0NtWFG9ZcI83yA923boYSub6105vkurIey+1YbRvbj/DV9Luv0OYl2Zj7S9/aJNW7WFDW+CcvQ6H2e7FjsmG4p705PenN8XwS6LRHPjy5W+dNWST9bUAHRkBFtGMoRt+S5s0k/aB3SivAl5SerjoAeXlby/Y1+2drxhe6nOuWS+pUbEHkZJpNZpq0+a5noAAAAAAAAAAAAAAB43RE9oXDMCY8clzKksSUuNLp/JFPDbd7zT8mvCiaLGJtOe7FcG74PojUQm4up95LmqnDr1XVGwc1GnKlWfRrTIyk1LgmtVJmLdVRx8X3bUkrVqV2tPA3ODiqcVKLtMoYWCoppU87prL6EixErppc0ONwq8eN1qUHtfDNvpZisZt5J/v6mvoxT7SxZYk1X4NKowjsUXm1w8zYvFXn+hDIzexliNz1doh2jY97XPTTLLoS76irkWNgxYzuqtZlnuDLsxNQUX+V0nzXAtgG0AAAAAAGMpJakfvW9P5GiYxU1zRFbfH++BE9mV2m4+GV+RNE88atM2QS2hr8WS4NZkiiepk0Ry72unXiR+4Wscn00fiid+Bhvf1ZkVHHEd1utZZvKr5ITXOr5Z/pxM3Ncb89CvtGOlStfW3SIJG4vJ59Kv0EopcH4UkvIpPbKtXVdCpj7ctFvPrkiLi9jYu6sslytL9Cnibb1rwtt+N0UpbQn+XpnnbMsK2+XDSvp0C4t4M996tri7WXlp/UXoNRVLTnxK8JPJa+Bk4S5OuvAFTSXFacjy3+VW+v4V4v9jzAg/Bc3lfhyROpRWWXggjV7R2fiye9Kab5aUednKeDipvOL7rrRJ8S7Pb1VqE9Wq3aerRVxpymmq93dq3+LxsThJdNdKCj2TNe7WHxglHxS0ZeOrIAAAAA0OydoPFUpJ21iYmG4/K4TlHd9Cytp4PTkvVGr7Y7Pez4r2nDVwk7nHgpvV1118WybZNvhiJJSzavdb0/wDVmKrYraL0+vD6GUMbln6IqRTbST+kY/3/AER40MS8p51l3Vn0bINpv80jF4vT+PoaiODivNzX/wBNkXZ8MVuUJYk7jLdcqrf7qe94ZteTA3jfj4ZfuRyvk/NmuXvdZT3UnLJRveXCm34cyf4iSjvcNfwZ14XqBJiKs8l4KyptE7jk3KvTwJMfHflVuTql0V+foRzxqz16KKp+Yxda3EneXHStM/5C2eb4V49xeuvke7XtDe62oyp3F5LclmsmtHm0UcaTmnFuVaZNr6P+CKuw2dLOcrVflz9aXUmhtMY1kr470t70SNQk1Gu7GVUoyldvpxZNs+E5OmqVcNfUDYT2y1cnpnHdqNOmrXLVoygoTe9Jd5JpN6pOrXoiPB2ZJWk20lniPdWubtaF/DhBUks/FvTm3qVlBsmBuwinG2rS7zapWlr0S4GMdpjLfhGUZOLpqKpq80qXSi25veWS3a5Zt8M+B5OcYJtt1+K5O1bu0uNFFGO1tYignb3d5xetXSn00aLEtoTu3llm+d+lUSPCi0m7V0rjrrpfBZZ2Z40aWVaeviQR7JtW5jQu85biXSVJ+OdanSHH4ODH3+DFJ7zxYvwUFenBZM7A3EAAUACLHxJRVxjvPkmkBJKKaaatPJp5po0e3dgLPEwXJSWahlTXGKevgaztb2g2+DawtibXzPveiOa2v2m7Vf8A05w/8cJ/qSwdTibQpKt+WE1XddqTq8vEtbLtalld9OnGz5jtnam34n+SWM/GLVeGR52X2vtGzz3msSSqmpb3o+BMqvrSxf8AZg8dXrZw0fbG01LDxFlyTIth9q05f82EsPlJXJOtFJf7J2O9WKqz9cv7oRPHt7slSrN8Hyp6o5xe0ODu/wCaOSytu/UpYXtXhSdOUoK9ZXUl+wHYTxY3SrPXy5oqbRtsYy3ZdNbrN0q62znMf2jwYRbjiKb+WCbb8yhhe10bblDEi/8AtqSkvqqYHR7fjYe7uOWVO882s03vJrdeWvRkOBL3m9SrdlutvS8tH5o5Ptb2jeLDcw4yguMnSlXJVoVNi7dx8KO4pby1763n5viMq7Ha7TeG0nlemeTZJgNSlp3oqrrN3nuqXkfPu0+0sXaa968kslG4118S32T29iYEd1r3mnek+9S0T5+I+aa+gbZiuCj3rTlu5cHTef0Mtl2qUrSXerK+ZwvaXtLPFSUE4O7cnUqyru5Ffsbt3EwnJ414jf5opRaXBUTKdPpeFjOMVLEpSpuShnFydaXrp0MZ7QpJp04vLdlVbvFUcVL2mgoOEITd292Wlt283eVtmjx/aHaU1X+PLu4acXFLw1X9oZUfUpY8Y1uut1bqUaSjFaRS4aL6FbG7RvRcdLWl1f6vyOA/4jk1V4uq0hw422jyXauLNJVN0/wxW7Hd4Kki5R9G9lcL32PPadYQj7qD+acs5y8kkvM604b2b9qMTdhgrYpxilScE68XfE7XAxN5XuuPRmoVIACoAAAAAB5urkj0AY+7XJfRGLwY/LH6IkAEXw8Pkj9qHw0Pkj9qJQBF8ND5I/ajz4WHyR+1EwAh+Fh8kftQ+Fh8kftRMAIfhYfJH7Ue/DQ+SP2olAEXw0Pkj9qHw0Pkj9qJQBF8PD5I/aj34eHyR+1EgAj9xD5I/ajJYaWiX0RkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z" alt="" />
                           <h3>Nike Air Max 2021</h3>
                           <p>Men's Shoes</p>
                           <p>2 Color</p>
                           <br />
                           <p>160$</p>
                         </div>
                         <div className="boshi">
                             <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREA8QEBIQFRATFRUSEBEREhMSFRIQFRIYFhUVGBYYHTQgGBolGxMVITIhJSorLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDzcZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAPsAyQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgMBBAUGB//EAD0QAAIBAgMEBgcFBwUAAAAAAAABAgMRBCFREjFBcQUiQmGBkQYTMlKhscFicpLR8BQVIzOy0uEkVIKT8f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEZySV2BIh61XsamIxF7bMo5+Ltqimd7WlufszWWejXB/MDqA5XR2N6/qpPN32eaV7eSOqAAAAAhVqqKu2BMFOExMasI1IO8JZxa4q9voXAAAAAAAAAAAAAAAAw2BkFVWtZXSvyNV15STaTja6SnlfvfcBsYnFRgrykktWaeKqTcktlSg/avZJLx37viQhi21stRlVvnGDuo55Xk1llr4XI1aV03Nyk/di3GN+Cyzfj5IDVqVIRls04RlVW5Ky2b8W+yn8e8voUONR7bfDNRj92P1eZKpSjCN4xikt6Stlx/PwCmQYpUYxrwqSbyuovg201Z99m+Z2jj7SaalmnvRmhOpT9n+JT07cf7l8eZR1waa6Sp8ZbL0l1X5MjLpWn2W5vSCcn8AN2TtmeQ9I8Y6zdGD6q/mNae6b+NxdSpJQk/Uwe5uzlLuWdovn5GniKUacNmO7zbfFt8WBv+htVuhKDSShNxjbLqtJ/O53jzHofW69an3RknrZtP8AqXmenAAAAAAAAAAw5Jb2iLqICYKfX6LLXQ1Z1Kjd4uEou6s7xs1l7S+VtcwLXjLtqLjlJxe0821vSRTXxFv5kqag9XZt6JcSlUHOSlKUbWydOKT0a2nd+KaLaNCMG9lZtZyd3J85PNgUxxLz2I1Zp22U4qEY+MrXXK+4l+zbWdXrP3ewu5R4838DYkyvaICSS2YpKK4JWXkjE5FSrracXk96713EpMBKZz5VNiWzZ7L9lpN+D05m1JIraRRD1hJVpLcQnWUV+SuVOs3uT8cgNr9rnqiqrjZWzk7eSKHCT3u3ILDLm9XmBRVxO0mlFyvk77vNmjLCyWals/ZV2vG52PVldSAFfo1UtiFq4yi/6vLqnsDxfRStjKMl9qL5ODPaAAAAAAFOLr7EJS03LV8DQhi9rNtp6b0U9N4u01T2bxSUnnZ7WdrcNxrQrw+2v+O18YgdSM3qviHJ5ZI0oYiPvpfeTj8y+FVPdKD5SQFrk8m4rLdnuyt9TLqS0+KIq/6aM56MgbUtF5mUYz0fkRd9H5AZbK5/Ey09H5EXB6fQCqrCM1aS5dz7jWVJXkozl1XZq7dnZO3k0bUoWebil3si5R96/wB1NlFHq37z8zPqyzbXBS8rfMjd2yi/Fr6AQjTed0ln1bO91ZZvLJ3vkZguBl7Wi/E/yIxi1fJX4XnJ/TICZhsOcvseVyO3LWHd1P8AIBsoqMudWesfwf5Kp1J++/BJAUdGx/1ND7z/AKWexPHYTa9fRvKT68d+zryPYgAAAAAHmumYyVeTa6rSa5WS+aKISXLmekxUU1aVOUtLWuuTujjYmnb2cNiny9V/cBUk+8lY5uIxdaF7YLGNdyh9Gac/SKpG+3geklvzVBSXdufMDuqnH3Y+SJqPPwk19TzsvTCjH26WOjv9rB13y9mLLYemOEfbqR3+3h8RDcr9qAHfSeXWn+KX5mc/el+JnDj6W4L/AHNNZ2621Hs34ozH0swTtbF4fs76kV7XMDt275fil+Y9WuN3ffdt/M48fSbCPdiqH/bDWxN9PYfO1ej2t1SPZ3gdZRiuC7skHJHK/e9HhWhvtlJaXMx6TpZfxI8OOvgB09sxtnO/eVP318dbaGJdJU1frrta9nwA6O0Yv+ro566Sp3tt8bcfdvp4BdJU3bre7r2ny/XcB0G+XmRZovpSl78dzfHhK2gfSdLPrp22t137PJf+94Rt35frgVza1RRLH089737oTe5X4LvITxceEKz+7h68vlEK2MGr1qVnfrLsy11PWnnOgIucvWSp1opeyqlOULvWzSyPRgAAAAAAAAAAAuLgAYsNlaLyMgDFjIAC4uAAuLgALi4AC4uAAuLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z" alt="" />
                         <h3>Nike Air Max 2021</h3>
                         <p>Big Kid's Shoes</p>
                         <p>3 Color</p>
                         <br />
                         <p></p>
                         </div>
                     </div>
                     <div className="boshi">
                             <img src="data:image/jpeg;base64,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" alt="" />
                         <h3>Nike Air Max 2021</h3>
                         <p>Big Kid's Shoes</p>
                         <p>3 Color</p>
                         <br />
                         <p></p>
                         </div>
                         <div className="lineNikeKirasovka"></div>
                         <div className="footer__tepa">
                             <h2>Related Categories</h2>
                             <div className="birinchiBtnlar">
                               <button className="btn__footer">New Shoes</button>
                               <button className="btn__footer">Lifestyle Shoes</button>
                               <button className="btn__footer">Best Shoes</button>
                               <button className="btn__footer">Black Shoes</button>
                               <button className="btn__footer">Huarache Shoes</button>
                               <button className="btn__footer">Jordan 1 Shoes</button>
                               <button className="btn__footer">Customize Shoes</button>
                               <button className="btn__footer">New hoodies & Pulovers</button>
                               <button className="btn__footer">Joggers & Sweatpants</button>
                               <button className="btn__footer">Off-White Collection</button>
                             

                             </div>
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

export default Products
import React, { useEffect ,useState} from 'react'
import './Home.css';
import MainContent from '../../components/Maincontent/MainContent';
import SchoolSale from '../../components/Schoolsale/SchoolSale';
import Trendinng from '../../components/Trending Now/Trendinng';
import Foundion from '../../components/Foundion/Foundion';
import UsaTeam from '../../components/Usa-team/UsaTeam';
import Benfits from '../../components/Benfits/Benfits';
import Footertop from '../../components/footer-top/Footertop';
import Footer from '../../components/Footer/Footer';
import {FiX} from "react-icons/fi"
import Banner from '../../components/Banner/Banner'
function Home() {
        const [show, setShow] = useState(true)
         const shoPopup = (e) => {
             localStorage.setItem("asdfafaf", "dsffasfasfaf")
             setShow(false)
         }
         useEffect(() => {
             if(localStorage.getItem("asdfafaf")=== "dsffasfasfaf")
             setShow(false)
         },[show])
    return (
        <div className="home">
        {  show ?     <div className="popup">
           <FiX onClick={shoPopup} />
        </div> : "" }
              <div className="main__container">
             <Banner  />
              <MainContent/>
              <SchoolSale/>
              <Trendinng/>
              <Foundion/>
              <UsaTeam/>
              <Benfits/>
              <Footertop/>
              <Footer/>
    
            </div>
         
        </div>
    )
}

export default Home     
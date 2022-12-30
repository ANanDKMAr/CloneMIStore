import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from "./component/Navbar.js";
import NavOptios from "./component/NavOptios.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from './component/slider';
import data from "./data/data.json"
import Offers from "./component/Offer.js"
import Heading from "./component/Heading.js"
import StarProduct from "./component/StarProduct.js"
import HotMenu from "./component/HotMenu.js"
import HotAccessories from "./component/HotAccessories.js"
import ProductReviews from "./component/ProductReviews.js"
import Videos from "./component/Videos.js"
import Banner from "./component/Banner.js"
import Footer from "./component/Footer.js"

function App(){
    return (
        <Router>
            <PreNavbar/>
            <Navbar/>
            <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
            <Slider start={data.banner.start}/>
            <Offers offer={data.offer} />
            <Heading text="STAR PRODUCT"/>
            <StarProduct starProduct={data.starProduct}/>
            <Heading text="HOT ACCESSORIES"/>   
            <HotMenu/>
            
            <Routes>
                <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}></Route>
            
                
                <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDeviceCover}/>}>
                </Route>
            

                <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}>
                
                </Route>
            

                <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}>
                
                </Route>
            
                <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}>                
                </Route>
            </Routes>
        <Heading text="PRODUCT REVIEWS"/>
        <ProductReviews productReviews={data.productReviews}/>
        <Heading text="VIDEOS"/>
        <Videos videos = {data.videos}/>
        <Heading text="IN THE PRESS"/>
        <Banner banner={data.banner}/>
        <Footer footer={data.footer}/>


        </Router>

    );
}
export default App;
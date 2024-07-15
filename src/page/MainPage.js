import React, { useEffect, useState } from 'react';
import Header from "../component/Header";
import HaloSection from "../component/HaloSection";
import bestSellers from "../asset/Bestseller.png";
import applicance from "../asset/Appliances.png";
import cookware from "../asset/Cookware.png";
import newArrival from "../asset/NewArrival.png";
import classes from './MainPage.module.css';
import SlideShow from "../component/SlideShow";
import Product from "../component/Product";
import Jumbotron from "../component/Jumbotron";
import Cart from "../component/Cart";
import CategoryComponent from "../component/CategoryComponent";
import Review from "../component/Review";
import OutletBanner from "../component/OutletBanner";
import Footer from "../component/Footer";
import LoadingOverlay from 'react-loading-overlay';
import PacmanLoader from 'react-spinners/PacmanLoader'


const MainPage = () => {
    
    const [isActive, setIsActive] = useState(false);
    // useEffect(()=>{
    //     setIsActive(false);
    // },[])
    return(
        <div>
            <LoadingOverlay
                active={isActive}
                spinner={<PacmanLoader />}
                style = {{paddingTop:'20px'}}
                // text='Loading your content...'
                >
            {/*<Header/>*/}
            {/*<img alt="hare" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>*/}
            <div className={classes.haloContainer}>
                <div className={classes.haloSection}>
                    <HaloSection link={"/collections/best-selling-product"} image={bestSellers} title={"BEST SELLERS"}/>
                    <HaloSection link={"/collections/cookware"} image={cookware} title={"COOKWARE"}/>
                    <HaloSection link={"/collections/appliances"} image={applicance} title={"APPLIANCES"}/>
                    {/* <HaloSection link={"/collections/spares-accessories"} image={"//www.wonderchef.com/cdn/shop/files/Spare-Parts_160x.png?v=1702034021"} title={"SPARE PARTS"}/> */}
                    <HaloSection link={"/collections/new-arrivals"} image={newArrival} title={"NEW ARRIVALS"}/>
                    {/* <HaloSection link={"/collections/offers"} image={"//www.wonderchef.com/cdn/shop/files/Deals_74fb3874-a0c5-4ab7-aac2-a34ee0f6686a_160x.png?v=1715148593"} title={"OFFERS"}/> */}
                </div>
            </div>

            <div className={classes.slideShowContainer}>
                <SlideShow />
            </div>

            {/* <div className={classes.productCarouselConatiner}> */}
            <div className={`${classes.productCarouselConatiner} ${classes.container}`}>

                <Product title={"NEW ARRIVALS"}/>
            </div>

            {/* <div>
                <Jumbotron />
            </div> */}

            <div>
                <CategoryComponent />
            </div>

            {/* <div className={classes.productCarouselConatiner}>
                <Product title={"SUMMERTIME SELECTION"}/>
            </div> */}

            <div className={classes.container}>
                <Review title={"HAPPY CUSTOMERS"}/>
            </div>

            <div className={classes.productCarouselConatiner}>
                <Product title={"OUR BEST SELLERS"}/>
            </div>

            <div>
                <OutletBanner title={"AVAILABLE AT OVER 10,000 OUTLETS INCLUDING ALL DEPARTMENT STORES"}/>
            </div>
            </LoadingOverlay>
        </div>
    )
}

export default MainPage;
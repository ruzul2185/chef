import React from 'react';
import Header from "../component/Header";
import HaloSection from "../component/HaloSection";

import classes from './MainPage.module.css';
import SlideShow from "../component/SlideShow";
import Product from "../component/Product";
import Jumbotron from "../component/Jumbotron";
import Cart from "../component/Cart";
import CategoryComponent from "../component/CategoryComponent";

const MainPage = () => {
    return(
        <div>
            <Header/>
            {/*<img alt="hare" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>*/}
            <div className={classes.haloContainer}>
                <div className={classes.haloSection}>
                    <HaloSection link={"/collections/chefs-picks"} image={"//www.wonderchef.com/cdn/shop/files/Chefs_Choice_160x.png?v=1702034021"} title={"CHEF'S PICKS"}/>
                    <HaloSection link={"/collections/gifting-landing-page"} image={"//www.wonderchef.com/cdn/shop/files/gifting_ccc73fb8-6065-4550-91a4-c9a5c4af6a6b_160x.png?v=1702034021"} title={"GIFTS"}/>
                    <HaloSection link={"/collections/best-selling-product"} image={"//www.wonderchef.com/cdn/shop/files/Best_sellers_160x.png?v=1702034021"} title={"BEST SELLERS"}/>
                    <HaloSection link={"/collections/cookware"} image={"//www.wonderchef.com/cdn/shop/files/Cookware_620ff721-0456-457c-a383-06ac9e2cde55_160x.png?v=1702034021"} title={"COOKWARE"}/>
                    <HaloSection link={"/collections/appliances"} image={"//www.wonderchef.com/cdn/shop/files/appliances_c11add14-7517-47ca-a9df-d299e8885cd3_160x.png?v=1702034021"} title={"APPLIANCES"}/>
                    <HaloSection link={"/collections/spares-accessories"} image={"//www.wonderchef.com/cdn/shop/files/Spare-Parts_160x.png?v=1702034021"} title={"SPARE PARTS"}/>
                    <HaloSection link={"/collections/new-arrivals"} image={"//www.wonderchef.com/cdn/shop/files/new_arrival_160x.png?v=1702034022"} title={"NEW ARRIVALS"}/>
                    <HaloSection link={"/collections/offers"} image={"//www.wonderchef.com/cdn/shop/files/Deals_74fb3874-a0c5-4ab7-aac2-a34ee0f6686a_160x.png?v=1715148593"} title={"OFFERS"}/>
                </div>
            </div>

            <div className={classes.slideShowContainer}>
                <SlideShow />
            </div>

            <div className={classes.productCarouselConatiner}>
                <Product />
            </div>

            <div>
                <Jumbotron />
            </div>

            <div>
                <CategoryComponent />
            </div>
        </div>
    )
}

export default MainPage;
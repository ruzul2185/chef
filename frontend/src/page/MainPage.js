import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import PacmanLoader from 'react-spinners/PacmanLoader';
import { getLatestProducts } from '../stores/actions/auth'; // Assuming this action fetches the products

const MainPage = () => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    // Fetch the latest products to populate categoryList
    useEffect(() => {
        dispatch(getLatestProducts());
    }, [dispatch]);

    // Access the categoryList from Redux state
    const categoryList = useSelector(state => state.auth.LatestProducts);

    return (
        <div>
            <LoadingOverlay
                active={isActive}
                spinner={<PacmanLoader />}
                style={{ paddingTop: '20px' }}
            >
                {/* Rest of your components */}
                <div className={classes.haloContainer}>
                    <div className={classes.haloSection}>
                        <HaloSection 
                            link="/collections/best-selling-product" 
                            image={bestSellers} 
                            title="BEST SELLERS" 
                            categoryList={categoryList}
                            noDataMessage="No data found. Please add some data in BEST SELLERS."
                        />
                        <HaloSection 
                            link="/category/cookware" 
                            image={cookware} 
                            title="COOKWARE" 
                            categoryList={categoryList}
                            noDataMessage="No data found. Please add some data in COOKWARE."
                        />
                        <HaloSection 
                            link="/category/Kitchen Appliances" 
                            image={applicance} 
                            title="APPLIANCES" 
                            categoryList={categoryList}
                            noDataMessage="No data found. Please add some data in APPLIANCES."
                        />
                        <HaloSection 
                            link="/all-products" 
                            image={newArrival} 
                            title="NEW ARRIVALS" 
                            categoryList={categoryList}
                            noDataMessage="No data found. Please add some data in NEW ARRIVALS."
                        />
                    </div>
                </div>

                <div className={classes.slideShowContainer}>
                    <SlideShow />
                </div>

                <div className={`${classes.productCarouselConatiner} ${classes.container}`}>
                    <Product title="NEW ARRIVALS" />
                </div>

                <div>
                    <CategoryComponent />
                </div>

                <div className={classes.container}>
                    <Review title="HAPPY CUSTOMERS" />
                </div>

                <div className={classes.productCarouselConatiner}>
                    <Product title="OUR BEST SELLERS" />
                </div>

                <div>
                    <OutletBanner title="AVAILABLE AT OVER 10,000 OUTLETS INCLUDING ALL DEPARTMENT STORES" />
                </div>
            </LoadingOverlay>
        </div>
    );
};

export default MainPage;

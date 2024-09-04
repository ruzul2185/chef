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
                        link="/mix-data" 
                        image={bestSellers} 
                        title="BEST SELLERS" 
                        categoryList={categoryList}
                        noDataMessage="Oops! No Product found in BEST SELLERS. Please wait... or Please contact us or visit our store."
                    />
                        <HaloSection 
                            link="/category/cookware" 
                            image={cookware} 
                            title="COOKWARE" 
                            categoryList={categoryList}
                            noDataMessage="Oops! No Product found in COOKWARE. Please wait... or Please contact us or visit our store."
                        />
                        <HaloSection 
                            link="/category/Kitchen Appliance" 
                            image={applicance} 
                            title="APPLIANCES" 
                            categoryList={categoryList}
                            noDataMessage="Oops! No Product found in APPLIANCES. Please wait... or Please contact us or visit our store."
                        />
                        <HaloSection 
                            link="/all-products" 
                            image={newArrival} 
                            title="NEW ARRIVALS" 
                            categoryList={categoryList}
                            noDataMessage="Oops! No Product found in NEW ARRIVALS. Please wait... or Please contact us or visit our store."
                        />
                    </div>
                </div>

                <div className={classes.slideShowContainer}>
                    <SlideShow />
                </div>

                <div className={`${classes.productCarouselConatiner} ${classes.container}`}>
                    {/* <Product title="NEW ARRIVALS" /> */}
                    <Product 
                        title="NEW ARRIVALS" 
                        buttonStyles={{ 
                            prevButton: { backgroundColor: '#E4E0E0' },
                            prevButtonLeft: { backgroundColor: '#E4E0E0' },
                            nextButton: { backgroundColor: '#E4E0E0' },
                            nextButtonRight: { backgroundColor: '#E4E0E0' }
                        }} 
                    />

                </div>

                <div>
                    <CategoryComponent />
                </div>

                <div className={classes.container}>
                    <Review title="HAPPY CUSTOMERS" />
                </div>

                <div className={classes.productCarouselConatiner}>
                <Product 
                    title="OUR BEST SELLERS" 
                    buttonStyles={{ 
                        prevButton: { backgroundColor: '#ffffff' },
                        prevButtonLeft: { backgroundColor: '#ffffff' },
                        nextButton: { backgroundColor: '#ffffff' },
                        nextButtonRight: { backgroundColor: '#ffffff' }
                    }}
                />
                </div>

                <div>
                    <OutletBanner title="AVAILABLE AT TWO STORES AS SATHE METALWARES AND SATHE EXCLUSIVE" />
                </div>
            </LoadingOverlay>
        </div>
    );
};

export default MainPage;

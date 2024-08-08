import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestProducts } from '../stores/actions/auth'; // Assuming you have this action to fetch products
import classes from "../page/SearchResult.module.css";

const AllProductsPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const categoryList = useSelector(state => state.auth.LatestProducts); // Fetching from Redux state
    
    // If the data isn't passed via location.state, fetch it
    useEffect(() => {
        if (!location.state || !location.state.categoryList) {
            dispatch(getLatestProducts());
        }
    }, [dispatch, location.state]);

    return (
        <div>
            <header>
                {/* Your header content here */}
            </header>

            <main>
                <div className="product-container">
                    {categoryList && categoryList.length > 0 ? (
                        categoryList.map((item) => (
                            <div key={item.id} className="card responsive">
                                <div className={classes.imageContainer}>
                                    <img src={item.url !== null ? item.url : 'default-image-url.png'} className={classes.cardImgTop} alt={item.name} style={{objectFit:'contain', height:'400px'}}/>
                                    <div className={classes.overlay}>
                                        <button className={classes.overlayButton}>Click to View</button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-text">
                                        <h5 className="card-title">{item.name}</h5>
                                        <h5 className="card-subtitle">MRP: {item.original_price}</h5>
                                        <h5 className="card-offer">OFFER PRICE: {item.offer_price}</h5>
                                        <h5 className="card-discount">You save 10%($700)</h5>
                                    </div>
                                    <a href="#" className="btn btn-primary cart-button">ADD TO CART</a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </main>

            <footer>
                {/* Your footer content here */}
            </footer>
        </div>
    );
};

export default AllProductsPage;

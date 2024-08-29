import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMixData } from '../stores/actions/auth';
import classes from "../page/SearchResult.module.css";

const MixData = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const latestProducts = useSelector(state => state.auth.mixData);
    console.log("Latest Products from Redux:", latestProducts); // Debugging log

    const categoryList = location.state?.categoryList || latestProducts;
    console.log("Category List:", categoryList); // Debugging log

    useEffect(() => {
        if (!location.state || !location.state.categoryList) {
            console.log("Fetching mix data via dispatch..."); // Debugging log
            dispatch(getMixData());
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
                                <div className={classes.imageContainer} onClick={() => {
                                    navigate(`/products/${item.id}`); // Navigate to the product details page
                                }}>
                                    <img src={item.url !== null ? item.url : 'default-image-url.png'} className={classes.cardImgTop} alt={item.name} style={{objectFit:'contain', height:'400px'}}/>
                                    <div className={classes.overlay}>
                                        <button className={classes.overlayButton} onClick={() => {
                                            navigate(`/products/${item.id}`); // Navigate to the product details page
                                        }}>Click to View</button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-text">
                                        <h5 className="card-title" onClick={() => {
                                            navigate(`/products/${item.id}`); // Navigate to the product details page
                                        }}>{item.name}</h5>
                                        <h5 className="card-subtitle">MRP: {item.original_price}</h5>
                                        <h5 className="card-offer">OFFER PRICE: {item.offer_price}</h5>
                                        <h5 className="card-discount">10%($700){item.discount}</h5>
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

export default MixData;

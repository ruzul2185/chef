import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import classes from "./SearchResult.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../stores/actions/auth';
import { useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

const SearchResult = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.auth.productList);
    const params = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get("q");
    
    const navigate = useNavigate();

    useEffect(() => {
        async function getData(){
            await dispatch(getProductList(params.task, paramValue)) 
        }
        getData();
    }, [dispatch, params.task, paramValue]);

    return (
        <React.Fragment>
            <HelmetProvider>
        <title>Sathe Metals - Kitchen Appliances on Nagpur</title>
        <meta name="description" content="Kitchen Appliances on Sathe Metals or Sathe Metalwares" />
        <link rel = "canonical" href="/collection/:task"/>
            <div className={classes.outerContainer}>
                {data.length === 0 ? (
                    <p className={classes.noDataMessage}>
                        No data found. Please wait or... add some data in <strong className={classes.uppercase}>{params.task}</strong>.
                    </p>
                ) : (
                    <div className={classes.gridContainer}>
                        {data.map((item) => (
                            <div className={`${classes.layout} card`} key={item.id} >
                                <div className={classes.imageContainer} onClick={() => {
                                    navigate(`./products/${item.id}`);
                                }}>
                                    <img
                                        src={item.images[0] && item.images[0].url !== null ? item.images[0].url : ""}
                                        className={classes.cardImgTop}
                                        alt={item.name} 
                                        style={{ objectFit: 'contain', height: '300px' }}
                                    />
                                    <div className={classes.overlay}>
                                        <button className={classes.overlayButton}>Click to View</button>
                                    </div>
                                </div>
                                <div className={classes.cardBody}>
                                    <div className="card-body-text">
                                        <h5 className={classes.cardTitle} style={{ cursor: 'pointer' }} onClick={() => {
                                            navigate(`./products/${item.id}`);
                                        }}>{item.name}</h5>
                                        {/* <h5 className={classes.subtitle}>MRP: {item.original_price}</h5>
                                        <h5 className={classes.cardPrice}>OFFER PRICE: {item.offer_price}</h5>
                                        <h5 className={classes.cardDiscount}>You save Rs.{item.discount && item.discount !== '' && item.discount !==null ? item.discount : (item.original_price - item.offer_price)}/-</h5> */}
                                    </div>
                                    <div onClick={() => {
                                            navigate(`./products/${item.id}`);
                                        }} className="btn btn-primary cart-button" style={{ width: "100%", borderRadius: "0" }}>
                                        <p className={classes.button}>
                                            ADD TO CART
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            </HelmetProvider>
        </React.Fragment>
    );
};

export default SearchResult;

import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import classes from "../page/SearchResult.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../stores/actions/auth';

const CategoryPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.auth.allProduct);
    const { categoryName } = useParams();  // Get the category from the URL
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            await dispatch(getAllProduct(categoryName, ""));  // Fetch products based on category
        }
        getData();
    }, [dispatch, categoryName]);

    return (
        <div className={classes.outerContainer}>
            <div className={classes.gridContainer}>
                {data.length > 0 && data.map((item) => (
                    <div className={`${classes.layout} card`} key={item.id}>
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
                                <h5 className={classes.subtitle}>MRP: {item.original_price}</h5>
                                <h5 className={classes.cardPrice}>OFFER PRICE: {item.offer_price}</h5>
                                <h5 className={classes.cardDiscount}>You save {item.discount}</h5>
                            </div>
                            <a href="#" className="btn btn-primary cart-button" style={{ width: "100%", borderRadius: "0" }}>
                                <p className={classes.button}>
                                    ADD TO CART
                                </p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;

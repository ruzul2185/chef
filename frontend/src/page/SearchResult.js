import React from 'react';
import {redirect, useNavigate, useNavigation, useParams} from "react-router-dom";
import classes from "./SearchResult.module.css";

const SearchResult = () => {

    const list = [
        {
            id: 1,
            title: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            mrp: "$9000",
            offerPrice: "$7000",
            discount: "$2000",
        },
        {
            id: 2,
            title: "Product 2",
            image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            mrp: "$9000",
            offerPrice: "$7000",
            discount: "$2000",
        },
        {
            id: 3,
            title: "Product 3",
            image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            mrp: "$9000",
            offerPrice: "$7000",
            discount: "$2000",
        },
        {
            id: 4,
            title: "Product 4",
            image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            mrp: "$9000",
            offerPrice: "$7000",
            discount: "$2000",
        },
        {
            id: 5,
            title: "Product 5",
            image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            mrp: "$9000",
            offerPrice: "$7000",
            discount: "$2000",
        },
        {
            id: 6,
            title: "Product 2",
            image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            mrp: "$9000",
            offerPrice: "$7000",
            discount: "$2000",
        },
        {
            id: 7,
            title: "Product 3",
            image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            mrp: "$9000",
            offerPrice: "$7000",
            discount: "$2000",
        },
        {
            id: 8,
            title: "Product 4",
            image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            mrp: "$9000",
            offerPrice: "$7000",
            discount: "$2000",
        },
        {
            id: 9,
            title: "Product 5",
            image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
            mrp: "$9000",
            offerPrice: "$7000",
            discount: "$2000",
        }
    ];

    const params = useParams();
    const navigate = useNavigate();
    return(
        <React.Fragment>
            <div className={classes.outerContainer}>
                <div className={`${classes.gridContainer}`}>
                    {list.map((item) => (
                        <div className={`${classes.layout} card`} key={item.id} >
                            <div className={classes.imageContainer} onClick={()=>{
                                navigate(`./products/${item.id}`);
                            }}>
                                <img src={item.image} className={classes.cardImgTop} alt={item.title} />
                                <div className={classes.overlay}>
                                    <button className={classes.overlayButton}>Click to View</button>
                                </div>
                            </div>
                            <div className={classes.cardBody}>
                                <div className="card-body-text">
                                    <h5 className={classes.cardTitle}>{item.title}</h5>
                                    <h5 className={classes.subtitle}>MRP: {item.mrp}</h5>
                                    <h5 className={classes.cardPrice}>OFFER PRICE: {item.mrp}</h5>
                                    <h5 className={classes.cardDiscount}>You save 10%($700)</h5>
                                </div>
                                <a href="#" className="btn btn-primary cart-button" style={{width:"100%", borderRadius:"0"}}>
                                    <p className={classes.button}>
                                        ADD TO CART
                                    </p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default SearchResult;
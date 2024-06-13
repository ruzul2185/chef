import React, { useState } from 'react';
import classes from './ProductPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


const ProductPage = () => {
    const [showMore, setShowMore] = useState(false); // Initial state set to false

    const product = {
        id: 1,
        title: "Royal Velvet Non-stick Cookware Set, 5Pc (Fry Pan with Lid, Wok, Dosa Tawa, Mini Fry Pan) Induction bottom, Soft-touch handles, Virgin Grade Aluminium, PFOA/Heavy Metals Free, 3 mm, 2 Years Warranty, Red",
        image: "//www.wonderchef.com/cdn/shop/files/Whiteimage_300x300.jpg?v=1714650388",
        carousel: [
            "https://www.wonderchef.com/cdn/shop/files/3rdimageRoyalVelvetSetRed_92a0a8bd-189a-4029-9459-2aa4f3ec152f_1024x1024@2x.jpg?v=1718098696",
            'https://www.wonderchef.com/cdn/shop/files/4thimageRoyalVelvetSetRed_60c8e540-3833-44cc-a4b0-2165d1b6ab73_1024x1024@2x.jpg?v=1718098696',
            'https://www.wonderchef.com/cdn/shop/files/5thimageRoyalVelvetSetRed_edc04353-3e2f-4efc-869c-aa4222d8583a_1024x1024@2x.jpg?v=1718098696',
            'https://www.wonderchef.com/cdn/shop/files/6thimageRoyalVelvetSetRed_b48e943e-c3be-4371-83b3-e5c789dbf032_1024x1024@2x.jpg?v=1718098696',
            'https://www.wonderchef.com/cdn/shop/files/8thimageRoyalVelvetSetRed_014bf808-d827-4cad-943b-b683f8aac613_1024x1024@2x.jpg?v=1718098696',
            'https://www.wonderchef.com/cdn/shop/files/1stimageRoyalVelvetSetRed_1024x1024@2x.jpg?v=1704446654'
        ],
        mrp: "$9000",
        offerPrice: "$7000",
        discount: "$2000",
        about: "Enhance your cooking and dining experience with the most popular Wonderchef Royal Velvet cookware range. The marble finish gives the aluminium cookware a stylish and modern look. Wonderchef Royal Velvet Set includes large-sized 24 cm Wok, Fry Pan & 24 cm Dosa Tawa with a common lid, 14 cm Mini Fry Pan, thus providing a complete cooking solution for healthy and low-fat home-cooked meals. Finest non-stick coating for healthy, low fat, and delicious meals."
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.title}>{product.title}</div>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {product.carousel.map((item, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            >
                                <img src={item} className="d-block w-100" alt={item} style={{ height: "345px" }} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "#A9A9A9", borderRadius: "10px" }}></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "#A9A9A9", borderRadius: "10px" }}></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className={classes.originalPrice}>MRP: {product.mrp}/-</div>
                <div className={classes.offerPrice}>OFFER PRICE: {product.offerPrice}/-</div>
                <div className={classes.discount}>You Save {product.discount}/-</div>
                <div className={classes.aboutProduct}>
                    About the Product
                    <div className={`${classes.description} ${showMore ? classes.showMore : ''}`}>
                        {showMore ? product.about : product.about.split(' ').slice(0, 30).join(' ') + '...'}
                    </div>
                    <button className={classes.showMoreButton} onClick={toggleShowMore}>
                        <FontAwesomeIcon icon={showMore ? faChevronUp : faChevronDown} /> {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductPage;

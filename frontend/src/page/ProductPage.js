import React, {useEffect, useState} from 'react';
import classes from './ProductPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../stores/actions/auth';


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

const ProductPage = () => {
    const [showMore, setShowMore] = useState(false); // Initial state set to false

    const [selectedImage, setSelectedImage] = useState(product.carousel[0]);
    const dispatch = useDispatch();
    const data = useSelector(detail => detail.auth.productDetail);
     const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function getData(){
            await dispatch(getProductDetail(id)) 
        }
        getData();
    },[dispatch,id])
    console.log("params",data);
    // console.log(params);

    useEffect(() => {
        if (data && data.carousel && data.carousel.length > 0) {
            setSelectedImage(data.carousel[0]);
        }
    }, [data]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.subContainer}>
                    <div className={classes.title}>{data.name}</div>
                    <div className={classes.carouselSpecial}>
                        <div className="container">
                            <div className={`main-image mb-3 ${classes.mainImageContainer}`}>
                                <img src={selectedImage} className={`d-block w-100 ${classes.mainImage}`} alt="Main product" />
                            </div>
                            <div className="thumbnail-carousel">
                                <Slider {...settings}>
                                    {product.carousel.map((item, index) => (
                                        <div key={index} className="thumbnail mx-1" onClick={() => setSelectedImage(item)}>
                                            <img src={item} className={`img-thumbnail ${selectedImage === item ? 'selected' : ''}`} alt={`Thumbnail ${index + 1}`} style={{ height: "120px", width: "120px", objectFit: "contain", cursor: "pointer" }} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.subContainer}>
                    <div className={classes.titleNew}>{data.title}</div>
                    <div className={classes.carouselContainer}>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {product.carousel.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    >
                                        <img src={item} className="d-block w-100" alt={item} style={{ height: "345px",objectFit:"contain" }} />
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
            </div>
        </React.Fragment>
    );
};

export default ProductPage;

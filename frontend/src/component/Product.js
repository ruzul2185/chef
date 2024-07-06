import React, {useEffect, useState} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Product.css';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from "../page/SearchResult.module.css";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getLatestProducts } from '../stores/actions/auth';
// import { LatestProducts } from '../stores/reducers/auth';

const Product = (props) => {

    const [itemsPerPage, setItemsPerPage] = useState(3);
    const dispatch = useDispatch();

    const categoryList = useSelector(state => state.auth.LatestProducts); // Access categoryList from Redux state
    // console.log("params");
    // console.log(categoryList);

// Fetch category list on component mount
useEffect(() => {
    dispatch(getLatestProducts());
}, [dispatch]);

    const list = [
        {
            id: 1,
            title: "Product 1",
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

    const navigate = useNavigate();

    
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = categoryList.length>0?Math.ceil(categoryList.length / itemsPerPage):0;

    const updateItemsPerPage = () => {
        const width = window.innerWidth;
        if (width < 600) {
            setItemsPerPage(3);
        } else if (width < 938) {
            setItemsPerPage(2);
        } else {
            setItemsPerPage(3);
        }
    };

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleIndicatorClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = categoryList.length>0?categoryList.slice(indexOfFirstItem, indexOfLastItem):0;


    return (
        <React.Fragment>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="prevButton">
                    <FontAwesomeIcon icon={faChevronLeft} color={"#232323"} style={{ fontSize: '48px' }}/>
                </button>
                <div className="indicator-container">
                    <p className="product-carousel-title">
                        {props.title}
                    </p>
                </div>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="nextButton">
                    <FontAwesomeIcon icon={faChevronRight} color={"#232323"} style={{ fontSize: '48px' }}/>
                </button>
            </div>
            <div className="product-container">
                <TransitionGroup component={null}>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1} className="prevButtonLeft">
                        <FontAwesomeIcon icon={faChevronLeft} color={"#232323"} style={{ fontSize: '48px' }}/>
                    </button>
                    {categoryList.length>0 && currentItems.map((item) => (
                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            classNames="product"
                        >
                            <div className="card responsive" >
                                <div className={classes.imageContainer} onClick={()=>{
                                    navigate(`./products/${item.id}`);
                                }}>
                                    <img src={item.images && item.images.length > 0 ? item.images[0].url : 'default-image-url.png'} className={classes.cardImgTop} alt={item.title} />
                                    {console.log(item.images[0].url)}
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
                        </CSSTransition>
                    ))}
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="nextButtonRight">
                        <FontAwesomeIcon icon={faChevronRight} color={"#232323"} style={{ fontSize: '48px' }}/>
                    </button>
                </TransitionGroup>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:"10px"}}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index + 1}
                        className={`indicator ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handleIndicatorClick(index + 1)}
                    />
                ))}
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <div className="view-all-button">
                    VIEW ALL
                </div>
            </div>
        </React.Fragment>
    );
};

export default Product;

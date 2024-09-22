import React, { useEffect, useLayoutEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Product.css';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../page/SearchResult.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getLatestProducts } from '../stores/actions/auth';

const Product = (props) => {

    const [itemsPerPage, setItemsPerPage] = useState(3);
    const dispatch = useDispatch();
    const navigate = useNavigate();
const pathname = useLocation();
    const categoryList = useSelector(state => state.auth.LatestProducts); // Access categoryList from Redux state
    useLayoutEffect(()=>{
        window.scrollTo({top:0, behaviour:"auto"});
    },[pathname]);
    // Fetch category list on component mount
    useEffect(() => {
        dispatch(getLatestProducts());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = categoryList.length > 0 ? Math.ceil(categoryList.length / itemsPerPage) : 0;

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

    // Conditionally slice the products based on the title
    let currentItems;

    if (props.title === "OUR BEST SELLERS") {
        currentItems = categoryList.length > 0 ? categoryList.slice(3, 6) : []; // Show the next 3 products (index 3 to 5)
    } else {
        currentItems = categoryList.length > 0 ? categoryList.slice(indexOfFirstItem, indexOfLastItem) : [];
    }

    const handleViewAllClick = () => {
        window.scrollTo({top:0, behaviour:"auto"}); // Scroll to the top of the page
        navigate('/all-products', { state: { categoryList } }); // Adjust the path to where your all products page is located
    };

    const {
        buttonStyles = {
            prevButton: { backgroundColor: '#E4E0E0' },
            prevButtonLeft: { backgroundColor: '#E4E0E0' },
            nextButton: { backgroundColor: '#E4E0E0' },
            nextButtonRight: { backgroundColor: '#E4E0E0' }
        }
    } = props;

    return (
        <React.Fragment>
            <div className="pagination">
                <button 
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 1} 
                    className="prevButton" 
                    style={buttonStyles.prevButton}
                >
                    <FontAwesomeIcon icon={faChevronLeft} color={"#232323"} style={{ fontSize: '35px' }} />
                </button>
                <div className="indicator-container">
                    <p className="product-carousel-title">
                        {props.title}
                    </p>
                </div>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages} 
                    className="nextButton" 
                    style={buttonStyles.nextButton}
                >
                    <FontAwesomeIcon icon={faChevronRight} color={"#232323"} style={{ fontSize: '35px' }} />
                </button>
            </div>
            <div className="product-container">
                <TransitionGroup component={null}>
                    <button 
                        onClick={handlePreviousPage} 
                        disabled={currentPage === 1} 
                        className="prevButtonLeft" 
                        style={buttonStyles.prevButtonLeft}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} color={"#232323"} style={{ fontSize: '48px' }} />
                    </button>
                    {categoryList.length > 0 && currentItems.map((item) => (
                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            classNames="product"
                        >
                            <div className="card responsive" >
                                <div className={classes.imageContainer} onClick={() => {
                                    window.scrollTo({top:0, behaviour:"auto"});
                                    navigate(`./products/${item.id}`);
                                }}>
                                    <img src={item.url !== null ? item.url : 'default-image-url.png'} className={classes.cardImgTop} alt={item.name} style={{ objectFit: 'contain', height: '400px' }} />
                                    <div className={classes.overlay}>
                                        <button className={classes.overlayButton}>Click to View</button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-text">
                                        <h5 className="card-title">{item.name}</h5>
                                        {/* <h5 className="card-subtitle">MRP: {item.original_price}</h5>
                                        <h5 className="card-offer">OFFER PRICE: {item.offer_price}</h5> */}
                                        {/* <h5 className="card-discount">
                                        You save Rs.{item.discount && item.discount !== '' && item.discount !==null ? item.discount : (item.original_price - item.offer_price)}/-</h5> */}
                                    </div>
                                    <div onClick={() => {
                                        window.scrollTo({top:0, behaviour:"auto"});
                                    navigate(`./products/${item.id}`);
                                }} className="btn btn-primary cart-button">VIEW DETAIL</div>
                                </div>
                            </div>
                        </CSSTransition>
                    ))}
                    <button 
                        onClick={handleNextPage} 
                        disabled={currentPage === totalPages} 
                        className="nextButtonRight" 
                        style={buttonStyles.nextButtonRight}
                    >
                        <FontAwesomeIcon icon={faChevronRight} color={"#232323"} style={{ fontSize: '48px' }} />
                    </button>
                </TransitionGroup>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: "10px" }}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index + 1}
                        className={`indicator ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handleIndicatorClick(index + 1)}
                    />
                ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div className="view-all-button" onClick={handleViewAllClick}>
                    VIEW ALL
                </div>
            </div>
        </React.Fragment>
    );
};

export default Product;

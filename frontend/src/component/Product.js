import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Product.css';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Product = () => {
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

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(list.length / itemsPerPage);

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
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <React.Fragment>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="btn btn-secondary">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="indicator-container">
                    <p className="product-carousel-title">
                        NEW ARRIVALS
                    </p>
                </div>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-secondary">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="product-container">
                <TransitionGroup component={null}>
                    {currentItems.map((item) => (
                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            classNames="product"
                        >
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <div className="card-body-text">
                                        <h5 className="card-title">{item.title}</h5>
                                        <h5 className="card-subtitle">MRP: {item.mrp}</h5>
                                        <h5 className="card-offer">OFFER PRICE: {item.mrp}</h5>
                                        <h5 className="card-discount">You save 10%($700)</h5>
                                    </div>
                                    <a href="#" className="btn btn-primary cart-button">ADD TO CART</a>
                                </div>
                            </div>
                        </CSSTransition>
                    ))}
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

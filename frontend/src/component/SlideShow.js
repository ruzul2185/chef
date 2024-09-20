import React, { useState, useEffect } from 'react';
import './SlideShow.css';

// Import both desktop and mobile images
import slider1 from '../asset/slider1(2).png';
import slider1M from '../asset/slider1(M)(2).png';
import slider2 from '../asset/slider2.png';
import slider2M from '../asset/slider2(M).png';
import slider3 from '../asset/slider3.png';
import slider3M from '../asset/slider3(M).png';
import slider4 from '../asset/slider4.png';
import slider4M from '../asset/slider4(M).png';
import slider5 from '../asset/slider5.png';
import slider5M from '../asset/slider5(M).png';

const SlideShow = () => {
    // State to track if the view is mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        // Event listener for window resize
        const handleResize = () => setIsMobile(window.innerWidth <= 767);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <React.Fragment>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={isMobile ? slider1M : slider1} className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={isMobile ? slider2M : slider2} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={isMobile ? slider3M : slider3} className="d-block w-100" alt="Slide 3" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={isMobile ? slider4M : slider4} className="d-block w-100" alt="Slide 4" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={isMobile ? slider5M : slider5} className="d-block w-100" alt="Slide 5" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </React.Fragment>
    );
}

export default SlideShow;

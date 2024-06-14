import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './OutletBanner.module.css';

import Hawkins from '../asset/hawkins-new.png';
import Vinod from '../asset/vinod-new.png';
import Sathl from '../asset/stahl-new.jpg';
import Prestige from '../asset/prestige-new.png';
import Boss from '../asset/boss-new.jpg';
import Bosch from '../asset/bosch-new.png';
import Vidiem from '../asset/vidiem-new.jpg';
import Wonderchef from '../asset/wonderchef-new.jpg';
import Sujata from '../asset/sujata-new.png';
import Havells from '../asset/havells-new.png';

const OutletBanner = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };

    const list = [
        {
            id:1,
            image:Vinod,
        },
        {
            id:2,
            image:Sathl,
        },
        {
            id:3,
            image:Hawkins,
        },
        {
            id:4,
            image:Prestige,
        },
        {
            id:5,
            image:Boss,
        },
        {
            id:6,
            image:Bosch,
        },
        {
            id:7,
            image:Vidiem,
        },
        {
            id:8,
            image:Wonderchef,
        },
        {
            id:9,
            image:Sujata,
        },
        {
            id:10,
            image:Havells,
        },
    ];

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.titleContainer}>
                {props.title}
            </div>
            <Slider {...settings}>
                    {list.map((item)=>(
                        <div className={styles.imageContainer}>
                            <img src={item.image} id={item.id} alt={item.id} style={{objectFit:"contain"}}/>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default OutletBanner;
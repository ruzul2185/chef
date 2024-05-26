import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './OutletBanner.module.css';

const OutletBanner = (props) => {
    const settings = {
        dots: false,
        infinite: false,
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
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
        ]
    };

    const list = [
        {
            id:1,
            image:"//www.wonderchef.com/cdn/shop/files/Home_centre_logo_color-min_200x_0bfc4fcf-dbb8-4d36-99eb-3964201a98ae_250x.jpg?v=1649916860",
        },
        {
            id:2,
            image:"//www.wonderchef.com/cdn/shop/files/2_1cd89edc-8c1c-41e0-a543-2ef9febd9765_250x.png?v=1649916838",
        },
        {
            id:3,
            image:"//www.wonderchef.com/cdn/shop/files/4_30cea9b2-fd14-4762-8183-d68918b0708b_250x.png?v=1649916838",
        },
        {
            id:4,
            image:"//www.wonderchef.com/cdn/shop/files/5_74ed1c86-cbd2-46b6-883c-c078583626e9_250x.png?v=1649916838",
        },
        {
            id:5,
            image:"//www.wonderchef.com/cdn/shop/files/6_250x.png?v=1649916838\" data-src=\"//www.wonderchef.com/cdn/shop/files/6_250x.png?v=1649916838",
        },
        {
            id:6,
            image:"//www.wonderchef.com/cdn/shop/files/7_250x.png?v=1649916838",
        },
        {
            id:7,
            image:"//www.wonderchef.com/cdn/shop/files/8_a0acbeec-a5bb-4577-a3c1-c771c92efa45_250x.png?v=1649916838",
        },
        {
            id:8,
            image:"//www.wonderchef.com/cdn/shop/files/9_1807b9ac-4375-438c-8a16-5415b533dfa5_250x.png?v=1649916838",
        },
        {
            id:9,
            image:"//www.wonderchef.com/cdn/shop/files/10_250x.png?v=1649916838",
        },
        {
            id:10,
            image:"//www.wonderchef.com/cdn/shop/files/11_4f682a1d-d64b-43be-b366-ac82bbd790a2_250x.jpg?v=1649916838",
        },
        {
            id:11,
            image:"//www.wonderchef.com/cdn/shop/files/12_6a234330-b4e7-4805-8a60-35556a4e4cc6_250x.jpg?v=1649917006",
        },
        {
            id:12,
            image:"//www.wonderchef.com/cdn/shop/files/13_98a2fe95-27ad-4c4c-946c-f124fc830d04_250x.jpg?v=1649917018",
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
                            <img src={item.image} id={item.id} alt={item.id}/>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default OutletBanner;
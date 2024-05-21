import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Review.module.css';

const Review = (props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    const list = [
        {
          id:1,
          image:'//www.wonderchef.com/cdn/shop/files/final-edited-pan_1000x1000_ba6379f7-3eb1-4f4b-b817-82a6bf79f00b_1000x1000.jpg?v=1698759217',
          desc:'I must say that it is the queen among all the utensils - beautiful pan. I use it to do all my tadka, eggs, and paneer dishes because better material doesn\'t burn my stuff and uses less oil. Even the handle doesn\'t get hot. Really appreciate the effort of making this product wonderful.',
          address:'Sunita Mehta, Jaipur',
        },
        {
            id:2,
            image:'//www.wonderchef.com/cdn/shop/files/final-edited-soupmaker_1000x1000_7a87ad09-4118-4e72-b874-b6eb3d8832ff_1000x1000.jpg?v=1698759216',
            desc:'I must say that it is the queen among all the utensils - beautiful pan. I use it to do all my tadka, eggs, and paneer dishes because better material doesn\'t burn my stuff and uses less oil. Even the handle doesn\'t get hot. Really appreciate the effort of making this product wonderful.',
            address:'Savita Dhawle, Nagpur',
        },
        {
            id:3,
            image:'//www.wonderchef.com/cdn/shop/files/final-edited-15-bar-coffe-maker_1000x1000_f7f78059-e815-49c3-b364-0b2e8a014b3c_1000x1000.jpg?v=1698759217',
            desc:'I must say that it is the queen among all the utensils - beautiful pan. I use it to do all my tadka, eggs, and paneer dishes because better material doesn\'t burn my stuff and uses less oil. Even the handle doesn\'t get hot. Really appreciate the effort of making this product wonderful.',
            address:'Nirja Singh, Mumbai',
        },
        {
            id:4,
            image:'//www.wonderchef.com/cdn/shop/files/final-edited-15-bar-coffe-maker_1000x1000_f7f78059-e815-49c3-b364-0b2e8a014b3c_1000x1000.jpg?v=1698759217',
            desc:'I must say that it is the queen among all the utensils - beautiful pan. I use it to do all my tadka, eggs, and paneer dishes because better material doesn\'t burn my stuff and uses less oil. Even the handle doesn\'t get hot. Really appreciate the effort of making this product wonderful.',
            address:'Nirja Singh, Mumbai',
        },
        {
            id:5,
            image:'//www.wonderchef.com/cdn/shop/files/final-edited-forza_1000x1000_55f77052-4e15-4c95-a1b3-5628fe754749_1000x1000.jpg?v=1698759216',
            desc:'I must say that it is the queen among all the utensils - beautiful pan. I use it to do all my tadka, eggs, and paneer dishes because better material doesn\'t burn my stuff and uses less oil. Even the handle doesn\'t get hot. Really appreciate the effort of making this product wonderful.',
            address:'Madhuri Gujarathi, Hyderabad',
        },
        {
            id:6,
            image:'//www.wonderchef.com/cdn/shop/files/final-edited-NB-Smart_1000x1000_6f2f8830-315b-4d89-a210-c830236410e0_1000x1000.jpg?v=1698759217',
            desc:'I must say that it is the queen among all the utensils - beautiful pan. I use it to do all my tadka, eggs, and paneer dishes because better material doesn\'t burn my stuff and uses less oil. Even the handle doesn\'t get hot. Really appreciate the effort of making this product wonderful.',
            address:'Anil Patel, Delhi',
        },
    ];

    return (
        <React.Fragment>
            <div className={styles.mainContainer}>
                <div className={styles.textCenter}>
                    {props.title}
                </div>
                <Slider {...settings} className={styles.slickList}>
                    {list.map((item)=>(
                        <div className={styles.container}>
                            <div className={styles.subContainer}>
                                <div>
                                    <img
                                        className={styles.image}
                                        src={item.image}
                                        alt={"..."}
                                    />
                                </div>
                                <div className={styles.center}>★★★★★</div>
                                <div className={styles.center}>{item.desc}</div>
                                <div className={styles.center} style={{color:"#6A0c0D"}}>{item.address}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </React.Fragment>
    );
}

export default Review;

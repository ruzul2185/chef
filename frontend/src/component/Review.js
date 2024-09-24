import React from 'react';
import styles from './Review.module.css';
import './SwiperControl.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import {A11y, Navigation, Pagination, Scrollbar, Autoplay} from "swiper/modules";
import review1 from '../asset/review1.png';
import review2 from '../asset/review2.png';
import review3 from '../asset/review3.png';
import review4 from '../asset/review4.png';
const Review = (props) => {

    const list = [
        {
          id:1,
          image:review1,
          desc:"I recently purchased a non-stick tawa from Sathe Metalwares Nagpur, and I couldn't be happier with my choice! The tawa heats up quickly and evenly, making it perfect for everything from dosas to chapatis. Overall, I highly recommend Sathe Metalwares for anyone looking for quality kitchen appliances.",
        //   address:'Sunita Mehta, Jaipur',
        },
        {
            id:2,
            image:review2,
            desc:"I recently upgraded my kitchen with a new gas stove cooktop from Sathe Metalwares in Nagpur, and it has been a game-changer! The cooktop heats food faster and more efficiently, saving both time and energy. With its sleek design and easy-to-use controls, it adds a modern touch to my kitchen.",
            // address:'Savita Dhawle, Nagpur',
        },
        {
            id:3,
            image:review3,
            desc:"The air fryer I bought from Sathe Metals in Nagpur has been perfect for preparing healthy and delicious meals. It cooks everything to perfection with minimal oil, making it ideal for guilt-free snacking. The compact design fits perfectly on my counter, and it's incredibly easy to clean after use.",
            // address:'Nirja Singh, Mumbai',
        },
        {
            id:4,
            image:review4,
            desc:"I found the perfect oven at Sathe Metals Nagpur, and it has completely transformed my mornings! The rich aroma and flavor of freshly brewed coffee are now just a button away, and the machine's stylish design adds a sophisticated touch to my kitchen decor.",
            // address:'Nirja Singh, Mumbai',
        },
        // {
        //     id:5,
        //     image:'//www.wonderchef.com/cdn/shop/files/final-edited-forza_1000x1000_55f77052-4e15-4c95-a1b3-5628fe754749_1000x1000.jpg?v=1698759216',
        //     desc:'I must say that it is the queen among all the utensils - beautiful pan. I use it to do all my tadka, eggs, and paneer dishes because better material doesn\'t burn my stuff and uses less oil. Even the handle doesn\'t get hot. Really appreciate the effort of making this product wonderful.',
        //     address:'Madhuri Gujarathi, Hyderabad',
        // },
        // {
        //     id:6,
        //     image:'//www.wonderchef.com/cdn/shop/files/final-edited-NB-Smart_1000x1000_6f2f8830-315b-4d89-a210-c830236410e0_1000x1000.jpg?v=1698759217',
        //     desc:'I must say that it is the queen among all the utensils - beautiful pan. I use it to do all my tadka, eggs, and paneer dishes because better material doesn\'t burn my stuff and uses less oil. Even the handle doesn\'t get hot. Really appreciate the effort of making this product wonderful.',
        //     address:'Anil Patel, Delhi',
        // },
    ];

    return (
        <React.Fragment>
            <div className={styles.mainContainer}>
                <div className={styles.textCenter}>
                    {props.title}
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={true}
                    
                    style={{
                        '--swiper-navigation-color': 'red', // Change arrow color to red
                    }}
                    breakpoints={{
                        992: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1200:{
                            slidesPerView: 3,
                        },
                    }}
                    // autoplay={true}
                >
                    {list.map((item)=>(
                        <SwiperSlide className={styles.container} key={item.id}>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </React.Fragment>
    );
}

export default Review;

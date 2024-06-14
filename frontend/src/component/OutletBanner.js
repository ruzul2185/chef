import React from 'react';
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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

const OutletBanner = (props) => {

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
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                style={{
                    '--swiper-navigation-color': 'red', // Change arrow color to red
                }}
                loop={true}
                autoplay={{
                    delay: 200,
                    disableOnInteraction: false,
                }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                {list.map((item)=>(
                    <SwiperSlide className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} id={item.id} alt={item.id} style={{objectFit:"contain"}}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OutletBanner;
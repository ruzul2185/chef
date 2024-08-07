import React from 'react';
import styles from './OutletBanner.module.css';

import Hawkins from '../asset/hawkins-new.png';
import Vinod from '../asset/vinod-new.png';
import Sathl from '../asset/stahl-new.jpg';
import Prestige from '../asset/prestige-new.png';
import Boss from '../asset/boss-new.png';
import Bosch from '../asset/bosch-new.png';
import Vidiem from '../asset/vidiem-new.png';
import Wonderchef from '../asset/wonderchef-new2.png';
import Sujata from '../asset/sujata-new.png';
import Havells from '../asset/havells-new.png';
import phillips from '../asset/philips-icon.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import {A11y, Navigation, Pagination, Scrollbar, Autoplay} from "swiper/modules";

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
        {
            id:11,
            image:phillips,
        },
    ];

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.titleContainer}>
                {props.title}
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            
                style={{
                    '--swiper-navigation-color': 'red', // Change arrow color to red
                }}
                loop={true}
                breakpoints={{
                    586: {
                        slidesPerView: 2,
                    },
                    786: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1450:{
                        slidesPerView: 6,
                    },
                }}
                autoplay={true}
            >
                {list.map((item)=>(
                    <SwiperSlide key={item.id}>
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
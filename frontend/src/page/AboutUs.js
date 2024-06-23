import React from 'react';
import styles from './AboutUs.module.css';
import logo from "../asset/aboutUs.jpg";

const AboutUs = () => {
    return(
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={logo} alt="images" className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.title}>
                        ABOUT US
                    </div>
                    <div>
                        Wonderchef is a leader in cookware and kitchen
                        appliances that enable our customers to cook
                        healthy, tasty food with convenience. German
                        standards of quality, Italian designs, &amp; constant
                        innovation are the hallmarks of Wonderchef.
                        We bring warmth to every meal by creating a
                        perfect blend of aesthetics and functionality. We
                        are inspired by global trends to create beautiful
                        kitchen stories that bring out the culinary artist
                        in you!

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default AboutUs;
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <React.Fragment>
            <div className={styles.mainContainer}>
                <div>
                    <div className={styles.heading}>
                        SUBSCRIBE TO OUR NEWSLETTER
                    </div>
                    <div className={styles.description}>
                        Subscribe to email alerts. We promise not to spam your inbox.
                    </div>
                    <div className={styles.emailContainer}>
                        <input className={styles.inputContainer} type={"text"} placeholder={"Enter Email"}/>
                        <button className={styles.submitButton} type={"submit"}>SUBSCRIBE</button>
                    </div>
                </div>
                <div className={styles.optionContainer}>
                    <div className={styles.heading}>
                        ABOUT WONDERCHEF
                    </div>
                    <a href="../pages/about-us" className={styles.anchor}>About Us</a>
                    <a href="#" className={styles.anchor}>Investors</a>
                </div>
                <div className={styles.optionContainer}>
                    <div className={styles.heading}>
                        OUR POLICIES
                    </div>
                    <a href="#" className={styles.anchor}>Return Policy</a>
                    <a href="#" className={styles.anchor}>Terms & Conditions</a>
                    <a href="#" className={styles.anchor}>Privacy Policy</a>
                    <a href="#" className={styles.anchor}>Wonderpoints T&C</a>
                </div>
                <div className={styles.optionContainer}>
                    <div className={styles.heading}>
                        INFORMATION
                    </div>
                    <a href="#" className={styles.anchor}>E-Recipe Books</a>
                    <a href="#" className={styles.anchor}>Blogs & Recipes</a>
                    <a href="#" className={styles.anchor}>All Blogs</a>
                </div>
                <div className={styles.optionContainer}>
                    <div className={styles.heading}>
                        NEED HELP?
                    </div>
                    <a href="#" className={styles.anchor}>Track Your Order</a>
                    <a href="#" className={styles.anchor}>Online Service Request</a>
                    <a href="#" className={styles.anchor}>Warranty Registration</a>
                    <a href="#" className={styles.anchor}>Replacement Request</a>
                    <a href="#" className={styles.anchor}>Gift Card</a>
                    <a href="../pages/contact-us" className={styles.anchor}>Contact Us</a>
                </div>
                <div className={styles.optionContainer}>
                    <div className={styles.heading}>
                        OTHER LINKS
                    </div>
                    <a href="#" className={styles.anchor}>DTH Member Login</a>
                    <a href="#" className={styles.anchor}>Locate Brand Outlets</a>
                    <a href="#" className={styles.anchor}>Franchise Opportunity</a>
                    <a href="#" className={styles.anchor}>Corporate Gifting</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;

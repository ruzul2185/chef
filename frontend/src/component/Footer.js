import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>

<div className={styles.section}>
        <div className={styles.heading}>SUBSCRIBE TO OUR NEWSLETTER</div>
        <div className={styles.description}>
          Subscribe to email alerts. We promise not to spam your inbox.
        </div>
        <div className={styles.emailContainer}>
          <input
            className={styles.inputContainer}
            type="text"
            placeholder="Enter Email"
          />
          <button className={styles.submitButton} type="submit">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className={styles.section} style={{marginLeft: 65}}>
          <div className={styles.heading}>Find Us Here</div>
          <div className={styles.address}>
            Sathe's Metalwares West High Court Road, Gokulpeth, Gokulpeth,
            opposite Rama Theator, Nagpur, Maharashtra 440010
          </div>
        </div>
      <div className={styles.section}>
        <div className={styles.heading}>Contact Us</div>
        <div className={styles.contactDetails}>
          <a href="tel:+917122533308" className={styles.anchor}>
            +917122533308
          </a>
          <br />
          <a href="mailto:sathemetalwares@gmail.com" className={styles.anchor}>
            sathemetalwares@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>About Us</div>
        <div className={styles.address}>
          Established in 1974 by Chintamani Sathe and now led by Pardeep S.
          Sathe....
          <a href="../pages/about-us" className={styles.anchor}>
            Read More
          </a>
        </div>
        <div className={styles.socialMedia}>
          <a href="#" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        Created By Priya Baniya | All Rights Reserved!
      </div>
    </div>
  );
};

export default Footer;

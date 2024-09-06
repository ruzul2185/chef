import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { addContact } from "../stores/actions/auth"; // Import your action

const Footer = () => {
  const [email, setEmail] = useState(""); // State to hold email for subscription
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const dispatch = useDispatch();

  useEffect(() => {
    // Prevent scrolling when the popup is visible
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  const handleSubscribe = () => {
    if (email.trim()) {
      // Only proceed if email is not empty
      dispatch(addContact("", email, "", "Subscription Request"));
      setEmail(""); // Clear email field after submission
      setShowPopup(true); // Show popup after submission
    } else {
      console.error("Please enter a valid email address.");
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className={styles.mainContainer}>
      {/* Popup Component */}
      {showPopup && (
        <>
          <div className={styles.overlay} onClick={closePopup}></div>
          <div className={styles.popupMessage}>
            Thank you for subscribing!
            <button className={styles.closeButton} onClick={closePopup}>
              ×
            </button>
          </div>
        </>
      )}

      {/* Newsletter Subscription Section */}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={styles.submitButton}
            type="button"
            onClick={handleSubscribe}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className={styles.section} style={{marginLeft: 65}}>
        <div className={styles.heading}>Find Us Here</div>
        <div className={styles.address}>
          Sathe's Metalwares West High Court Road, Gokulpeth, Gokulpeth,
          opposite Sudama Theater, Nagpur, Maharashtra 440010
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>Contact Us</div>
        <div className={styles.contactDetails}>
          <a href="tel:+919766637677" className={styles.anchor}>
            +919766637677
          </a>
          <br />
          <a href="tel:+919823034477" className={styles.anchor}>
            +919823034477
          </a>
          <br />
          <a href="mailto:pradeepsathe.ps@gmail.com" className={styles.anchor}>
          pradeepsathe.ps@gmail.com
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
            <FontAwesomeIcon icon={faInstagram} />
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

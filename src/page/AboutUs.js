import React from "react";
import styles from "./AboutUs.module.css";
import logo from "../asset/aboutUs.jpg";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={logo} alt="images" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>ABOUT US</div>
          <div className={styles.aboutUs}>
            <div className={styles.section}>
              <h2>Welcome to SATHE METALS</h2>
              <p>
                Established in 1974 by Chintamani Sathe and now led by Pardeep
                S. Sathe, SATHE METALS has been a trusted name in kitchen
                appliances for nearly five decades. As we approach our 50th
                anniversary on January 26, 2025, we take pride in our rich
                history and the trust we've earned from over 1 lakh happy
                customers.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Our Commitment to Excellence</h2>
              <p>
                At SATHE METALS, we are committed to providing top-quality
                kitchen products and exceptional service. Our extensive range of
                kitchen appliances, available at both SATHE METALS and SATHE'S
                Exclusive, caters to all your culinary needs. From essential
                appliances to unique innovations, we ensure that every product
                meets the highest standards of quality and performance.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Dedicated Service and Support</h2>
              <p>
                Our own service center ensures prompt and reliable maintenance
                for all your kitchen appliances, providing peace of mind and
                longevity to your investment. Our friendly and knowledgeable
                staff is dedicated to delivering personalized service and expert
                advice, making your shopping experience enjoyable and
                hassle-free.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Join Us in Celebrating</h2>
              <p>
                Join us as we celebrate our 50th anniversary with special
                promotions and events throughout the year. Experience the SATHE
                METALS difference and discover why generations of customers
                trust us for their kitchen appliance needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;

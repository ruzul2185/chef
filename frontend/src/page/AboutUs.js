import React from "react";
import styles from "./AboutUs.module.css";
import logo from "../asset/About_us_2.jpg";
import { HelmetProvider } from "react-helmet-async";

const AboutUs = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <title>ABOUT US</title>
        <meta name="description" content="Kitchen Appliances on Sathe Metals or Sathe Metalwares" />
        <link rel = "canonical" href="/pages/about-us/"/>
        <div className={`${styles.title} ${styles.textContainer2}`}>
          ABOUT US
        </div>

        <div className={styles.container}>
          <div className={styles.imageContainer}>
            {/* <img src={logo} alt="images" className={styles.image} /> */}
            <img src={logo} alt="Home appliances, kitchen appliances gift, best kitchen appliances company in indias" className={styles.image} />
          </div>

          {/* </div><div className={styles.textContainer}> */}
          <div className={styles.textContainer} style={{}}>
            <div className={styles.aboutUs}>
              <div className={styles.section}>
              <h1 className={styles.heading2}>Welcome to SATHE METALS</h1>
                <p>
                  Established in 1974 by Chintamani Sathe and now led by Pardeep S. Sathe, SATHE METALS has been a trusted name in kitchen appliances for nearly five decades. As we approach our 50th anniversary on January 26, 2025, we take pride in our rich history and the trust we've earned from over 1 lakh+ happy customers. Our extensive collection includes air fryers, cookers, cooktops, induction cookware, and a wide range of kitchen appliances designed to enhance your culinary experience.
                </p>

                <div className={styles.section}>
                  <h1 className={styles.heading2}>Our Commitment to Excellence</h1>
                  <p>
                    At SATHE METALS, we are committed to providing top-quality kitchen products and exceptional service. Our extensive range of kitchen appliances, available at both SATHE METALS and SATHE'S Exclusive, caters to all your culinary needs. From essential cooking appliances to unique innovations like air fryers and induction cookware, we ensure that every product meets the highest standards of quality and performance.
                  </p>
                </div>

                <div className={styles.section}>
                  <h1 className={styles.heading2}>Dedicated Service and Support</h1>
                  <p>
                    Our own service center ensures prompt and reliable maintenance for all your kitchen appliances, providing peace of mind and longevity to your investment. Our friendly and knowledgeable staff is dedicated to delivering personalized service and expert advice, making your shopping experience enjoyable and hassle-free. Whether you need assistance with cooktops, cookware, or other kitchen appliances, we’re here to help.
                  </p>
                </div>

                <div className={styles.section}>
                  <h1 className={styles.heading2}>Join Us in Celebrating</h1>
                  <p>
                    Join us as we celebrate our 50th anniversary with special promotions and events throughout the year. Experience the SATHE METALS difference and discover why generations of customers trust us for their kitchen appliance needs. From breakfast and snack solutions to versatile cooking appliances, Sathe’s Metalwares is your one-stop solution for all kitchen and home appliances in India.
                  </p>
                  <p>
                    We offer a wide range of products that are perfect for any modern household. Whether you're looking for a new gas stove, the best high-end kitchen appliances, or electrical home appliances for gifting, we have something for every need, including specialized items for beverages and various cooking solutions.
                  </p>
                </div>

              </div>
              <div className={styles.section}>
                  <h1 className={styles.heading2}>Why Choose Sathe’s Metalwares?</h1>
                  <ul>
                    <li>
                      <strong>Wide Range of Appliances:</strong> From gas stoves to electrical kitchen appliances, our collection is designed to make your cooking and daily tasks easier. As one of the best kitchen appliances companies in India, we provide high-quality products at competitive prices.
                    </li>
                    <li>
                      <strong>Best Time to Buy Appliances:</strong> Looking for the best deals? Sathe’s Metalwares offers special discounts on home appliances during festive seasons. Whether it’s the best place to buy home appliances or the best time to buy, we’ve got you covered.
                    </li>
                    <li>
                      <strong>Perfect for Gifting:</strong> Our range of kitchen appliances makes great gifts for family and friends. Whether you need kitchen appliances for gifting or high-quality home appliances for gifting, we ensure quality and reliability.
                    </li>
                    <li>
                      <strong>High-End and Energy-Efficient:</strong> Choose from a selection of the best high-end kitchen appliances that blend innovation with design. Our appliances are energy-efficient and built to last, making them perfect for modern Indian homes.
                    </li>
                  </ul>
                </div>

            </div>
          </div>
        </div>
      </HelmetProvider>
    </React.Fragment>
  );
};

export default AboutUs;

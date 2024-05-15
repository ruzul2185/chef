import React, {useState} from 'react';
import styles from "./Cart.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faXmark} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return(
        <React.Fragment>
            <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className={`${styles.rightSidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        Your Cart
                    </div>
                    <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className={styles.menuItems} style={{border:"none"}}>
                    <div className={styles.loginText}>Your cart is currently empty.</div>
                    <div>
                        <button className={styles.createButton}>CONTINUE SHOPPING</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Cart;
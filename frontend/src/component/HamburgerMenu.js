import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                <div className={styles.closedBar}></div>
                <div className={styles.closedBar}></div>
                <div className={styles.closedBar}></div>
            </div>
            <div className={`${styles.hamburgerMenu} ${isOpen ? styles.open : ''}`}>
                <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                    <div className={styles.closeIcon}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className={styles.menuItems}>
                    <a className={styles.menuContent} href="/">Home</a>
                    <a className={styles.menuContent} href="/about">About</a>
                    <a className={styles.menuContent} href="/contact">Contact</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HamburgerMenu;

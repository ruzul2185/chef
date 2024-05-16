import React, {useState} from 'react';
import styles from '../component/NavDropdown.module.css';

const NavDropdown = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return(
        <React.Fragment>
            <div className={styles.dropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className={styles.dropbtn}>{props.title}</button>
                {isOpen && (
                    <div className={styles.dropdownContent} onMouseLeave={handleClose}>
                        <a className={styles.item} href="#">Link 1</a>
                        <a className={styles.item} href="#">Link 2</a>
                        <a className={styles.item} href="#">Link 3</a>
                        <a className={styles.item} href="#">Link 1</a>
                        <a className={styles.item} href="#">Link 2</a>
                        <a className={styles.item} href="#">Link 3</a>
                        <a className={styles.item} href="#">Link 1</a>
                        <a className={styles.item} href="#">Link 2</a>
                        <a className={styles.item} href="#">Link 3</a>
                        <a className={styles.item} href="#">Link 1</a>
                        <a className={styles.item} href="#">Link 2</a>
                        <a className={styles.item} href="#">Link 3</a>
                        <a className={styles.item} href="#">Link 1</a>
                        <a className={styles.item} href="#">Link 2</a>
                        <a className={styles.item} href="#">Link 3</a>
                        <a className={styles.item} href="#">Link 1</a>
                        <a className={styles.item} href="#">Link 2</a>
                        <a className={styles.item} href="#">Link 3</a>
                        <a className={styles.item} href="#">Link 1</a>
                        <a className={styles.item} href="#">Link 2</a>
                        <a className={styles.item} href="#">Link 3</a>
                        <a className={styles.item} href="#">Link 1</a>
                        <a className={styles.item} href="#">Link 2</a>
                        <a className={styles.item} href="#">Link 3</a>

                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default NavDropdown;
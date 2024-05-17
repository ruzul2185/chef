import React, {useEffect, useState} from 'react';
import styles from '../component/NavDropdown.module.css';

const NavDropdown = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [topPosition, setTopPosition] = useState('30%');

    const calculateZoomLevel = () => {
        const zoomLevel = window.innerWidth / window.screen.availWidth;
        return zoomLevel;
    };

    const updateTopPosition = () => {
        const zoomLevel = calculateZoomLevel();
        const baseTop = 30; // Base top position in percentage
        const newTop = baseTop / zoomLevel; // Adjust top position based on zoom level
        setTopPosition(`${newTop}%`);
    };

    useEffect(() => {
        // Initial calculation
        updateTopPosition();

        // Add event listener to update position on resize (zoom level change)
        window.addEventListener('resize', updateTopPosition);

        // Cleanup event listener on component unmount
        return () => {
        window.removeEventListener('resize', updateTopPosition);
    };
}, []);

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
                    <div className={styles.dropdownContent} onMouseLeave={handleClose}
                         style={{ top: topPosition}}
                    >
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
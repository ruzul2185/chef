import React, { useEffect, useState, useRef } from 'react';
import styles from '../component/NavDropdown.module.css';

const NavDropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleMouseEnter = () => {
        if (props.list && props.list.length > 0) {
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            // Ensure the dropdown doesn't overflow the right edge of the screen
            if (dropdownRect.right > viewportWidth) {
                dropdownRef.current.style.left = `${viewportWidth - dropdownRect.width}px`;
                dropdownRef.current.style.transform = 'none';
            } else {
                dropdownRef.current.style.left = '50%';
                dropdownRef.current.style.transform = 'translateX(-50%)';
            }

            // Ensure the dropdown doesn't overflow the left edge of the screen
            if (dropdownRect.left < 0) {
                dropdownRef.current.style.left = '0';
                dropdownRef.current.style.transform = 'none';
            }
        }
    }, [isOpen]);

    return (
        <div className={styles.dropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className={styles.dropbtn}>{props.title}</button>
            {isOpen && (
                <div ref={dropdownRef} className={styles.dropdownContent}>
                    {props.list.map((item) => (
                        <a key={item.id} className={styles.item} href="#" id={item.id}>{item.name}</a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavDropdown;

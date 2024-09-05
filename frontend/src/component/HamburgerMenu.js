import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HamDropdown from './HamDropdown';
import { URL } from '../constants/URLConstant';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownState, setDropdownState] = useState({
        Airfryer: false,
        Cooker: false,
        Cooktop: false,
        Induction: false,
        Cookware: false,
        Cooking_Appliances: false,
        Kitchen_Appliances: false,
        Beverage: false,
        Breakfast_and_Snacks: false,
        Iron: false
    });

    const categoryList = useSelector(state => state.auth.categoryList);
    const navigate = useNavigate();

    const itemsFilter = (item, option) => {
        return item.filter(item => item.parent_name === option);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // const toggleDropdown = (dropdown) => {
    //     setDropdownState(prevState => ({ ...prevState, [dropdown]: !prevState[dropdown] }));
    // };

    const handleNavigation = (category) => {
        navigate(`/category/${category}`);
        window.scrollTo(0, 0);
    };
// Modify the `toggleDropdown` function
const toggleDropdown = (dropdownName) => {
    setDropdownState((prevState) => {
        const newState = {};
        Object.keys(prevState).forEach((key) => {
            newState[key] = key === dropdownName ? !prevState[key] : false;
        });
        return newState;
    });
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
            <FontAwesomeIcon icon={faXmark} color={"#FFFFFF"} />
        </div>
    </div>
    <div className={styles.menuItems}>
        {[
            { name: 'Airfryer', label: 'AIRFRYER', category: 'Air Fryer' },
            { name: 'Cooker', label: 'COOKER', category: 'Cookers' },
            { name: 'Cooktop', label: 'COOKTOPS', category: 'cooktops' },
            { name: 'Induction', label: 'INDUCTION', category: 'Induction' },
            { name: 'Cookware', label: 'COOKWARE', category: 'Cookware' },
            { name: 'Cooking_Appliances', label: 'Cooking Appliance', category: 'Cooking Appliance' },
            { name: 'Kitchen_Appliances', label: 'Kitchen Appliance', category: 'Kitchen Appliance' },
            { name: 'Beverage', label: 'Beverage', category: 'Beverage' },
            { name: 'Breakfast_and_Snacks', label: 'Breakfast and Snack', category: 'Breakfast and Snack' },
            { name: 'Iron', label: 'IRON', category: 'Iron' },
        ].map(({ name, label, category }) => (
            <React.Fragment key={name}>
                <div className={styles.menuContent} onClick={() => { toggleDropdown(name); handleNavigation(category.toLowerCase()); }}>
                    {label}
                </div>
                {dropdownState[name] && (
                    <div className={`${styles.dropdown} ${styles.dropdownAnimation}`}>
                        <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, category) : []} />
                    </div>
                )}
            </React.Fragment>
        ))}
    </div>
    <div style={{ marginTop: "20px" }}>
        <a className={styles.menuContent} href="../pages/about-us">ABOUT US</a>
        <a className={styles.menuContent} href="../pages/contact-us">CONTACT US</a>
    </div>
</div>

        </React.Fragment>
    );
};

export default HamburgerMenu;
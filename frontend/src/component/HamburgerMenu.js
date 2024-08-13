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
        Beverages: false,
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

    const toggleDropdown = (dropdown) => {
        setDropdownState(prevState => ({ ...prevState, [dropdown]: !prevState[dropdown] }));
    };

    const handleNavigation = (category) => {
        navigate(`/category/${category}`);
        window.scrollTo(0, 0);
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
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Airfryer'); handleNavigation('air fryer'); }}>
                        AIRFRYER
                    </div>
                    {dropdownState.Airfryer && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Airfryer") : []} />
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Cooker'); handleNavigation('cookers'); }}>
                        COOKER
                    </div>
                    {dropdownState.Cooker && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Cooker") : []} />
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Cooktop'); handleNavigation('cooktops'); }}>
                        COOKTOPS
                    </div>
                    {dropdownState.Cooktop && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Cooktop") : []} />
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Induction'); handleNavigation('induction'); }}>
                        INDUCTION
                    </div>
                    {dropdownState.Induction && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Induction") : []} />
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Cookware'); handleNavigation('cookware'); }}>
                        COOKWARE
                    </div>
                    {dropdownState.Cookware && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Cookware") : []} />
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Cooking_Appliances'); handleNavigation('cooking appliance'); }}>
                        COOKING APPLIANCES
                    </div>
                    {dropdownState.Cooking_Appliances && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Cooking Appliances") : []} />
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Kitchen_Appliances'); handleNavigation('kitchen appliance'); }}>
                        KITCHEN APPLIANCES
                    </div>
                    {dropdownState.Kitchen_Appliances && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Kitchen Appliances") : []} />
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Beverages'); handleNavigation('beverages'); }}>
                        BEVERAGES
                    </div>
                    {dropdownState.Beverages && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Beverages") : []} />
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Breakfast_and_Snacks'); handleNavigation('breakfast & snacks'); }}>
                        BREAKFAST & SNACKS
                    </div>
                    {dropdownState.Breakfast_and_Snacks && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Breakfast and Snacks") : []} />
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => { toggleDropdown('Iron'); handleNavigation('iron'); }}>
                        IRON
                    </div>
                    {dropdownState.Iron && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length > 0 ? itemsFilter(categoryList, "Iron") : []} />
                        </div>
                    )}
                </div>
                <div style={{ marginTop: "20px" }}>
                    <a className={styles.menuContent} href="../pages/about-us">ABOUT US</a>
                    <a className={styles.menuContent} href="../pages/contact-us">CONTACT</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HamburgerMenu;
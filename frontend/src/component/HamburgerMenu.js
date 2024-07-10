import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    DropDownListFive,
    DropDownListFour,
    DropDownListOne, DropDownListSeven, DropDownListSix,
    DropDownListThree,
    DropDownListTwo
} from "../constants/WebConstant";
import { useSelector } from 'react-redux';
import HamDropdown from './HamDropdown';

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

    const categoryList = useSelector(state => state.auth.categoryList); // Access categoryList from Redux state
        // console.log("params");
        // console.log(categoryList);

    // Fetch category list on component mount

    const itemsFilter = (item,option)=>{
        const cookwareItems = item.filter(item => item.parent_name === option);
        // console.log(cookwareItems);
        return cookwareItems
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (dropdown) => {
        setDropdownState({ ...dropdownState, [dropdown]: !dropdownState[dropdown] });
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
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Airfryer')}>
                        AIRFRYER
                    </div>
                    {dropdownState.Airfryer && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Airfryer"):[]}/>
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Cooker')}>
                        COOKER
                    </div>
                    {dropdownState.Cooker && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Cooker"):[]} />
                        </div>
                    )}
                    {/* <a className={styles.menuContent} href="#">COFFEE MACHINES</a> */}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Cooktop')}>
                        COOKTOPS
                    </div>
                    {dropdownState.Cooktop && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Cooktop"):[]}/>
                        </div>
                    )}
                    {/* <a className={styles.menuContent} href="#">MIXER GRINDERS</a>
                    <a className={styles.menuContent} href="#">FLASKS & BOTTLES</a>
                    {/* Nutri-Blend dropdown contents */}
                    {/* <a className={styles.menuContent} href="#">HOME & LIVING</a> */} 
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Induction')}>
                        INDUCTION
                    </div>
                    {dropdownState.Induction && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Induction"):[]}/>
                        </div>
                    )}
                    {/* Cookers dropdown contents */}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Cookware')}>
                        COOKWARE
                    </div>
                    {dropdownState.Cookware && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Cookware"):[]}/>
                        </div>
                    )}
                    {/* <a className={styles.menuContent} href="#">CHIMNEYS</a> */}
                    {/* Cooktops dropdown contents */}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Cooking_Appliances')}>
                        COOKING APPLIANCES
                    </div>
                    {dropdownState.Cooking_Appliances && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Cooking Appliances"):[]}/>
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Kitchen_Appliances')}>
                        KITCHEN APPLIANCES
                    </div>
                    {dropdownState.Kitchen_Appliances && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Kitchen Appliances"):[]}/>
                        </div>
                    )}
                    {/* <a className={styles.menuContent} href="#">GIFTING</a> */}
                    {/* Kitchen Tools dropdown contents */}
                    {/* <a className={styles.menuContent} href="#">WONDERENT</a> */}
                    {/* Spare Parts dropdown contents */}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Beverages')}>
                        BEVERAGES
                    </div>
                    {dropdownState.Beverages && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Beverages"):[]}/>
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Breakfast_and_Snacks')}>
                        BREAKFAST & SNACKS
                    </div>
                    {dropdownState.Breakfast_and_Snacks && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Breakfast and Snacks"):[]}/>
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('Iron')}>
                        IRON
                    </div>
                    {dropdownState.Iron && (
                        <div className={styles.dropdown}>
                            <HamDropdown styling={styles.dropdownItem} list={categoryList.length>0 ? itemsFilter(categoryList,"Iron"):[]}/>
                        </div>
                    )}
                </div>
                <div style={{marginTop:"20px"}}>
                <a className={styles.menuContent} href="../pages/about-us">ABOUT US</a>
                <a className={styles.menuContent} href="../pages/contact-us">CONTACT</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HamburgerMenu;

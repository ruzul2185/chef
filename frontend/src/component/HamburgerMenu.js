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

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownState, setDropdownState] = useState({
        cookware: false,
        appliances: false,
        nutriBlend: false,
        homeAndLiving: false,
        cookers: false,
        cooktops: false,
        kitchenTools: false,
        spareParts: false
    });

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
                    <div className={styles.menuContent} onClick={() => toggleDropdown('cookware')}>
                        COOKWARE
                    </div>
                    {dropdownState.cookware && (
                        <div className={styles.dropdown}>
                            {DropDownListOne.map((item) => (
                                <a className={styles.dropdownItem} key={item.id} href={"/collection/" + `${item.href}`}>{item.name}</a>
                            ))}
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('appliances')}>
                        APPLIANCES
                    </div>
                    {dropdownState.appliances && (
                        <div className={styles.dropdown}>
                            {DropDownListTwo.map((item) => (
                                <a className={styles.dropdownItem} href={"/collection/" + `${item.href}`}>{item.name}</a>
                            ))}
                        </div>
                    )}
                    <a className={styles.menuContent} href="#">COFFEE MACHINES</a>
                    <div className={styles.menuContent} onClick={() => toggleDropdown('nutriBlend')}>
                        NUTRI-BLEND
                    </div>
                    {dropdownState.nutriBlend && (
                        <div className={styles.dropdown}>
                            {DropDownListThree.map((item) => (
                                <a className={styles.dropdownItem} href={"/collection/" + `${item.href}`}>{item.name}</a>
                            ))}
                        </div>
                    )}
                    <a className={styles.menuContent} href="#">MIXER GRINDERS</a>
                    <a className={styles.menuContent} href="#">FLASKS & BOTTLES</a>
                    {/* Nutri-Blend dropdown contents */}
                    <a className={styles.menuContent} href="#">HOME & LIVING</a>
                    <div className={styles.menuContent} onClick={() => toggleDropdown('cookers')}>
                        COOKERS
                    </div>
                    {dropdownState.cookers && (
                        <div className={styles.dropdown}>
                            {DropDownListFour.map((item) => (
                                <a className={styles.dropdownItem} href={"/collection/" + `${item.href}`}>{item.name}</a>
                            ))}
                        </div>
                    )}
                    {/* Cookers dropdown contents */}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('cooktops')}>
                        COOKTOPS
                    </div>
                    {dropdownState.cooktops && (
                        <div className={styles.dropdown}>
                            {DropDownListFive.map((item) => (
                                <a className={styles.dropdownItem} href={"/collection/" + `${item.href}`}>{item.name}</a>
                            ))}
                        </div>
                    )}
                    <a className={styles.menuContent} href="#">CHIMNEYS</a>
                    {/* Cooktops dropdown contents */}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('kitchenTools')}>
                        KITCHEN TOOLS
                    </div>
                    {dropdownState.kitchenTools && (
                        <div className={styles.dropdown}>
                            {DropDownListSix.map((item) => (
                                <a className={styles.dropdownItem} href={"/collection/" + `${item.href}`}>{item.name}</a>
                            ))}
                        </div>
                    )}
                    <div className={styles.menuContent} onClick={() => toggleDropdown('spareParts')}>
                        SPARE PARTS
                    </div>
                    {dropdownState.spareParts && (
                        <div className={styles.dropdown}>
                            {DropDownListSeven.map((item) => (
                                <a className={styles.dropdownItem} href={"/collection/" + `${item.href}`}>{item.name}</a>
                            ))}
                        </div>
                    )}
                    <a className={styles.menuContent} href="#">GIFTING</a>
                    {/* Kitchen Tools dropdown contents */}
                    <a className={styles.menuContent} href="#">WONDERENT</a>
                    {/* Spare Parts dropdown contents */}
                </div>
            </div>
        </React.Fragment>
    );
};

export default HamburgerMenu;

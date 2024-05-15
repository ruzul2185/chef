import React, {useState} from 'react';
import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faPhoneAlt, faXmark} from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";
import LoginMenu from "./LoginMenu";
import Cart from "./Cart";


const Header = () => {

    const [loginIsOpen, setLoginIsOpen] = useState(false);

    const toggleLoginDropdown = () => {
        setLoginIsOpen(!loginIsOpen);
    };

    return(
        <React.Fragment>
            <div className="header-top">
                <div className="hamburgerMediaQuery">
                    <div className="sidebar-menu">
                        <HamburgerMenu />
                    </div>
                    <div className="header-Mobile-item text-center">
                        <div className="logo-wrapper" itemScope="" itemType="http://schema.org/Organization">
                            <a href="/" className="site-header__logo-image" style={{width:"250px"}}>
                                <img itemProp="logo"
                                     src="//www.wonderchef.com/cdn/shop/files/New-Website-Logo.png?v=1704047470"
                                     alt="Wonderchef"/>
                            </a>
                        </div>
                    </div>
                    <div className="sidebar-menu text-right">
                        <LoginMenu/>
                        <div style={{marginTop:"5px"}}>
                            <Cart/>
                        </div>
                    </div>
                </div>
                <div className="headerMediaQuery">
                    <div className="container navUser">
                        <ul className="navUser-left navUser-section">
                            <li className="navUser-item">
                                <a className="navUser-action" href="/#">About Wonderchef</a>
                            </li>
                            <li className="navUser-item">
                                <a className="navUser-action" href="/#">Contact</a>
                            </li>
                            <li className="navUser-item">
                                <a className="navUser-action" href="/#">Track Order</a>
                            </li>
                            <li className="navUser-item">
                                <a className="navUser-action" href="/#">Book Demo</a>
                            </li>
                            <li className="navUser-item">
                                <a className="navUser-action" href="/#">Corporate Gifting</a>
                            </li>
                            <li className="navUser-item">
                                <a className="navUser-action" href="/#">Blogs</a>
                            </li>
                            <li className="navUser-item">
                                <a className="navUser-action" href="/#">E-Recipe Book</a>
                            </li>
                        </ul>
                        <ul className="navUser-center navUser-section">

                        </ul>
                        <ul className="navUser-right navUser-section">
                            <li className="navUser-item navUser-item--account">
                                <i className="icon icon-user">
                                    <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 1024 1024"
                                         className="icon icon-user">
                                        <path className="path1"
                                              d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"></path>
                                        <path className="path2"
                                              d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"></path>
                                    </svg>
                                </i>
                            </li>
                            <div className="dropdown">
                                <div className="navUser-action" id="customer_login_link" onClick={toggleLoginDropdown} style={{cursor:"pointer"}}>
                                    Login
                                </div>
                                {loginIsOpen && (
                                    <div className="dropdown-content">
                                        <div className="header">
                                            <div className="headerText">
                                                Customer Login
                                            </div>
                                            <div className="hamburgerIcon" onClick={toggleLoginDropdown}>
                                                <FontAwesomeIcon icon={faXmark} />
                                            </div>
                                        </div>
                                        <div className="menuItems">
                                            <div className="loginText">If you are already registered, please log in.</div>
                                            <div className="inputContainer">
                                                <label className="label" htmlFor="email">Email<span style={{color:"red"}}>*</span></label>
                                                <input type="email" id="email" placeholder="Email" className="inputField" required />
                                            </div>
                                            <div className="inputContainer">
                                                <label className="label" htmlFor="password">Password<span style={{color:"red"}}>*</span></label>
                                                <input type="password" id="password" placeholder="Password" className="inputField" required />
                                            </div>
                                            <div>
                                                <a href="#" className="forgotPassword">Forgot your Password?</a>
                                            </div>
                                            <div>
                                                <button className="loginButton">Login</button>
                                            </div>
                                        </div>
                                        <div className="menuItems" style={{border:"none"}}>
                                            <div className="loginText">Create your account and enjoy a new shopping experience.</div>
                                            <div>
                                                <button className="createButton">CREATE A NEW ACCOUNT</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <span className="navUser-or">&nbsp;or&nbsp;</span>
                            <div className="navUser-action" id="customer_register_link" style={{minWidth:"108px", cursor:"pointer"}}>
                                Create an account
                            </div>
                            <li className="navUser-item icon-border">
                                <span className="navUser-text">
                                    <a href="https://www.facebook.com/WonderchefLife/" target="_blank"
                                       aria-describedby="a11y-new-window-external-message" rel="noopener">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                        <b className="icon-text">1.16M</b> </a>&nbsp;<a
                                    href="https://www.instagram.com/wondercheflife/" target="_blank"
                                    aria-describedby="a11y-new-window-external-message" rel="noopener">&nbsp;
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <b className="icon-text">510k</b></a>
                                </span>
                            </li>
                            <li className="navUser-item navUser-phone">
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                <a className="navUser-action icon-text" href="tel:1860 266 0788"
                                   aria-describedby="a11y-external-message">
                                    1860 266 0788
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-top">
                header
            </div>
            <div className="header-top">
                header
            </div>
        </React.Fragment>
    )
};

export default Header;
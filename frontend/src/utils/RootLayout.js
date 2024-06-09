import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Header from "../component/Header";
import classes from "../page/MainPage.module.css";
import HaloSection from "../component/HaloSection";
import Footer from "../component/Footer";

const RootLayout = () => {
    return(
        <React.Fragment>
            <Header/>

            <Outlet/>

            <div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default RootLayout;
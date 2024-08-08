import React from 'react';
import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";
import SearchResult from "../page/SearchResult";
import MainPage from "../page/MainPage";
import RootLayout from "../utils/RootLayout";
import ProductPage from "../page/ProductPage";
import AboutUs from '../page/AboutUs';
import ContactUs from '../page/ContactUs';
import AllProductsPage from '../component/AllProductsPage';
import CategoryPage from '../component/CategoryPage';

const router = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout/>,
        children: [
            {path: '/', element: <MainPage/>},
            {path: '/collection/:task', element: <SearchResult/>},
            {path: '/products/:id', element: <ProductPage/>},
            {path: '/collection/:task/products/:id', element:<ProductPage/>},
            {path: '/pages/about-us',element: <AboutUs/>},
            {path: '/pages/contact-us', element: <ContactUs/>},
            {path: '/all-products', element: <AllProductsPage/>},
            {path: '/category/:categoryName', element: <CategoryPage/>},
        ],
    },
    { path: '*', element: <Navigate to="/" /> }
]);

const WebNavigation = () => {
    return(
        <React.Fragment>
            <RouterProvider router={router}/>
        </React.Fragment>
    );
};

export default WebNavigation;
import React from 'react';
import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";
import SearchResult from "../page/SearchResult";
import MainPage from "../page/MainPage";
import RootLayout from "../utils/RootLayout";
import ProductPage from "../page/ProductPage";

const router = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout/>,
        children: [
            {path: '/', element: <MainPage/>},
            {path: '/collection/:task', element: <SearchResult/>},
            {path: '/collection/:task/products/:id', element:<ProductPage/>},
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
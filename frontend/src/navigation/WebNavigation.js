import React from 'react';
import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";
import SearchResult from "../page/SearchResult";
import MainPage from "../page/MainPage";
import RootLayout from "../utils/RootLayout";

const router = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout/>,
        children: [
            {path: '/', element: <MainPage/>},
            {path: '/collection/:task', element: <SearchResult/>},
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
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Home';
import Error from './Components/Error';
import CountryDetails from './Components/CountryDetails';
import Contact from './Components/Contact';

const router = createBrowserRouter([     // it is router which create different pages nm
    {
      path: "/",
      element: <div><App/></div>,
      errorElement:<Error/>,
      children:[
        {
            path: "/",
            element: <Home/>
          },
        {
            path: "/:country",               // dynamic routing 
            element: <CountryDetails />
          },
      ]
    },
 
  ]);
  


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<>
{/* <Header/> */}
<RouterProvider router={router} />
</>
);

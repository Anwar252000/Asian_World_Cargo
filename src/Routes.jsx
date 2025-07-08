// import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Career from "./pages/Career";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Layout from "./Components/outlet";
import Home from "./pages/Home";
import Oceanfreight from "./pages/Oceanfreight";
import Airfreight from "./pages/Airfreight";
import Roadfreight from "./pages/Roadfreight";
import Customservice from "./pages/Customservice";
import Warehousing from "./pages/Warehousing";
import DGcargo from "./pages/DGcargo";
import Services from "./Components/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/aboutus",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Aboutus />,
      },
    ],
  },
  {
    path: "/oceanfreight",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Oceanfreight />,
      },
    ],
  },
  {
    path: "/airfreight",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Airfreight />,
      },
    ],
  },
  {
    path: "/roadfreight",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Roadfreight />,
      },
    ],
  },
  {
    path: "/customclearance",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Customservice />,
      },
    ],
  },
  {
    path: "/warehousing",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Warehousing />,
      },
    ],
  },
  {
    path: "/dgcargo",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DGcargo />,
      },
    ],
  },
  

  {
    path: "/career",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Career />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Contact />,
      },
    ],
  },
  {
    path: "/aboutus",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Aboutus />,
      },
    ],
  },

  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/",
    element: <Services />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;

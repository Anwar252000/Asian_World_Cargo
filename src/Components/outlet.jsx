// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar'; // Adjust the path based on your file structure
import Footer from './Footer'; // Adjust the path based on your file structure
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Layout;

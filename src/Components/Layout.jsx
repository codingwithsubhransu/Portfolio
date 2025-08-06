import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar />
               <Outlet />
            {/* The Outlet component will render the child routes here */}
        </div>
    );
}

export default Layout;

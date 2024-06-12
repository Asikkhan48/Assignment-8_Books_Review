import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
                <Nav></Nav>
            </div>
            
            <div className='min-h-[calc(100vh- 120px)]'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;
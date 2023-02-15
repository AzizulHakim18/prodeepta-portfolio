import React from 'react';
import { Outlet } from 'react-router-dom';
import AboutHeader from './AboutHeader/AboutHeader';
import './welcome.css'
const About = () => {
    return (
        <div className='h-96 w-full lg:flex justify-around items-center flex-row-reverse'>

            <AboutHeader></AboutHeader>
            <Outlet ></Outlet>

        </div>
    );
};

export default About;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Sheared/Footer';
import Header from '../../Pages/Sheared/Header';
import './Main.css';
const Main = () => {
    return (
        <div>

            <div class="h-screen relative ">

                <div class="left-border absolute "></div>

                <div className='absolute w-screen'>
                    <div className='mx-20 px-24'>
                        <Header></Header>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
                </div>

                <div class="right-border absolute"></div>
            </div>


        </div>
    );
};

export default Main;
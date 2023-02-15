import React from 'react';
import About from '../About/About';
import Welcome from '../About/welcome';

const Home = () => {
    return (
        <div className='w-full lg:flex justify-around flex-row-reverse items-center'>
            <About></About>
            <Welcome></Welcome>
        </div>
    );
};

export default Home;
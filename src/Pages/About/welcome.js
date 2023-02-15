import React from 'react';
import './welcome.css';
const welcome = () => {
    return (
        <div>
            <div class="text-container lg:text-7xl md:text-4xl sm:text-2xl lg:font-extrabold sm:font-bold lg:m-4 sm:m-2 lg:p-8 sm-p-2">
                <span>W</span>
                <span>e</span>
                <span>l</span>
                <span>c</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
            </div>
            <div className='text-border lg:ml-4 sm:ml-0'>
                <p className='lg:ml-4 sm:ml-0'>My name is Ian Dunkerley, I'm a front-end developer based in Torquay, Devon, UK. I have developed many types of front-ends from well know DJ applications to Ecommerce booking platforms.</p>
                <p className='lg:ml-4 sm:ml-0'>I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX. </p>

                <button className='bg-slate-800 lg:ml-4 sm:ml-0 lg:p-4 sm:p-0 rounded text-xl font-bold hover:bg-green-500'>Download My CV</button>
            </div>
        </div>
    );
};

export default welcome;
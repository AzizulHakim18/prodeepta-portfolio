import React from 'react';
import { Link } from 'react-router-dom';

const AboutHeader = () => {
    return (
        <div>
            <h1 className=' border-b-4 border-indigo-500 text-2xl font-bold mb-4'>About Me</h1>
            <div className='flex flex-col border-l-4 border-indigo-500'>
                <Link className='text-xl font-semibold m-2 hover:text-sky-500 ease-in duration-300' to="/about/workexperiences">Experiences</Link>
                <Link className='text-xl font-semibold m-2 hover:text-sky-500 ease-in duration-300' to="/about/publication">Publication</Link>
                <Link className='text-xl font-semibold m-2 hover:text-sky-500 ease-in duration-300' to="/about/skills">Skills</Link>
            </div>
        </div>
    );
};

export default AboutHeader;

import React from 'react';

import HackathonImg from '../../img/Hackathon.png';
import './Hackathon.css';

const Hackathon = () => (
    <div className='Hackathon'>
        <div className='Info'>
            <h1 className='Title2'>Hackathon</h1>
            <p className='Para'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <img className='Img2' src={HackathonImg} />    
    </div>
);

export default Hackathon;
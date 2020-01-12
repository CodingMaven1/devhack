import React from 'react';

import Sponsors from '../../img/Sponsors.png'; 
import Button from '../../components/button/Button';
import './Sponsors.css';

const Sponsor = () => (
    <div className='Sponsors'>
        <div className='Info'>
            <h1 className='Title'>Register as a Sponsor</h1>
            <Button color='#FE524D' href='#'>Register</Button>
        </div>
        <img className='Img' src={Sponsors} />
    </div>
);

export default Sponsor;
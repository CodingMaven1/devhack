import React from 'react';

import Speakers from '../../img/Speakers.png'; 
import Button from '../../components/button/Button';
import './Speakers.css';

const Speaker = () => (
    <div className='Speakers'>
        <div className='Info'>
            <h1 className='Title3'>Register as a Speaker</h1>
            <Button color='#FFC334' href='#'>Register</Button>
        </div>
        <img className='Img' src={Speakers} />
    </div>
);

export default Speaker;
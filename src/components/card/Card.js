import React from 'react';

import Button from '../button/Button';
import './Card.css';

const Card = (props) => (
    <div className='Card'>
        <img style={{height: '11vh', width: 'auto'}} src={props.src} />
        <Button color={props.color} href={props.href}>{props.children}</Button>
    </div>
);

export default Card;
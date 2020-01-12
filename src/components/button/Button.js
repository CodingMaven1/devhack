import React from 'react';

import './Button.css'

const Button = (props) => (
    <div style={{backgroundColor: props.color}} className='Button'>
        <a className='Link' href={props.href}>{props.children}</a>
    </div>
)

export default Button;